<template>
  <v-layout class="mt-2 mx-6 pa-2 d-flex justify-center align-center">
    <span class="grey--text mt-1">{{ label.itemsPerPage }}</span>
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          :dark="isWhiteTextOnAccent"
          text
          :color="accentColor"
          class="ml-2"
          v-bind="attrs"
          v-on="on"
        >
          {{ imagesPerPage }}
          <v-icon>mdi-chevron-down</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(number, index) in itemsPerPageArray"
          :key="index"
          @click="updateItemsPerPage(number)"
        >
          <v-list-item-title>{{ number }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-spacer></v-spacer>
    <div class="d-flex justify-center">
      <small class="grey--text" :style="dark ? { color: '#A6A6A6' } : {}"
        >{{ label.poweredBy }}
        <a
          href="https://unsplash.com/"
          style="text-decoration: none;"
          class="grey--text font-weight-bold"
          >Unplash</a
        ></small
      >
    </div>
    <v-spacer></v-spacer>
    <v-btn
      icon
      :color="accentColor"
      :disabled="page === 1"
      class="mr-1"
      @click="formerPage"
      id="former-page-btn-v-unsplash"
    >
      <v-icon>mdi-chevron-left</v-icon>
    </v-btn>
    <span
      class="mx-2 page-span-vunsplash
            grey--text"
    >
      {{ label.page }} {{ page }} {{ label.of }}
      {{ numberOfPages }}
    </span>

    <v-btn
      icon
      :color="accentColor"
      :disabled="page === numberOfPages"
      class="ml-1"
      @click="nextPage"
      id="next-page-btn-v-unsplash"
    >
      <v-icon>mdi-chevron-right</v-icon>
    </v-btn>
  </v-layout>
</template>
<script>
export default {
  props: {
    label: {
      type: Object,
      required: true
    },
    accentColor: {
      type: String,
      required: true
    },
    dark: {
      type: Boolean,
      required: true
    },
    isWhiteTextOnAccent: {
      type: Boolean,
      required: true
    },
    numberOfPages: {
      type: Number,
      required: true
    },
    imagesPerPage: {
      type: Number,
      required: true
    },
    page: {
      type: Number,
      required: true
    }
  },

  data() {
    return {
      itemsPerPageArray: [5, 10, 15, 20, 25, 30]
    };
  },
  methods: {
    updateItemsPerPage(number) {
      this.$emit("updateItemsPerPage", number);
    },
    formerPage() {
      this.$emit("formerPage");
    },
    nextPage() {
      this.$emit("nextPage");
    }
  }
};
</script>
