<template>
  <v-card
    class="elevation-0 overflow-y-auto"
    :height="imageHolderHeight + 'px'"
  >
    <v-layout class="mx-6 d-flex justify-center align-center pt-4">
      <stack
        :column-min-width="300"
        :gutter-width="15"
        :gutter-height="15"
        monitor-images-loaded
      >
        <stack-item
          v-for="(image, i) in items"
          class="stack-item-vunsplash d-flex justify-center"
          :key="i"
        >
          <div>
            <v-badge
              class="badge"
              :color="accentColor"
              bordered
              overlap
              :value="image.selected"
            >
              <template v-slot:badge>
                <v-icon
                  class="font-weight-bold"
                  :color="isWhiteTextOnAccent ? '#FFFFFF' : '#000000'"
                  >mdi-check</v-icon
                >
              </template>
              <v-card
                class="pa-0 elevation-0 img-card-vunsplash rounded-lg"
                flat
                color="#00000000"
                @click.native="changeImageSelection(image)"
              >
                <img
                  :style="[
                    image.selected
                      ? {
                          'border-color': accentColor,
                          'border-width': '3px !important'
                        }
                      : {
                          'border-color': '#00000000',
                          'border-width': '0px !important'
                        }
                  ]"
                  class="img-vunsplash rounded-lg"
                  :src="image.urls.small"
                  :alt="image.description"
                  style="width: 100%; height: auto; border: 3px solid #00000000 !important; padding: 0;"
                />
                <div
                  class="overlay-vunsplash rounded-lg"
                  :style="
                    image.selected
                      ? {
                          opacity: '0.5',
                          'background-color': accentColor
                        }
                      : { opacity: '0' }
                  "
                ></div>
              </v-card>
            </v-badge>
          </div>
        </stack-item>
      </stack>
    </v-layout>
  </v-card>
</template>
<script>
import { Stack, StackItem } from "vue-stack-grid";
export default {
  props: {
    imageHolderHeight: {
      type: Number,
      default: window.innerHeight - 370,
      required: true
    },
    items: {
      type: Array,
      required: true
    },
    accentColor: {
      type: String,
      required: true
    },
    isWhiteTextOnAccent: {
      type: Boolean,
      required: true
    }
  },
  components: {
    Stack,
    StackItem
  },
  methods: {
    changeImageSelection(image) {
      this.$emit("changeImageSelection", image);
    }
  }
};
</script>
<style scoped>
.stack-item-vunsplash {
  transition: transform 300ms;
}
.img-card-vunsplash::before {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  background-color: rgba(0, 0, 0, 0);
  outline: none;
  box-shadow: none !important;
}
.img-vunsplash {
  width: 100%;
  height: auto;
  margin: 0;
  transition: border-width 0.15s ease-out;
}
.overlay-vunsplash {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  margin: 0;
  padding: 0;
  transition: 0.5s ease;
}
</style>
