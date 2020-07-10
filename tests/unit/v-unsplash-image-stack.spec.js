import VUnsplashImageStack from "../../src/components/VUnsplashImageStack";
import { mount, createLocalVue } from "@vue/test-utils";
import Vuetify from "vuetify";

describe("VUnsplashImageStack.vue", () => {
  let localVue;
  let wrapper;
  let vuetify;

  beforeEach(() => {
    localVue = createLocalVue();
    vuetify = new Vuetify();
    wrapper = mount(VUnsplashImageStack, {
      localVue,
      vuetify,
      propsData: {
        imageHolderHeight: 700,
        accentColor: "#1976d2",
        isWhiteTextOnAccent: true,
        items: [
          {
            id: "123456",
            selected: true,
            description: "test image 1",
            urls: {
              thumb:
                "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
              small:
                "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            }
          },
          {
            id: "654321",
            selected: false,
            description: "test image 2",
            urls: {
              thumb:
                "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
              small:
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
  it("emits  changeImageSelection event with image when calling  changeImageSelection(image)", async () => {
    const image = {
      id: "654321",
      selected: false,
      description: "test image 2",
      urls: {
        thumb:
          "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
        small:
          "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
      }
    };
    wrapper.vm.changeImageSelection(image);
    expect(wrapper.emitted().changeImageSelection[0][0]).toBe(image);
  });
});
