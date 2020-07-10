<template>
  <v-card
    class="mx-0 mx-sm-6 mt-4 mb-2 px-4 px-sm-8 py-2 rounded-pill d-flex align-center"
  >
    <v-container fluid>
      <v-layout row>
        <v-flex xs12 class="d-flex justify-center align-center ">
          <v-text-field
            class="d-flex align-self-center mb-n8 v-unplash-search-bar-layout"
            v-model="searchText"
            prepend-icon="mdi-magnify"
            clear-icon="mdi-close"
            clearable
            outlined
            :color="accentColor"
            :label="searchTextFieldPlaceholder"
            type="text"
            :disabled="searchLoading"
            :loading="searchLoading"
            @keydown.esc.prevent="closeDialog"
            @keydown.enter.prevent="search(searchText)"
          >
            <template v-slot:append-outer>
              <div
                class="append-outer-vunsplash d-flex justify-center align-center pl-2"
              >
                <v-progress-circular
                  v-if="searchLoading"
                  :color="accentColor"
                  class="ml-3 mt-1"
                  indeterminate
                  :width="3"
                  size="24"
                ></v-progress-circular>
                <v-btn
                  v-else-if="searchText"
                  icon
                  :color="accentColor"
                  @click="search(searchText)"
                >
                  <v-icon>mdi-send</v-icon>
                </v-btn>
              </div>
            </template>
          </v-text-field>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>
<script>
export default {
  props: {
    accentColor: {
      type: String,
      required: true
    },
    searchLoading: {
      type: Boolean,
      required: true
    },
    searchTextFieldPlaceholder: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      searchText: null
    };
  },
  beforeDestroy() {
    this.searchText = null;
  },
  methods: {
    closeDialog() {
      this.$emit("close");
    },
    search(searchText) {
      this.$emit("search", searchText);
    }
  }
};
</script>
<style scoped>
.append-outer-vunsplash {
  margin-top: -8px !important;
}
</style>
<style>
.v-unplash-search-bar-layout > .v-input__prepend-outer {
  margin-top: 16px !important;
}
</style>
