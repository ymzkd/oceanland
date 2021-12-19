<template>
  <v-container>
    <v-row class="text-center">

      <!-- Top Description -->
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          海率計算
        </h1>

        <p class="subheading font-weight-regular">
          積雪荷重計算のための任意地点から任意半径内の円の面積に対する海の面積の比率(海率)を計算する。
        </p>
      </v-col>
    </v-row>

    <v-row>
      <!-- Graph Zone -->
      <v-col cols="12" sm="12" md="6" lg="6"
        class="mapplot pa-3"
      >
          <!-- class="mapplot"  -->

        <v-img
          max-height="450px"
          v-if="loaded"
          :src="plot_src"
          contain
        />

        <v-progress-circular
          v-else
          indeterminate>
        </v-progress-circular>
          <!-- height="200" -->
      </v-col>
      <!-- Input and Result Zone -->
      <v-col cols="12" sm="12" md="6" lg="6">
        <v-form>
          <v-container>
            <!-- Inputs -->
            <v-row>
              <v-col cols="12" xs="12" sm="6" md="3" lg="3">
                <v-text-field
                  type="number"
                  label="緯度"
                  placeholder="Longitude"
                  suffix="°"
                  v-model="longitude"
                ></v-text-field>
              </v-col>
              <v-col cols="12" xs="12" sm="6" md="3" lg="3">
                <v-text-field
                  type="number"
                  label="経度"
                  placeholder="Latitude"
                  suffix="°"
                  v-model="latitude"
                ></v-text-field>
              </v-col>
              <v-col cols="12" xs="12" sm="6" md="3" lg="3">
                <v-text-field
                  type="number"
                  label="半径"
                  placeholder="Radious"
                  v-model="radious"
                  suffix="km"
                ></v-text-field>
              </v-col>
              <v-col cols="12" xs="12" sm="6" md="3" lg="3">
                <v-btn
                  elevation="2"
                  @click="calculate"
                > calculate </v-btn>
              </v-col>
            </v-row>

            <!-- Results -->
            <v-row>
              <v-col
                cols="12"
                sm="6"
              >
                <v-text-field
                  :value="height"
                  label="海抜"
                  suffix="m"
                  readonly
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-text-field
                  :value="(rate*100).toFixed(5)"
                  label="海率"
                  suffix="%"
                  readonly
                  autofocus="false"
                ></v-text-field>
              </v-col>
            </v-row> <!-- Results -->
            
            
          </v-container>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'HelloWorld',

    data: () => ({
      loaded: true,
      longitude: 139.7454329,
      latitude: 35.6585805,
      radious: 40,
      height: 0,
      rate: 0,
      plot_src: '',
      apiurl: 'https://fast-brushlands-96070.herokuapp.com/',
      // apiurl: 'http://127.0.0.1:5000/',
    }),
    mounted: function(){
      this.calculate()
    },
    methods: {
      calculate(){
        this.loaded = false;
        axios
        .post(this.apiurl + 'pos', {
          lon: String(this.longitude),
          lat: String(this.latitude),
          rad: String(this.radious)
        })
        .then((res) => {
          this.loaded = true;
          this.height = res.data.elevation
          this.rate = res.data.sea_ratio
          this.plot_src = "data:image/png;base64," + res.data.image_src;
          console.log(res.data)
        })
      }
    }
  }
</script>

<style scoped>
.mapplot {
  border: 1px solid;
  height: 500px;
  border-radius: 2px;
}
</style>