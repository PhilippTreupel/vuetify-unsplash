<template>
  <div v-if="existingVuetifyInstance">
    <v-dialog
      v-model="value"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
      :dark="dark"
    >
      <v-card v-bind="mainCardProps">
        <v-unsplash-app-bar
          :app-bar-props="appBarProps"
          :app-bar-title="label.appBarTitle"
          :selection-saveable="selectionSaveable"
          :save-button-label="label.save"
          :save-button-icon="saveBtnIcon"
          :save-button-outlined="saveBtnOutlined"
          @close="closeDialog"
          @save="saveImageSelection"
        ></v-unsplash-app-bar>
        <div class="pr-8">
          <v-container fluid>
            <div class="pt-2">
              <v-card class="pt-1 mx-2 mr-4 mr-sm-0 mx-sm-8 mb-16 mt-16">
                <v-data-iterator
                  :items="images"
                  :loading="searchLoading"
                  :items-per-page.sync="imagesPerPage"
                  :page="page"
                  class="px-6 px-md-1"
                  hide-default-footer
                >
                  <template v-slot:header>
                    <v-unsplash-data-iterator-search-bar
                      :accent-color="accentColor"
                      :search-loading="searchLoading"
                      :search-text-field-placeholder="
                        label.searchTextFieldPlaceholder
                      "
                      @close="closeDialog"
                      @search="searchUnsplash"
                    ></v-unsplash-data-iterator-search-bar>
                    <v-unsplash-data-iterator-selection-header
                      :accent-color="accentColor"
                      :images="images"
                      :items-selected="itemsSelected"
                      :select-multiple="selectMultiple"
                      :max-multiple-select="maxMultipleSelect"
                      :number-of-selected-items="numberOfSelectedItems"
                      :number-of-images="numberOfImages"
                      :label="{
                        of: label.of,
                        selectAll: label.selectAll,
                        cancelSelection: label.cancelSelection,
                        selected: label.selected
                      }"
                      @unselectAllImages="unselectAllImages"
                      @selectAllImages="selectAllImages"
                      @unselectImageById="unselectImageById"
                    ></v-unsplash-data-iterator-selection-header>
                  </template>
                  <template v-slot:default="props">
                    <v-unsplash-image-stack
                      :accent-color="accentColor"
                      :image-holder-height="imageHolderHeight"
                      :is-white-text-on-accent="isWhiteTextOnAccent"
                      :items="props.items"
                      @changeImageSelection="changeImageSelection"
                    ></v-unsplash-image-stack>
                  </template>
                  <template v-slot:no-data v-slot:no-results>
                    <v-unsplash-data-iterator-no-data
                      :image-holder-height="imageHolderHeight"
                      :no-matching-pictures="noMatchingPictures"
                      :no-matching-pictures-label="label.noMatchingPictures"
                      :accent-color="accentColor"
                    ></v-unsplash-data-iterator-no-data>
                  </template>
                  <template v-slot:loading>
                    <v-unsplash-data-iterator-loading
                      :image-holder-height="imageHolderHeight"
                      :loading-label="label.loading"
                      :accent-color="accentColor"
                    ></v-unsplash-data-iterator-loading>
                  </template>
                  <template v-slot:footer>
                    <v-unsplash-data-iterator-footer
                      :accent-color="accentColor"
                      :is-white-text-on-accent="isWhiteTextOnAccent"
                      :number-of-pages="numberOfPages"
                      :images-per-page="imagesPerPage"
                      :page="page"
                      :dark="dark"
                      :label="{
                        itemsPerPage: label.itemsPerPage,
                        page: label.page,
                        of: label.of,
                        poweredBy: label.poweredBy
                      }"
                      @updateItemsPerPage="updateItemsPerPage"
                      @formerPage="formerPage"
                      @nextPage="nextPage"
                    ></v-unsplash-data-iterator-footer>
                  </template>
                </v-data-iterator>
              </v-card>
            </div>
          </v-container>
        </div>
        <v-unsplash-block-save-btn
          :is-white-text-on-accent="isWhiteTextOnAccent"
          :accent-color="accentColor"
          :save-btn-icon="saveBtnIcon"
          :save-btn-label="label.save"
          :save-btn-outlined="saveBtnOutlined"
          :selection-saveable="selectionSaveable"
          @save="saveImageSelection"
        ></v-unsplash-block-save-btn>
      </v-card>
      <v-snackbar
        v-model="showSnackbar"
        ref="snackbar-v-unplash"
        multi-line
        color="error"
        :dark="isWhiteTextOnError"
      >
        {{ snackbarText }}
        <template v-slot:action="{ attrs }">
          <v-btn text v-bind="attrs" @click="showSnackbar = false">
            {{ label.close }}
          </v-btn>
        </template>
      </v-snackbar>
      <v-overlay :value="heavyLoading">
        <v-progress-circular
          indeterminate
          size="64"
          :color="accentColor"
        ></v-progress-circular>
      </v-overlay>
    </v-dialog>
  </div>
  <div v-else>
    <v-app v-if="value">
      <v-dialog
        v-model="value"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
        :dark="dark"
      >
        <v-card v-bind="mainCardProps">
          <v-unsplash-app-bar
            :app-bar-props="appBarProps"
            :app-bar-title="label.appBarTitle"
            :selection-saveable="selectionSaveable"
            :save-button-label="label.save"
            :save-button-icon="saveBtnIcon"
            :save-button-outlined="saveBtnOutlined"
            @close="closeDialog"
            @save="saveImageSelection"
          ></v-unsplash-app-bar>
          <div class="pr-8">
            <v-container fluid>
              <div class="pt-2">
                <v-card class="pt-1 mx-2 mr-4 mr-sm-0 mx-sm-8 mb-16 mt-16">
                  <v-data-iterator
                    :items="images"
                    :loading="searchLoading"
                    :items-per-page.sync="imagesPerPage"
                    :page="page"
                    class="px-6 px-md-1"
                    hide-default-footer
                  >
                    <template v-slot:header>
                      <v-unsplash-data-iterator-search-bar
                        :accent-color="accentColor"
                        :search-loading="searchLoading"
                        :search-text-field-placeholder="
                          label.searchTextFieldPlaceholder
                        "
                        @close="closeDialog"
                        @search="searchUnsplash"
                      ></v-unsplash-data-iterator-search-bar>
                      <v-unsplash-data-iterator-selection-header
                        :accent-color="accentColor"
                        :images="images"
                        :items-selected="itemsSelected"
                        :select-multiple="selectMultiple"
                        :max-multiple-select="maxMultipleSelect"
                        :number-of-selected-items="numberOfSelectedItems"
                        :number-of-images="numberOfImages"
                        :label="{
                          of: label.of,
                          selectAll: label.selectAll,
                          cancelSelection: label.cancelSelection,
                          selected: label.selected
                        }"
                        @unselectAllImages="unselectAllImages"
                        @selectAllImages="selectAllImages"
                        @unselectImageById="unselectImageById"
                      ></v-unsplash-data-iterator-selection-header>
                    </template>
                    <template v-slot:default="props">
                      <v-unsplash-image-stack
                        :accent-color="accentColor"
                        :image-holder-height="imageHolderHeight"
                        :is-white-text-on-accent="isWhiteTextOnAccent"
                        :items="props.items"
                        @changeImageSelection="changeImageSelection"
                      ></v-unsplash-image-stack>
                    </template>
                    <template v-slot:no-data v-slot:no-results>
                      <v-unsplash-data-iterator-no-data
                        :image-holder-height="imageHolderHeight"
                        :no-matching-pictures="noMatchingPictures"
                        :no-matching-pictures-label="label.noMatchingPictures"
                        :accent-color="accentColor"
                      ></v-unsplash-data-iterator-no-data>
                    </template>
                    <template v-slot:loading>
                      <v-unsplash-data-iterator-loading
                        :image-holder-height="imageHolderHeight"
                        :loading-label="label.loading"
                        :accent-color="accentColor"
                      ></v-unsplash-data-iterator-loading>
                    </template>
                    <template v-slot:footer>
                      <v-unsplash-data-iterator-footer
                        :accent-color="accentColor"
                        :is-white-text-on-accent="isWhiteTextOnAccent"
                        :number-of-pages="numberOfPages"
                        :images-per-page="imagesPerPage"
                        :page="page"
                        :dark="dark"
                        :label="{
                          itemsPerPage: label.itemsPerPage,
                          page: label.page,
                          of: label.of,
                          poweredBy: label.poweredBy
                        }"
                        @updateItemsPerPage="updateItemsPerPage"
                        @formerPage="formerPage"
                        @nextPage="nextPage"
                      ></v-unsplash-data-iterator-footer>
                    </template>
                  </v-data-iterator>
                </v-card>
              </div>
            </v-container>
          </div>
          <v-unsplash-block-save-btn
            :is-white-text-on-accent="isWhiteTextOnAccent"
            :accent-color="accentColor"
            :save-btn-icon="saveBtnIcon"
            :save-btn-label="label.save"
            :save-btn-outlined="saveBtnOutlined"
            :selection-saveable="selectionSaveable"
            @save="saveImageSelection"
          ></v-unsplash-block-save-btn>
        </v-card>
        <v-snackbar
          v-model="showSnackbar"
          ref="snackbar-v-unplash"
          multi-line
          color="error"
          :dark="isWhiteTextOnError"
        >
          {{ snackbarText }}
          <template v-slot:action="{ attrs }">
            <v-btn text v-bind="attrs" @click="showSnackbar = false">
              {{ label.close }}
            </v-btn>
          </template>
        </v-snackbar>
        <v-overlay :value="heavyLoading">
          <v-progress-circular
            indeterminate
            size="64"
            :color="accentColor"
          ></v-progress-circular>
        </v-overlay>
      </v-dialog>
    </v-app>
  </div>
