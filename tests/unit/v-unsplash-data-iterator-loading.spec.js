import VUnsplashDataIteratorLoading from "../../src/components/VUnsplashDataIteratorLoading";
import { mount, createLocalVue } from "@vue/test-utils";
import Vuetify from "vuetify";

describe("VUnsplashDataIteratorLoading.vue", () => {
  let localVue;
  let wrapper;
  let vuetify;

  beforeEach(() => {
    localVue = createLocalVue();
    vuetify = new Vuetify();
    wrapper = mount(VUnsplashDataIteratorLoading, {
      localVue,
      vuetify,
      propsData: {
        loadingLabel: "Loading...",
        imageHolderHeight: 700,
        accentColor: "#1976d2"
      }
    });
  });
  it("renders and match snapshot", async () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
