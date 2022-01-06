<template>
  <v-container>
    <div>
        <v-textarea
        name="input-7-1"
        clearable
        filled
        label="入力テキスト"
        auto-grow
        placeholder="変換テキスト"
        clear-icon="mdi-close-circle"
        v-model="str"
        @click:clear="cleartext"
        ></v-textarea>

        <v-textarea
        name="input-7-1"
        filled
        label="変換テキスト"
        auto-grow
        v-model="fixed"
        readonly
        append-icon="mdi-content-copy"
        @click:append="copyText"
        ></v-textarea>

        <v-btn block @click="copyText">
            Copy Text
        </v-btn>
      <!-- <textarea class="textzone" cols="80" rows="10" v-model="str"/> -->
      <!-- <div>変換済み</div> -->
      <!-- <textarea class="textzone" cols="80" rows="10" v-model="fixed" readonly/> -->
    </div>
  </v-container>
</template>

<script>
export default {
    name: 'TextTransform',
    data: () => ({
      str: "",
    }),
    computed: {
      fixed: function() {
        var aa = this.str.split(/\n/);
        var comb = "";
        aa.forEach((row) => {
          const r= row.trim();
          if (r[r.length - 1] == "-"){
            comb += r.slice(0, r.length - 2);
          } else {
            comb += " ";
            comb += r;
          }
        })
        return comb;
      },
      enableClip: function() {
        return (this.str.length > 0);
      }
    },
    methods: {
        copyText() {
            navigator.clipboard.writeText(this.fixed);
        },
        cleartext(){
          this.str = "";
        }
    }
}
</script>

<style>

</style>