</template>
<script>
import axios from "axios";
import vuetify from "../plugins/vuetify";
import VUnsplashAppBar from "./VUnsplashAppBar";
import VUnsplashDataIteratorSearchBar from "./VUnsplashDataIteratorSearchBar";
import VUnsplashDataIteratorSelectionHeader from "./VUnsplashDataIteratorSelectionHeader";
import VUnsplashImageStack from "./VUnsplashImageStack";
import VUnsplashDataIteratorNoData from "./VUnsplashDataIteratorNoData";
import VUnsplashDataIteratorLoading from "./VUnsplashDataIteratorLoading";
import VUnsplashDataIteratorFooter from "./VUnsplashDataIteratorFooter";
import VUnsplashBlockSaveBtn from "./VUnsplashBlockSaveBtn";
export default {
  name: "VUnsplash",
  props: {
    value: {
      type: Boolean,
      required: true
    },
    unsplashApiKey: {
      type: String,
      required: true
    },
    selectMultiple: {
      type: Boolean
    },
    minMultipleSelect: {
      type: Number,
      default: 1
    },
    maxMultipleSelect: {
      type: Number,
      default: 1
    },
    fullPictureObjectResult: {
      type: Boolean
    },
    existingVuetifyInstance: {
      type: Boolean
    },
    numberOfImages: {
      type: Number,
      default: 20
    },
    imagesPerPage: {
      type: Number,
      default: 20
    },
    dark: {
      type: Boolean
    },
    accentColor: {
      type: String,
      default: "#1976d2"
    },
    errorColor: {
      type: String,
      default: "#C62828"
    },
    mainCardProps: {
      type: Object,
      default: () => ({})
    },
    appBarProps: {
      type: Object,
      default: () => ({})
    },
    label: {
      type: Object,
      default: () => {
        return {
          appBarTitle: "Choose an image",
          save: "Save",
          searchTextFieldPlaceholder: "Search...",
          noMatchingPictures: "No matching pictures were found.",
          itemsPerPage: "Items per page",
          page: "Page",
          of: "of",
          loading: "Loading...",
          selectAll: "Select all",
          cancelSelection: "Cancel selection",
          maxNumberSelectedError:
            "You have already selected the maximum number of images.",
          alreadySelectedError: "You have already selected an image. ",
          close: "Close",
          selected: "Selected",
          poweredBy: "Powered by"
        };
      }
    },
    saveBtnIcon: {
      type: String,
      default: "mdi-content-save"
    },
    saveBtnOutlined: {
      type: Boolean
    }
  },
  components: {
    VUnsplashAppBar,
    VUnsplashDataIteratorSearchBar,
    VUnsplashDataIteratorSelectionHeader,
    VUnsplashImageStack,
    VUnsplashDataIteratorNoData,
    VUnsplashDataIteratorLoading,
    VUnsplashDataIteratorFooter,
    VUnsplashBlockSaveBtn
  },
  data: () => ({
    searchText: null,
    searchLoading: false,
    heavyLoading: false,
    images: [],
    noMatchingPictures: false,
    page: 1,
    searchLoadingPercentage: 0,
    windowHeight: window.innerHeight,
    showSnackbar: false,
    snackbarText: "",
    resultImages: []
  }),
  mounted() {
    window.addEventListener("resize", () => {
      this.windowHeight = window.innerHeight;
    });
  },
  computed: {
    numberOfPages() {
      const num = Math.ceil(this.images.length / this.imagesPerPage);
      if (isNaN(num) || num === 0) {
        return 1;
      }
      return num;
    },
    imageHolderHeight() {
      return (
        this.windowHeight -
        (this.selectMultiple && this.itemsSelected ? 470 : 370)
      );
    },
    numberOfSelectedItems() {
      return this.images.filter(image => image.selected).length;
    },
    itemsSelected() {
      return this.numberOfSelectedItems > 0;
    },
    selectionSaveable() {
      if (this.selectMultiple) {
        return (
          this.numberOfSelectedItems >= this.minMultipleSelect &&
          this.numberOfSelectedItems <= this.maxMultipleSelect
        );
      } else {
        return this.itemsSelected;
      }
    },
    isWhiteTextOnAccent() {
      const colorRGB = this.hexToRgb(this.accentColor);
      return (
        colorRGB.r * 0.299 + colorRGB.g * 0.587 + colorRGB.b * 0.114 <= 186
      );
    },
    isWhiteTextOnError() {
      const colorRGB = this.hexToRgb(this.errorColor);
      return (
        colorRGB.r * 0.299 + colorRGB.g * 0.587 + colorRGB.b * 0.114 <= 186
      );
    }
  },
  methods: {
    closeDialog() {
      this.$emit("input", false);
      window.removeEventListener("resize", () => {
        this.windowHeight = window.innerHeight;
      });
      this.noMatchingPictures = false;
      this.searchLoading = false;
      this.page = 1;
      this.searchText = null;
      this.images = [];
      this.resultImages = [];
    },
    nextPage() {
      if (this.page + 1 <= this.numberOfPages) this.page += 1;
    },
    formerPage() {
      if (this.page - 1 >= 1) this.page -= 1;
    },
    updateItemsPerPage(number) {
      this.imagesPerPage = number;
    },
    searchUnsplash(topic) {
      // only keep selected images if user is searching something else
      this.images = this.images.filter(image => image.selected);
      if (!this.fullPictureObjectResult) {
        const oldResultImages = this.resultImages;
        this.resultImages = [];
        this.images.forEach(image => {
          this.resultImages.push(
            oldResultImages.find(findImage => findImage.id === image.id)
          );
        });
      }
      this.searchLoading = true;
      this.noMatchingPictures = false;
      axios
        .get(
          `https://api.unsplash.com/search/photos?query=${topic}&page=1&per_page=${this.numberOfImages}`,
          {
            headers: {
              Authorization: "Client-ID " + this.unsplashApiKey,
              "Accept-Version": "v1"
            },
            onUploadProgress: progressEvent => {
              this.searchLoadingPercentage = Math.floor(
                (progressEvent.loaded * 100) / progressEvent.total
              );
            }
          }
        )
        .then(response => {
          if (response.data.results.length === 0) {
            this.noMatchingPictures = true;
          }
          if (!this.fullPictureObjectResult) {
            this.resultImages.push(...response.data.results);
          }
          response.data.results.forEach(image => {
            this.images.push({
              id: image.id,
              urls: {
                small: image.urls.small,
                full: image.urls.full,
                thumb: image.urls.thumb
              },
              description: image.description,
              selected: false
            });
          });
          this.searchLoading = false;
        })
        .catch(() => {
          this.noMatchingPictures = true;
          this.searchLoading = false;
        });
    },
    unselectAllImages() {
      this.images
        .filter(image => image.selected)
        .forEach(image => {
          image.selected = false;
        });
    },
    selectAllImages() {
      this.images
        .filter(image => !image.selected)
        .forEach(image => {
          image.selected = true;
        });
    },
    changeImageSelection(image) {
      if (!image.selected) {
        const numberOfSelectedImages = this.images.filter(
          image => image.selected
        ).length;
        if (
          this.selectMultiple &&
          numberOfSelectedImages === this.maxMultipleSelect
        ) {
          this.showError(this.label.maxNumberSelectedError);
          return;
        } else if (!this.selectMultiple && numberOfSelectedImages > 0) {
          this.showError(this.label.alreadySelectedError);
          return;
        }
        this.images
          .filter(filterImage => filterImage.id === image.id)
          .forEach(foundImage => {
            foundImage.selected = true;
          });
      } else {
        this.images
          .filter(filterImage => filterImage.id === image.id)
          .forEach(foundImage => {
            foundImage.selected = false;
          });
      }
    },
    hexToRgb(hex) {
      const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
      hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
      });
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result
        ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
          }
        : null;
    },
    showError(text) {
      this.snackbarText = text;
      this.showSnackbar = true;
    },
    unselectImageById(imageId) {
      this.images
        .filter(image => image.id === imageId)
        .forEach(image => {
          image.selected = false;
        });
    },
    saveImageSelection() {
      if (this.fullPictureObjectResult) {
        //TODO: Debug!
        this.heavyLoading = true;
        const fullImageResults = [];
        this.images = this.images.filter(image => image.selected);
        for (let i = 0; i < this.images.length; i++) {
          axios
            .get(`https://api.unsplash.com/photos/${this.images[i].id}`, {
              headers: {
                Authorization: "Client-ID " + this.unsplashApiKey,
                "Accept-Version": "v1"
              }
            })
            .then(response => {
              fullImageResults.push(response.data);
            })
            .catch(() => {});
        }

        this.$emit("result", fullImageResults);
        this.heavyLoading = false;
        this.closeDialog();
      } else {
        this.heavyLoading = true;
        const oldResultImages = this.resultImages;
        this.resultImages = [];
        this.images = this.images.filter(image => image.selected);
        this.images.forEach(image => {
          this.resultImages.push(
            oldResultImages.find(findImage => findImage.id === image.id)
          );
        });
        this.$emit("result", this.resultImages);
        this.heavyLoading = false;
        this.closeDialog();
      }
    }
  },
  vuetify
};
</script>
