<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Vuetify Unsplash Example</v-toolbar-title>
      <v-spacer> </v-spacer>
      <v-flex class="d-flex justify-end"
        ><v-btn color="#00000000" large @click="changeTheme" class="mr-12"
          >Dark Mode
          <v-icon class="ml-2">
            {{ $vuetify.theme.dark ? "mdi-brightness-7" : "mdi-brightness-6" }}
          </v-icon>
        </v-btn></v-flex
      >
    </v-app-bar>
    <v-main class="d-flex">
      <v-container>
        <v-card class="px-12 pt-8" outlined>
          <div class="text-start display-1">Settings</div>
          <v-layout row class="py-4 d-flex justify-center align-center">
            <v-flex xs12 md6 class="d-flex align-center justify-start">
              <v-switch
                v-model="selectMultiple"
                label="Select multiple images"
              ></v-switch>
            </v-flex>
            <v-flex xs12 md6 class="d-flex align-center justify-center pt-4">
              <v-range-slider
                thumb-label
                v-model="range"
                max="20"
                min="1"
                label="Number of selectable images"
                class="align-center mt-6"
                :disabled="!selectMultiple"
              ></v-range-slider>
            </v-flex>
            <v-flex></v-flex>
          </v-layout>
        </v-card>
        <v-layout row class="my-12">
          <v-flex xs12 class="d-flex justify-center">
            <v-btn x-large color="primary" @click="showDialog = true"
              >Open Unsplash Chooser</v-btn
            >
          </v-flex>
        </v-layout>
        <v-unsplash
          v-model="showDialog"
          :app-bar-props="{ color: 'primary', dark: true }"
          accent-color="#1976D2"
          :dark="$vuetify.theme.dark"
          :select-multiple="selectMultiple"
          :min-multiple-select="range[0]"
          :max-multiple-select="range[1]"
          :full-picture-object-result="true"
          :unsplash-api-key="process.env.VUE_APP_UNSPLASH_API_KEY"
          @result="displayResults"
        />
        <v-spacer></v-spacer>
        <v-layout class="d-flex justify-center mt-10" row>
          <v-flex
            v-for="(image, i) in imageList"
            xs12
            md6
            xl4
            :key="i"
            class="pa-4"
          >
            <v-card>
              <v-img
                aspect-ratio="1"
                class="white--text align-end"
                :src="image.urls.full"
              >
                <v-card-title>{{ image.description }}</v-card-title>
              </v-img>

              <v-card-subtitle class="pb-0">{{
                formatDate(new Date(image.created_at.toLocaleString()))
              }}</v-card-subtitle>

              <v-card-text class="text--primary">
                <div>
                  By <a :href="image.user.links.html">{{ image.user.name }}</a>
                </div>

                <div>
                  Powered by <a href="https://unsplash.com/">Unsplash</a>
                </div>
              </v-card-text>
            </v-card>
          </v-flex></v-layout
        >
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import VUnsplash from "./components/VUnsplash";

export default {
  name: "App",

  components: {
    VUnsplash
  },

  data: () => ({
    showDialog: false,
    selectMultiple: false,
    range: [3, 8],
    imageList: []
  }),
  methods: {
    displayResults(imageList) {
      this.imageList = imageList;
    },
    changeTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
    formatDate(date) {
      let day = date.getDate();
      let month = date.getMonth();
      month = month + 1;
      if (String(day).length === 1) day = "0" + day;
      if (String(month).length === 1) month = "0" + month;
      return day + "." + month + "." + date.getFullYear();
    }
  }
};
</script>
