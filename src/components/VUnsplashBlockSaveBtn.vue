<template>
  <v-app-bar app fixed bottom class="elevation-0" color="#00000000">
    <v-container fluid>
      <v-layout class="mx-8 py-1 d-flex justify-center">
        <v-btn
          class="my-1"
          x-large
          block
          :dark="isWhiteTextOnAccent && selectionSaveable"
          @click="saveSelection"
          :color="accentColor"
          :disabled="!selectionSaveable"
          :outlined="saveBtnOutlined"
          id="save-block-btn-v-unsplash"
          >{{ saveBtnLabel }}
          <v-icon class="ml-2">{{ saveBtnIcon }}</v-icon></v-btn
        >
      </v-layout>
    </v-container></v-app-bar
  >
</template>
<script>
export default {
  props: {
    accentColor: {
      type: String,
      required: true
    },
    isWhiteTextOnAccent: {
      type: Boolean,
      required: true
    },
    selectionSaveable: {
      type: Boolean,
      required: true
    },
    saveBtnLabel: {
      type: String,
      required: true
    },
    saveBtnOutlined: {
      type: Boolean,
      required: true
    },
    saveBtnIcon: {
      type: String,
      required: true
    }
  },
  methods: {
    saveSelection() {
      this.$emit("save");
    }
  }
};
</script>
