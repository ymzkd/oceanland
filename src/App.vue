<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer" clipped>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> Tools </v-list-item-title>
          <v-list-item-subtitle> Under Developing </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item link to="/">
          <v-list-item-icon>
            <v-icon>mdi-earth</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Ocean Land</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/text">
          <v-list-item-icon>
            <v-icon>mdi-text-box-check-outline</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Text Transform</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/sound">
          <v-list-item-icon>
            <v-icon>mdi-text-box-check-outline</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Sound Analysis</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="primary" dark clipped-left>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <div class="d-flex align-center">
        <h2>SD Toolkit</h2>
      </div>

      <v-spacer></v-spacer>
      <v-dialog v-model="dialog" width="500">
        <template v-slot:activator="{ on, attrs }">
          <v-icon
            color="darkgrey lighten-2"
            dark
            v-bind="attrs"
            v-on="on"
            large
          >
            mdi-information-outline
          </v-icon>
        </template>

        <v-card>
          <text-transform-desc v-if="routepath=='text'"/>
          <ocean-land-desc v-else />
          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="dialog = false"> OK </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import OceanLandDesc from './components/OceanLandDesc.vue';
import TextTransformDesc from './components/TextTransformDesc.vue';
export default {
  name: "App",

  components: {
    OceanLandDesc,
    TextTransformDesc
  },

  data: () => ({
    dialog: false,
    drawer: null,
  }),
  computed: {
    routepath: function() {
      return this.$route.name;
    }
  }
};
</script>
