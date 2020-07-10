import VUnsplashBlockSaveBtn from "../../src/components/VUnsplashBlockSaveBtn";
import { mount, createLocalVue } from "@vue/test-utils";
import Vuetify from "vuetify";
import Vue from "vue";

describe("VUnsplashBlockSaveBtn.vue", () => {
  let localVue;
  let wrapper;
  let vuetify;

  beforeEach(() => {
    localVue = createLocalVue();
    vuetify = new Vuetify();
    wrapper = mount(VUnsplashBlockSaveBtn, {
      localVue,
      vuetify,
      propsData: {
        accentColor: "#1976d2",
        isWhiteTextOnAccent: true,
        selectionSaveable: false,
        saveBtnLabel: "Save",
        saveBtnIcon: "mdi-content-save",
        saveBtnOutlined: true
      }
    });
  });
  it("renders and match snapshot", async () => {
    expect(wrapper.exists()).toBe(true);
    // With jest we can create snapshot files of the HTML output
    expect(wrapper.html()).toMatchSnapshot();
  });
  it("disabled the save button correctly", () => {
    expect(wrapper.find("#save-block-btn-v-unsplash").props("disabled")).toBe(
      true
    );
  });
  it("enables save button correctly when selectionSaveable=true", async () => {
    wrapper.setProps({
      selectionSaveable: true
    });
    await Vue.nextTick();
    expect(wrapper.find("#save-block-btn-v-unsplash").props("disabled")).toBe(
      false
    );
  });
  it("emits save event when save button is clicked", async () => {
    wrapper.setProps({
      selectionSaveable: true
    });
    await Vue.nextTick();
    wrapper.find("#save-block-btn-v-unsplash").trigger("click");
    expect(wrapper.emitted().save).toBeTruthy();
  });
});
