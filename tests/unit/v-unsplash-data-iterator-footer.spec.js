import VUnsplashDataIteratorFooter from "../../src/components/VUnsplashDataIteratorFooter";
import { mount, createLocalVue } from "@vue/test-utils";
import Vuetify from "vuetify";

describe("VUnsplashDataIteratorFooter.vue", () => {
  let localVue;
  let wrapper;
  let vuetify;

  beforeEach(() => {
    localVue = createLocalVue();
    vuetify = new Vuetify();
    wrapper = mount(VUnsplashDataIteratorFooter, {
      localVue,
      vuetify,
      propsData: {
        label: {
          itemsPerPage: "Items per page",
          page: "Page",
          of: "of",
          poweredBy: "powered by"
        },
        dark: true,
        numberOfPages: 4,
        imagesPerPage: 20,
        page: 2,
        accentColor: "#1976d2",
        isWhiteTextOnAccent: true
      }
    });
  });
  it("renders and match snapshot", async () => {
    expect(wrapper.exists()).toBe(true);
    // With jest we can create snapshot files of the HTML output
    expect(wrapper.html()).toMatchSnapshot();
  });
  it("emits number of items per page event when click on list item of dropdown menu", async () => {
    wrapper.vm.updateItemsPerPage(5);
    expect(wrapper.emitted().updateItemsPerPage[0][0]).toBe(5);
  });
  it("emits former page event when clicking on former page button", async () => {
    wrapper.find("#former-page-btn-v-unsplash").trigger("click");
    expect(wrapper.emitted().formerPage).toBeTruthy();
  });
  it("emits nextPage event when clicking on next page button", async () => {
    wrapper.find("#next-page-btn-v-unsplash").trigger("click");
    expect(wrapper.emitted().nextPage).toBeTruthy();
  });
});
