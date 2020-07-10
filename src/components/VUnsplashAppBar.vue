<template>
  <v-app-bar v-bind="appBarProps" fixed app>
    <v-hover v-slot:default="{ hover }">
      <v-btn
        :class="{ rotateIconVunsplash: hover }"
        id="close-dialog-app-bar-btn-v-unsplash"
        class="ml-4 mr-1"
        icon
        @click="closeDialog"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-hover>
    <v-toolbar-title>{{ appBarTitle }}</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn
      class="mr-6"
      id="save-app-bar-btn-v-unsplash"
      large
      :color="saveButtonOutlined ? '' : '#00000000'"
      @click="saveSelection"
      :disabled="!selectionSaveable"
      :outlined="saveButtonOutlined"
      >{{ saveButtonLabel
      }}<v-icon class="ml-4" right>{{ saveButtonIcon }}</v-icon></v-btn
    >
  </v-app-bar>
</template>

<script>
export default {
  props: {
    appBarProps: {
      type: Object,
      required: true
    },
    appBarTitle: {
      type: String,
      required: true
    },
    selectionSaveable: {
      type: Boolean,
      required: true
    },
    saveButtonLabel: {
      type: String,
      required: true
    },
    saveButtonIcon: {
      type: String,
      required: true
    },
    saveButtonOutlined: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    closeDialog() {
      this.$emit("close");
    },
    saveSelection() {
      this.$emit("save");
    }
  }
};
</script>
<style scoped>
.rotateIconVunsplash {
  animation-timing-function: ease-in-out;
  transform: rotate(-180deg);
}
</style>
