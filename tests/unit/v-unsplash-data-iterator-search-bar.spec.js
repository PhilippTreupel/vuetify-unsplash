import VUnsplashDataIteratorSearchBar from "../../src/components/VUnsplashDataIteratorSearchBar";
import { mount, createLocalVue } from "@vue/test-utils";
import Vuetify from "vuetify";

describe("VUnsplashDataIteratorSearchBar.vue", () => {
  let localVue;
  let wrapper;
  let vuetify;

  beforeEach(() => {
    localVue = createLocalVue();
    vuetify = new Vuetify();
    wrapper = mount(VUnsplashDataIteratorSearchBar, {
      localVue,
      vuetify,
      propsData: {
        searchLoading: false,
        searchTextFieldPlaceholder: "Search...",
        accentColor: "#1976d2"
      }
    });
  });
  it("renders and match snapshot", async () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.html()).toMatchSnapshot();
    wrapper.destroy();
  });
  it("emits close event when calling closeDialog()", async () => {
    wrapper.vm.closeDialog();
    expect(wrapper.emitted().close).toBeTruthy();
  });
  it("emits search event with text when calling search(searchText)", async () => {
    const searchText = "testSearch";
    wrapper.vm.search(searchText);
    expect(wrapper.emitted().search[0][0]).toBe(searchText);
  });
});
