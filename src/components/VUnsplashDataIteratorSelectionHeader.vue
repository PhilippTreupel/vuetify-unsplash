<template>
  <v-container fluid>
    <v-card v-if="selectMultiple && itemsSelected" class="pa-2">
      <v-layout
        row
        class="d-flex align-center px-3 px-md-6 pb-1 justify-center"
      >
        <v-flex class="justify-start shrink">
          <span
            >{{ label.selected }}
            <span class="font-weight-bold">{{ numberOfSelectedItems }}</span>
            {{ label.of }}
            <span class="font-weight-bold">{{ maxMultipleSelect }}</span>
          </span>
        </v-flex>
        <v-divider vertical class="mx-4"></v-divider>
        <v-flex class="justify-start">
          <v-progress-circular
            :value="(numberOfSelectedItems / maxMultipleSelect) * 100"
            :color="accentColor"
          ></v-progress-circular>
        </v-flex>
        <v-spacer></v-spacer>
        <v-flex class="d-flex justify-end align-center px-2">
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn
                icon
                :color="accentColor"
                v-on="on"
                @click="unselectAllImages"
                class="mr-1"
                ><v-icon>mdi-select-off</v-icon></v-btn
              >
            </template>
            <span>{{ label.cancelSelection }}</span>
          </v-tooltip>
          <v-tooltip
            v-if="selectMultiple && maxMultipleSelect >= numberOfImages"
            bottom
          >
            <template v-slot:activator="{ on }">
              <v-btn
                icon
                :color="accentColor"
                v-on="on"
                @click="selectAllImages"
                class="ml-1"
                ><v-icon>mdi-select-all</v-icon></v-btn
              >
            </template>
            <span>{{ label.selectAll }}</span>
          </v-tooltip>
        </v-flex>
      </v-layout>
      <v-divider></v-divider>
      <v-layout row class="justify-start px-6 pt-1">
        <v-flex v-for="(image, i) in images" :key="i" class="shrink">
          <v-chip
            v-if="image.selected"
            close
            pill
            class="ma-1"
            @click:close="unselectImageById(image.id)"
          >
            <v-avatar left>
              <v-img :src="image.urls.thumb"></v-img>
            </v-avatar>
          </v-chip>
        </v-flex>
      </v-layout>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: {
    itemsSelected: {
      type: Boolean,
      required: true
    },
    selectMultiple: {
      type: Boolean,
      required: true
    },
    label: {
      type: Object,
      required: true
    },
    maxMultipleSelect: {
      type: Number,
      required: true
    },
    numberOfSelectedItems: {
      type: Number,
      required: true
    },
    accentColor: {
      type: String,
      required: true
    },
    numberOfImages: {
      type: Number,
      required: true
    },
    images: {
      type: Array,
      required: true
    }
  },
  methods: {
    unselectAllImages() {
      this.$emit("unselectAllImages");
    },
    unselectImageById(imageId) {
      this.$emit("unselectImageById", imageId);
    },
    selectAllImages() {
      this.$emit("selectAllImages");
    }
  }
};
</script>
