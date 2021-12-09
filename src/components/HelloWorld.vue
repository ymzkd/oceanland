<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          海率計算
        </h1>

        <p class="subheading font-weight-regular">
          積雪荷重計算のための任意地点から任意半径内の円の面積に対する海の面積の比率(海率)を計算する。
        </p>
      </v-col>

      <v-col cols="12">
        <v-img
          :src="plot_src"
          class="my-3"
          contain
        />
          <!-- height="200" -->
      </v-col>
    </v-row>

    <v-form>
      <v-container>
        <v-row>
          <v-col
            cols="12"
            sm="6"
            md="3"
          >
            <v-text-field
              label="Longitude"
              placeholder="Longitude"
              v-model="longitude"
            ></v-text-field>
          </v-col>
          <p>経度</p>
          <v-col
            cols="12"
            sm="6"
            md="3"
          >
              <!-- label="Latitude" -->
            <v-text-field
              placeholder="Latitude"
              v-model="latitude"
            ></v-text-field>
          </v-col>
          <p>半径</p>
          <v-col
            cols="12"
            sm="6"
            md="3"
          >
              <!-- label="Latitude" -->
            <v-text-field
              placeholder="Radious"
              v-model="radious"
            ></v-text-field>
          </v-col>
          <v-btn
            elevation="2"
            @click="calculate"
          > calculate </v-btn>
        </v-row>
      </v-container>
    </v-form>
    <p> 海抜: {{height}} m, 海率: {{rate.toFixed(5)}} </p>
  </v-container>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'HelloWorld',

    data: () => ({
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
        axios
        .post(this.apiurl + 'pos', {
          lon: String(this.longitude),
          lat: String(this.latitude),
          rad: String(this.radious)
        })
        .then((res) => {
          this.height = res.data.elevation
          this.rate = res.data.sea_ratio
          this.plot_src = "data:image/png;base64," + res.data.image_src;
          console.log(res.data)
        })
      }
    }
  }
</script>
