<template>
  <v-container>
    <v-card-title class="text-h5 grey lighten-2">
      本計算シートについて
    </v-card-title>

    <v-card-text>
      標高は国土地理院にて提供されるDEMデータから標高を求めるAPI「<a
        href="https://maps.gsi.go.jp/development/elevation_s.html"
        >サーバサイドで経緯度から標高を求めるプログラム</a
      >」を用いている。
      海率は海岸線データを平成十四年国土交通省告示第九号に定める<a
        href="https://www.gsi.go.jp/LAW/heimencho.html"
        >平面直角座標系</a
      >に基づく投影方法にて投影し、算定したものである。なお、採用する平面座標系は告示別表の地域別ではなく簡単のため計算地点に最も近い座標系を採用する。
    </v-card-text>
  </v-container>
</template>

<script>
export default {
  name: 'OceanLandDesc',
};
</script>

<style>
</style>