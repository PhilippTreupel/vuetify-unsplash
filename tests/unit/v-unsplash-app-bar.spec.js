import VUnsplashAppBar from "../../src/components/VUnsplashAppBar";
import { mount, createLocalVue } from "@vue/test-utils";
import Vuetify from "vuetify";
import Vue from "vue";

describe("VUnsplashAppBar.vue", () => {
  let localVue;
  let wrapper;
  let vuetify;

  beforeEach(() => {
    localVue = createLocalVue();
    vuetify = new Vuetify();
    wrapper = mount(VUnsplashAppBar, {
      localVue,
      vuetify,
      propsData: {
        appBarProps: {
          dark: true,
          color: "primary"
        },
        appBarTitle: "Choose an image",
        selectionSaveable: false,
        saveButtonLabel: "Save",
        saveButtonIcon: "mdi-content-save",
        saveButtonOutlined: true
      }
    });
  });
  it("renders and match snapshot", async () => {
    expect(wrapper.exists()).toBe(true);
    // With jest we can create snapshot files of the HTML output
    expect(wrapper.html()).toMatchSnapshot();
  });
  it("disabled the save button correctly", () => {
    expect(wrapper.find("#save-app-bar-btn-v-unsplash").props("disabled")).toBe(
      true
    );
  });
  it("enables save button correctly when selectionSaveable=true", async () => {
    wrapper.setProps({
      selectionSaveable: true
    });
    await Vue.nextTick();
    expect(wrapper.find("#save-app-bar-btn-v-unsplash").props("disabled")).toBe(
      false
    );
  });
  it("emits close event when close button is clicked", () => {
    wrapper.find("#close-dialog-app-bar-btn-v-unsplash").trigger("click");
    expect(wrapper.emitted().close).toBeTruthy();
  });
  it("emits save event when save button is clicked", async () => {
    wrapper.setProps({
      selectionSaveable: true
    });
    await Vue.nextTick();
    wrapper.find("#save-app-bar-btn-v-unsplash").trigger("click");
    expect(wrapper.emitted().save).toBeTruthy();
  });
});
