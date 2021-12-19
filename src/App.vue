<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <!-- <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        /> -->

        <h2> Culculation Sheets </h2>
      </div>

      <v-spacer></v-spacer>
      <v-dialog
        v-model="dialog"
        width="500"
      >
        <template v-slot:activator="{ on, attrs }">
          <!-- <v-btn
            color="darkgrey lighten-2"
            dark
            v-bind="attrs"
            v-on="on"
          > -->
          <v-icon 
            color="darkgrey lighten-2"
            dark
            v-bind="attrs"
            v-on="on"
            large
          >
            mdi-information-outline
          </v-icon>
          <!-- </v-btn> -->
        </template>

        <v-card>
          <v-card-title class="text-h5 grey lighten-2">
            本計算シートについて
          </v-card-title>

          <v-card-text>
            標高は国土地理院にて提供されるDEMデータから標高を求めるAPI「<a href="https://maps.gsi.go.jp/development/elevation_s.html">サーバサイドで経緯度から標高を求めるプログラム</a>」を用いている。
            海率は海岸線データを平成十四年国土交通省告示第九号に定める<a href="https://www.gsi.go.jp/LAW/heimencho.html">平面直角座標系</a>に基づく投影方法にて投影し、算定したものである。なお、採用する平面座標系は告示別表の地域別ではなく簡単のため計算地点に最も近い座標系を採用する。
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              text
              @click="dialog = false"
            >
              OK
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <!-- <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn> -->
    </v-app-bar>

    <v-main>
      <HelloWorld/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    dialog: false,
  }),
};
</script>
