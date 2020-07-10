<template>
  <v-card
    class="elevation-0 overflow-y-auto"
    :height="imageHolderHeight + 'px'"
  >
    <v-layout
      class="d-flex justify-center align-center"
      :fill-height="imageHolderHeight - 10 + 'px'"
    >
      <v-progress-circular
        :size="100"
        :width="7"
        :color="accentColor"
        indeterminate
        >{{ loadingLabel }}</v-progress-circular
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
      default: "#1976d2",
      required: true
    },
    loadingLabel: {
      type: String,
      default: "Loading...",
      required: true
    }
  }
};
</script>
