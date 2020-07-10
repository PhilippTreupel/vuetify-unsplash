import VUnsplashDataIteratorNoData from "../../src/components/VUnsplashDataIteratorNoData";
import { mount, createLocalVue } from "@vue/test-utils";
import Vuetify from "vuetify";

describe("VUnsplashDataIteratorNoData.vue", () => {
  let localVue;
  let wrapper;
  let vuetify;

  beforeEach(() => {
    localVue = createLocalVue();
    vuetify = new Vuetify();
    wrapper = mount(VUnsplashDataIteratorNoData, {
      localVue,
      vuetify,
      propsData: {
        imageHolderHeight: 700,
        noMatchingPictures: true,
        noMatchingPicturesLabel: "No matching pictures were found.",
        accentColor: "#1976d2"
      }
    });
  });
  it("renders and match snapshot", async () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
