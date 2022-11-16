<template>
  <v-container>
    <p>TEST TEXT</p>
    <v-select
        v-model="selectedDevice"
        :items="selectlabels"
        label="マイクデバイス"
    ></v-select>
    <p> 選択デバイス: {{selectedDevice}} </p>
    <p> 選択デバイスID: {{selectedID}} </p>
    <canvas id="visualizer" width="800" height="300"></canvas>
    <v-btn v-on:click="startclick" elevation="2"> Start </v-btn>
    <v-btn v-on:click="stopclick" elevation="2"> Stop </v-btn>
  </v-container>
</template>

<script>
export default {
    name: 'SoundAnalysis',
    data: () => ({
        audioStream: null,
        reader: null,
        audioContext: null,
        canvasContent: null,
        canvas: null,
        animationId: null,
        analyser: null,
        mediaRecorder: null,
        chunks: null,
        devicenames: [],
        selectedDevice: null,
        fftArrayMax: null
    }),
    mounted(){
        this.canvas = document.getElementById('visualizer');
        this.canvasContent = this.canvas.getContext('2d');
        this.canvasContent.fillStyle = 'green';
        this.canvasContent.fillRect(10, 10, 100, 100);
        this.canvasContent.fillStyle = 'pink';

        // ↓↓↓  スマホ等では、なんでもよいから最初にgetUserMediaしたほうがよいという
        // 噂をきいたのでやってみたが、不要？
        navigator.mediaDevices.getUserMedia({audio: true}).then(stream => {
            const audioCtx = new AudioContext()
            const analyser = audioCtx.createAnalyser();
            const source = audioCtx.createMediaStreamSource(stream);
            source.connect(analyser);
        });
        // ↑↑↑  スマホ等では、なんでもよいから最初にgetUserMediaしたほうがよいという
        // 噂をきいたのでやってみたが、不要？

        navigator.mediaDevices.enumerateDevices().then(
            devices => {
                for (const device of devices.filter(d => d.kind === 'audioinput')) {
                    this.devicenames.push(device);
                }
            }
        )
    },
    computed: {
        selectlabels(){
            let labels = [];
            for(var i=0; i<this.devicenames.length ; i++){
                labels.push(this.devicenames[i].label);
            }
            return labels;
        },
        selectedID(){
            let selectedID_name;
            this.devicenames.forEach(elem => {
                if (this.selectedDevice==elem.label) {
                    selectedID_name = elem.deviceId;
                }
            });
            return selectedID_name;
        }
    },
    methods: {
        startclick() {
            this.canvas = document.getElementById('visualizer');
            this.canvasContent = this.canvas.getContext('2d');
            // this.canvasContext.fillRect(0, 0, 100, 100);
            this.canvasContent.clearRect(0, 0, this.canvas.width, this.canvas.height);
            // this.render_canvas();
            this.audiosetup();
            
        },
        stopclick(){
            this.mediaRecorder.stop();
            this.stopAudio();
        },
        audiosetup() {
            navigator.mediaDevices.getUserMedia({audio: {deviceId: this.selectedID}}).then(stream => {
                this.audioStream = stream
            });

            this.audioContext = new AudioContext;
            this.analyser = this.audioContext.createAnalyser();
            const source = this.audioContext.createMediaStreamSource(this.audioStream);
            source.connect(this.analyser);

            this.analyser.fftSize = 2048;
            this.fftArrayMax = new Uint8Array(this.analyser.frequencyBinCount)

            this.chunks = []
            this.mediaRecorder = new MediaRecorder(this.audioStream, {
                mimeType: 'audio/webm'
            })

            this.mediaRecorder.addEventListener('dataavailable', e => {
                if (e.data.size > 0) {
                    this.chunks.push(e.data);
                    console.log("data available")
                }
            })
            this.mediaRecorder.addEventListener('stop', e => {
                console.log(e)
                const blob = new Blob(this.chunks)
                this.reader = new FileReader()
                this.reader.readAsArrayBuffer(blob)
                this.reader.onload = () => {
                    this.audioContext.decodeAudioData(this.reader.result).then(buf => {
                        const b = buf.getChannelData(0)
                        console.log(b)
                    })
                }
            })
            this.mediaRecorder.start();

            // var old_time = 0.0;
            const delta_sampling = 1.0 / this.audioContext.sampleRate;
            console.log(`sampling delta: ${delta_sampling * 1000}`)
            const loop = () => {
                // const delta = this.audioContext.currentTime - old_time;
                // old_time = this.audioContext.currentTime;
                // console.log(this.analyser.frequencyBinCount);
                // const ts = this.audioContext.getOutputTimestamp()
                // console.log(`Delta time: ${delta*1000}`);
                // console.log(this.audioContext)
                // console.log(`Context time: ${ts.contextTime} | Performance time: ${ts.performanceTime} | Delta time: ${delta*1000}`);
                if (!this.audioStream) {
                    return
                }
                this.drawFreq(this.analyser)
                setTimeout(loop, 10)
            }
            loop()
        },
        drawFreq(analyser) {
            const bufferLength = analyser.frequencyBinCount
            const dataArray = new Uint8Array(bufferLength)
            analyser.getByteFrequencyData(dataArray)

            const context = this.canvas.getContext('2d')

            context.clearRect(0, 0, this.canvas.width, this.canvas.height)
            context.fillStyle = 'rgb(0, 0, 0)'
            const barWidth = (this.canvas.width / bufferLength) * 2.5
            let x = 0
            for (let i = 0; i < bufferLength; i++) {
                const barHeight = dataArray[i] / 2
                context.fillStyle = 'green'
                context.fillRect(x*barWidth, 0, barWidth*2, barHeight)
                // context.fillRect(x*2, this.canvas.height - barHeight / 2, barWidth, barHeight)
                x += barWidth + 1
                this.fftArrayMax[i] = Math.max(dataArray[i], this.fftArrayMax[i])
                context.fillStyle = 'red'
                const barHeightMax = this.fftArrayMax[i] / 2
                context.fillRect(x*barWidth, barHeightMax, barWidth*2, 2)
            }
        },
        stopAudio(){
            if (this.audioStream) {
                const stream = this.audioStream
                if (stream) {
                    stream.getTracks().forEach(track => {
                        track.stop()
                    })
                }
                this.audioStream = null
            }
        },
        render_canvas() {
            var spectrums = new Uint8Array(this.analyser.frequencyBinCount);
            this.analyser.getByteFrequencyData(spectrums);
            this.canvasContent.clearRect(0, 0, this.canvas.width, this.canvas.height);
            console.log(spectrums);
            for(var i=0, len=spectrums.length; i<len; i++){
                this.canvasContent.fillRect(i*10, 0, 5, spectrums[i]);
            }

            // console.log("analyser bins: ", this.analyser.frequencyBinCount);
            // this.animationId = requestAnimationFrame(this.render_canvas);
        },
    }
}
</script>