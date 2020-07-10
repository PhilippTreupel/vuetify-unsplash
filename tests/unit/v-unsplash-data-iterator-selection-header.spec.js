import VUnsplashDataIteratorSelectionHeader from "../../src/components/VUnsplashDataIteratorSelectionHeader";
import { mount, createLocalVue } from "@vue/test-utils";
import Vuetify from "vuetify";

describe("VUnsplashDataIteratorSelectionHeader.vue", () => {
  let localVue;
  let wrapper;
  let vuetify;

  beforeEach(() => {
    localVue = createLocalVue();
    vuetify = new Vuetify();
    wrapper = mount(VUnsplashDataIteratorSelectionHeader, {
      localVue,
      vuetify,
      propsData: {
        accentColor: "#1976d2",
        itemsSelected: true,
        selectMultiple: true,
        label: {
          of: "of",
          selectAll: "select all",
          cancelSelection: "cancel selection",
          selected: "selected"
        },
        maxMultipleSelect: 2,
        numberOfSelectedItems: 1,
        numberOfImages: 10,
        images: [
          {
            id: "123456",
            selected: true,
            urls: {
              thumb:
                "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            }
          }
        ]
      }
    });
  });
  it("renders and match snapshot", async () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.html()).toMatchSnapshot();
  });
  it("emits unselectAllImages event when calling unselectAllImages()", async () => {
    wrapper.vm.unselectAllImages();
    expect(wrapper.emitted().unselectAllImages).toBeTruthy();
  });
  it("emits selectAllImages event when calling selectAllImages()", async () => {
    wrapper.vm.selectAllImages();
    expect(wrapper.emitted().selectAllImages).toBeTruthy();
  });
  it("emits unselectImageById  event with id of image when calling unselectImageById(imageId)", async () => {
    const imageId = 123456768;
    wrapper.vm.unselectImageById(imageId);
    expect(wrapper.emitted().unselectImageById[0][0]).toBe(imageId);
  });
});
