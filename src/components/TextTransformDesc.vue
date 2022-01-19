<template>
  <v-container>
    <v-card-title class="text-h5 grey lighten-2">
      本計算シートについて
    </v-card-title>

    <v-card-text>
      OCR結果などの細切れのテキストを一行に変換、英語のハイフン(-)で行末と行頭で1単語とするケースなどを反映
    </v-card-text>
  </v-container>
</template>

<script>
export default {
  name: 'TextTransformDesc',
};
</script>

<style>
</style>