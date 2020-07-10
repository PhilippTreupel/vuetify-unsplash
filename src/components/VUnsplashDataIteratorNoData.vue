<template>
  <v-card
    class="elevation-0 overflow-y-auto"
    :height="imageHolderHeight - 10 + 'px'"
  >
    <v-layout
      class="d-flex justify-center align-center"
      :fill-height="imageHolderHeight + 'px'"
    >
      <v-alert
        class="text-center"
        text
        outlined
        :color="accentColor"
        :style="noMatchingPictures ? { opacity: '1' } : { opacity: '0' }"
        >{{ noMatchingPicturesLabel }}</v-alert
      >
    </v-layout>
  </v-card>
</template>
<script>
export default {
  props: {
    imageHolderHeight: {
      type: Number,
      required: true
    },
    accentColor: {
      type: String,
      required: true
    },
    noMatchingPictures: {
      type: Boolean,
      required: true
    },
    noMatchingPicturesLabel: {
      type: String,
      required: true
    }
  }
};
</script>
