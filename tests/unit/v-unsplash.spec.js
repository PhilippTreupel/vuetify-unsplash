import VUnsplash from "../../src/components/VUnsplash";
import { mount, createLocalVue } from "@vue/test-utils";
import Vuetify from "vuetify";
import axios from "axios";
import Vue from "vue";
jest.mock("axios", () => ({
  get: jest.fn()
}));
describe("VUnsplash.vue", () => {
  let localVue;
  let wrapper;
  let vuetify;

  beforeEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
    localVue = createLocalVue();
    vuetify = new Vuetify();
    // container for v-dialog -> necessary to oppress the warning
    const app = document.createElement("div");
    app.setAttribute("data-app", true);
    document.body.append(app);
    wrapper = mount(VUnsplash, {
      localVue,
      vuetify,
      propsData: {
        value: true,
        unsplashApiKey: "AN_API_KEY"
      }
    });
  });
  it("renders and match snapshot", async () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.html()).toMatchSnapshot();
  });
  it("makes an API request and fills 'images' when you fire searchUnsplash(topic)", async () => {
    axios.get.mockImplementation(() =>
      Promise.resolve({
        data: {
          total: 3022,
          total_pages: 1008,
          results: [
            {
              id: "TzjMd7i5WQI",
              created_at: "2019-06-17T17:43:10-04:00",
              updated_at: "2020-06-28T01:16:03-04:00",
              promoted_at: null,
              width: 2745,
              height: 3663,
              color: "#110E0D",
              description: null,
              alt_description: "long-coated white and brown puppy",
              urls: {
                raw:
                  "https://images.unsplash.com/photo-1560807707-8cc77767d783?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE0NDMyNn0",
                full:
                  "https://images.unsplash.com/photo-1560807707-8cc77767d783?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NDMyNn0",
                regular:
                  "https://images.unsplash.com/photo-1560807707-8cc77767d783?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE0NDMyNn0",
                small:
                  "https://images.unsplash.com/photo-1560807707-8cc77767d783?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NDMyNn0",
                thumb:
                  "https://images.unsplash.com/photo-1560807707-8cc77767d783?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE0NDMyNn0"
              },
              links: {
                self: "https://api.unsplash.com/photos/TzjMd7i5WQI",
                html: "https://unsplash.com/photos/TzjMd7i5WQI",
                download: "https://unsplash.com/photos/TzjMd7i5WQI/download",
                download_location:
                  "https://api.unsplash.com/photos/TzjMd7i5WQI/download"
              },
              categories: [],
              likes: 294,
              liked_by_user: false,
              current_user_collections: [],
              sponsorship: null,
              user: {
                id: "gurBRb8nWAI",
                updated_at: "2020-06-29T00:01:30-04:00",
                username: "_redo_",
                name: "T.R Photography",
                first_name: "T.R",
                last_name: "Photography",
                twitter_username: "JoyCavalier",
                portfolio_url: null,
                bio: "my dog’s instagram: @joythecav",
                location: null,
                links: {
                  self: "https://api.unsplash.com/users/_redo_",
                  html: "https://unsplash.com/@_redo_",
                  photos: "https://api.unsplash.com/users/_redo_/photos",
                  likes: "https://api.unsplash.com/users/_redo_/likes",
                  portfolio: "https://api.unsplash.com/users/_redo_/portfolio",
                  following: "https://api.unsplash.com/users/_redo_/following",
                  followers: "https://api.unsplash.com/users/_redo_/followers"
                },
                profile_image: {
                  small:
                    "https://images.unsplash.com/profile-1574079504950-35a834933153image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
                  medium:
                    "https://images.unsplash.com/profile-1574079504950-35a834933153image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
                  large:
                    "https://images.unsplash.com/profile-1574079504950-35a834933153image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
                },
                instagram_username: "trd.reka",
                total_collections: 1,
                total_likes: 48,
                total_photos: 7,
                accepted_tos: true
              },
              tags: [
                {
                  type: "landing_page",
                  title: "dog",
                  source: {
                    ancestry: {
                      type: {
                        slug: "images",
                        pretty_slug: "Images"
                      },
                      category: {
                        slug: "animals",
                        pretty_slug: "Animals"
                      },
                      subcategory: {
                        slug: "dog",
                        pretty_slug: "Dog"
                      }
                    },
                    title: "Dog Images & Pictures",
                    subtitle: "Download free dog images",
                    description:
                      "Man's best friend is something to behold in all forms: gorgeous Golden Retrievers, tiny yapping chihuahuas, fearsome pitbulls. Unsplash's community of incredible photographers has helped us curate an amazing selection of dog images that you can access and use free of charge.",
                    meta_title:
                      "Dog Pictures | Download Free Images on Unsplash",
                    meta_description:
                      "Choose from hundreds of free dog pictures. Download HD dog photos for free on Unsplash.",
                    cover_photo: {
                      id: "tGBRQw52Thw",
                      created_at: "2018-01-19T09:20:08-05:00",
                      updated_at: "2020-06-14T01:18:04-04:00",
                      promoted_at: "2018-01-20T05:59:48-05:00",
                      width: 3264,
                      height: 4896,
                      color: "#F1F2F0",
                      description: "Dog day out",
                      alt_description: "short-coated brown dog",
                      urls: {
                        raw:
                          "https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-1.2.1",
                        full:
                          "https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb",
                        regular:
                          "https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
                        small:
                          "https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
                        thumb:
                          "https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max"
                      },
                      links: {
                        self: "https://api.unsplash.com/photos/tGBRQw52Thw",
                        html: "https://unsplash.com/photos/tGBRQw52Thw",
                        download:
                          "https://unsplash.com/photos/tGBRQw52Thw/download",
                        download_location:
                          "https://api.unsplash.com/photos/tGBRQw52Thw/download"
                      },
                      categories: [],
                      likes: 375,
                      liked_by_user: false,
                      current_user_collections: [],
                      sponsorship: null,
                      user: {
                        id: "toGyhBVt2M4",
                        updated_at: "2020-06-17T23:13:48-04:00",
                        username: "fredrikohlander",
                        name: "Fredrik Öhlander",
                        first_name: "Fredrik",
                        last_name: "Öhlander",
                        twitter_username: null,
                        portfolio_url: null,
                        bio: "fredrikohlander@gmail.com\r\n\r\n",
                        location: "El Stockholmo, Sweden",
                        links: {
                          self:
                            "https://api.unsplash.com/users/fredrikohlander",
                          html: "https://unsplash.com/@fredrikohlander",
                          photos:
                            "https://api.unsplash.com/users/fredrikohlander/photos",
                          likes:
                            "https://api.unsplash.com/users/fredrikohlander/likes",
                          portfolio:
                            "https://api.unsplash.com/users/fredrikohlander/portfolio",
                          following:
                            "https://api.unsplash.com/users/fredrikohlander/following",
                          followers:
                            "https://api.unsplash.com/users/fredrikohlander/followers"
                        },
                        profile_image: {
                          small:
                            "https://images.unsplash.com/profile-1530864939049-bcc82b6c41c2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
                          medium:
                            "https://images.unsplash.com/profile-1530864939049-bcc82b6c41c2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
                          large:
                            "https://images.unsplash.com/profile-1530864939049-bcc82b6c41c2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
                        },
                        instagram_username: "fredrikohlander",
                        total_collections: 10,
                        total_likes: 37,
                        total_photos: 151,
                        accepted_tos: true
                      }
                    }
                  }
                },
                {
                  type: "landing_page",
                  title: "puppy",
                  source: {
                    ancestry: {
                      type: {
                        slug: "images",
                        pretty_slug: "Images"
                      },
                      category: {
                        slug: "animals",
                        pretty_slug: "Animals"
                      },
                      subcategory: {
                        slug: "puppies",
                        pretty_slug: "Puppies"
                      }
                    },
                    title: "Puppies Images & Pictures",
                    subtitle: "Download free images of puppies",
                    description:
                      "Is there anything more emotive and endearing than images of puppies? No? Well, how about flawless, HD images of puppies taken by passionate professional photographers? Unsplash has over 900 puppy images to choose from. Beware of cuteness overload.",
                    meta_title:
                      "Puppies Pictures | Download Free Images on Unsplash",
                    meta_description:
                      "Choose from hundreds of free puppies pictures. Download HD puppies photos for free on Unsplash.",
                    cover_photo: {
                      id: "-AYS6hFdp7U",
                      created_at: "2018-12-07T10:50:16-05:00",
                      updated_at: "2020-06-07T01:13:13-04:00",
                      promoted_at: null,
                      width: 6000,
                      height: 4002,
                      color: "#18100B",
                      description:
                        "She’s been with us for only a few weeks, but is now very much part of the family",
                      alt_description:
                        "medium-coated tan puppy on white textile",
                      urls: {
                        raw:
                          "https://images.unsplash.com/photo-1544197807-bb503430e22d?ixlib=rb-1.2.1",
                        full:
                          "https://images.unsplash.com/photo-1544197807-bb503430e22d?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb",
                        regular:
                          "https://images.unsplash.com/photo-1544197807-bb503430e22d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
                        small:
                          "https://images.unsplash.com/photo-1544197807-bb503430e22d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
                        thumb:
                          "https://images.unsplash.com/photo-1544197807-bb503430e22d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max"
                      },
                      links: {
                        self: "https://api.unsplash.com/photos/-AYS6hFdp7U",
                        html: "https://unsplash.com/photos/-AYS6hFdp7U",
                        download:
                          "https://unsplash.com/photos/-AYS6hFdp7U/download",
                        download_location:
                          "https://api.unsplash.com/photos/-AYS6hFdp7U/download"
                      },
                      categories: [],
                      likes: 90,
                      liked_by_user: false,
                      current_user_collections: [],
                      sponsorship: null,
                      user: {
                        id: "t7XcCH2m2p0",
                        updated_at: "2020-05-26T14:25:19-04:00",
                        username: "jawis",
                        name: "Wai Siew",
                        first_name: "Wai",
                        last_name: "Siew",
                        twitter_username: null,
                        portfolio_url: null,
                        bio: null,
                        location: null,
                        links: {
                          self: "https://api.unsplash.com/users/jawis",
                          html: "https://unsplash.com/@jawis",
                          photos: "https://api.unsplash.com/users/jawis/photos",
                          likes: "https://api.unsplash.com/users/jawis/likes",
                          portfolio:
                            "https://api.unsplash.com/users/jawis/portfolio",
                          following:
                            "https://api.unsplash.com/users/jawis/following",
                          followers:
                            "https://api.unsplash.com/users/jawis/followers"
                        },
                        profile_image: {
                          small:
                            "https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
                          medium:
                            "https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
                          large:
                            "https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
                        },
                        instagram_username: "Jawis",
                        total_collections: 4,
                        total_likes: 502,
                        total_photos: 79,
                        accepted_tos: true
                      }
                    }
                  }
                },
                {
                  type: "landing_page",
                  title: "animal",
                  source: {
                    ancestry: {
                      type: {
                        slug: "images",
                        pretty_slug: "Images"
                      },
                      category: {
                        slug: "animals",
                        pretty_slug: "Animals"
                      }
                    },
                    title: "Animals Images & Pictures",
                    subtitle: "Download free animals images",
                    description:
                      "Passionate photographers have captured the most gorgeous animals in the world in their natural habitats and shared them with Unsplash. Now you can use these photos however you wish, for free!",
                    meta_title:
                      "Best 20+ Animals Pictures [HD] | Download Free Images on Unsplash",
                    meta_description:
                      "Choose from hundreds of free animals pictures. Download HD animals photos for free on Unsplash.",
                    cover_photo: {
                      id: "YozNeHM8MaA",
                      created_at: "2017-04-18T13:00:04-04:00",
                      updated_at: "2020-06-21T01:07:45-04:00",
                      promoted_at: "2017-04-19T13:54:55-04:00",
                      width: 5184,
                      height: 3456,
                      color: "#120803",
                      description:
                        "I met this dude on safari in Kruger National park in northern South Africa. The giraffes were easily in my favorite creatures to witness. They seemed almost prehistoric the the way the graced the African plain.",
                      alt_description: "selective focus photography of giraffe",
                      urls: {
                        raw:
                          "https://images.unsplash.com/photo-1492534513006-37715f336a39?ixlib=rb-1.2.1",
                        full:
                          "https://images.unsplash.com/photo-1492534513006-37715f336a39?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb",
                        regular:
                          "https://images.unsplash.com/photo-1492534513006-37715f336a39?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
                        small:
                          "https://images.unsplash.com/photo-1492534513006-37715f336a39?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
                        thumb:
                          "https://images.unsplash.com/photo-1492534513006-37715f336a39?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max"
                      },
                      links: {
                        self: "https://api.unsplash.com/photos/YozNeHM8MaA",
                        html: "https://unsplash.com/photos/YozNeHM8MaA",
                        download:
                          "https://unsplash.com/photos/YozNeHM8MaA/download",
                        download_location:
                          "https://api.unsplash.com/photos/YozNeHM8MaA/download"
                      },
                      categories: [],
                      likes: 1038,
                      liked_by_user: false,
                      current_user_collections: [],
                      sponsorship: null,
                      user: {
                        id: "J6cg9TA8-e8",
                        updated_at: "2020-05-12T09:05:39-04:00",
                        username: "judahlegge",
                        name: "Judah Legge",
                        first_name: "Judah",
                        last_name: "Legge",
                        twitter_username: null,
                        portfolio_url: null,
                        bio: null,
                        location: null,
                        links: {
                          self: "https://api.unsplash.com/users/judahlegge",
                          html: "https://unsplash.com/@judahlegge",
                          photos:
                            "https://api.unsplash.com/users/judahlegge/photos",
                          likes:
                            "https://api.unsplash.com/users/judahlegge/likes",
                          portfolio:
                            "https://api.unsplash.com/users/judahlegge/portfolio",
                          following:
                            "https://api.unsplash.com/users/judahlegge/following",
                          followers:
                            "https://api.unsplash.com/users/judahlegge/followers"
                        },
                        profile_image: {
                          small:
                            "https://images.unsplash.com/profile-fb-1492532922-001f65e39343.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
                          medium:
                            "https://images.unsplash.com/profile-fb-1492532922-001f65e39343.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
                          large:
                            "https://images.unsplash.com/profile-fb-1492532922-001f65e39343.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
                        },
                        instagram_username: null,
                        total_collections: 0,
                        total_likes: 4,
                        total_photos: 1,
                        accepted_tos: false
                      }
                    }
                  }
                }
              ]
            },
            {
              id: "qO-PIF84Vxg",
              created_at: "2018-08-15T17:11:28-04:00",
              updated_at: "2020-07-07T01:04:03-04:00",
              promoted_at: "2018-08-16T04:51:50-04:00",
              width: 5184,
              height: 3456,
              color: "#D0CBE9",
              description:
                "Fluffy cockapoo having the time of his life at the park",
              alt_description:
                "shallow focus photography of white shih tzu puppy running on the grass",
              urls: {
                raw:
                  "https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE0NDMyNn0",
                full:
                  "https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NDMyNn0",
                regular:
                  "https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE0NDMyNn0",
                small:
                  "https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NDMyNn0",
                thumb:
                  "https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE0NDMyNn0"
              },
              links: {
                self: "https://api.unsplash.com/photos/qO-PIF84Vxg",
                html: "https://unsplash.com/photos/qO-PIF84Vxg",
                download: "https://unsplash.com/photos/qO-PIF84Vxg/download",
                download_location:
                  "https://api.unsplash.com/photos/qO-PIF84Vxg/download"
              },
              categories: [],
              likes: 786,
              liked_by_user: false,
              current_user_collections: [],
              sponsorship: null,
              user: {
                id: "s_n3DlAm8iY",
                updated_at: "2020-06-25T16:43:05-04:00",
                username: "joeyc",
                name: "Joe Caione",
                first_name: "Joe",
                last_name: "Caione",
                twitter_username: "_JoeyC_",
                portfolio_url: "http://behance.net/joeyc",
                bio: "🍕🏀",
                location: "Cleveland, OH",
                links: {
                  self: "https://api.unsplash.com/users/joeyc",
                  html: "https://unsplash.com/@joeyc",
                  photos: "https://api.unsplash.com/users/joeyc/photos",
                  likes: "https://api.unsplash.com/users/joeyc/likes",
                  portfolio: "https://api.unsplash.com/users/joeyc/portfolio",
                  following: "https://api.unsplash.com/users/joeyc/following",
                  followers: "https://api.unsplash.com/users/joeyc/followers"
                },
                profile_image: {
                  small:
                    "https://images.unsplash.com/profile-1446647338458-f976efa11db9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
                  medium:
                    "https://images.unsplash.com/profile-1446647338458-f976efa11db9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
                  large:
                    "https://images.unsplash.com/profile-1446647338458-f976efa11db9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
                },
                instagram_username: "_joeyc_",
                total_collections: 0,
                total_likes: 120,
                total_photos: 16,
                accepted_tos: true
              },
              tags: [
                {
                  type: "landing_page",
                  title: "dog",
                  source: {
                    ancestry: {
                      type: {
                        slug: "images",
                        pretty_slug: "Images"
                      },
                      category: {
                        slug: "animals",
                        pretty_slug: "Animals"
                      },
                      subcategory: {
                        slug: "dog",
                        pretty_slug: "Dog"
                      }
                    },
                    title: "Dog Images & Pictures",
                    subtitle: "Download free dog images",
                    description:
                      "Man's best friend is something to behold in all forms: gorgeous Golden Retrievers, tiny yapping chihuahuas, fearsome pitbulls. Unsplash's community of incredible photographers has helped us curate an amazing selection of dog images that you can access and use free of charge.",
                    meta_title:
                      "Dog Pictures | Download Free Images on Unsplash",
                    meta_description:
                      "Choose from hundreds of free dog pictures. Download HD dog photos for free on Unsplash.",
                    cover_photo: {
                      id: "tGBRQw52Thw",
                      created_at: "2018-01-19T09:20:08-05:00",
                      updated_at: "2020-06-14T01:18:04-04:00",
                      promoted_at: "2018-01-20T05:59:48-05:00",
                      width: 3264,
                      height: 4896,
                      color: "#F1F2F0",
                      description: "Dog day out",
                      alt_description: "short-coated brown dog",
                      urls: {
                        raw:
                          "https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-1.2.1",
                        full:
                          "https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb",
                        regular:
                          "https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
                        small:
                          "https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
                        thumb:
                          "https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max"
                      },
                      links: {
                        self: "https://api.unsplash.com/photos/tGBRQw52Thw",
                        html: "https://unsplash.com/photos/tGBRQw52Thw",
                        download:
                          "https://unsplash.com/photos/tGBRQw52Thw/download",
                        download_location:
                          "https://api.unsplash.com/photos/tGBRQw52Thw/download"
                      },
                      categories: [],
                      likes: 375,
                      liked_by_user: false,
                      current_user_collections: [],
                      sponsorship: null,
                      user: {
                        id: "toGyhBVt2M4",
                        updated_at: "2020-06-17T23:13:48-04:00",
                        username: "fredrikohlander",
                        name: "Fredrik Öhlander",
                        first_name: "Fredrik",
                        last_name: "Öhlander",
                        twitter_username: null,
                        portfolio_url: null,
                        bio: "fredrikohlander@gmail.com\r\n\r\n",
                        location: "El Stockholmo, Sweden",
                        links: {
                          self:
                            "https://api.unsplash.com/users/fredrikohlander",
                          html: "https://unsplash.com/@fredrikohlander",
                          photos:
                            "https://api.unsplash.com/users/fredrikohlander/photos",
                          likes:
                            "https://api.unsplash.com/users/fredrikohlander/likes",
                          portfolio:
                            "https://api.unsplash.com/users/fredrikohlander/portfolio",
                          following:
                            "https://api.unsplash.com/users/fredrikohlander/following",
                          followers:
                            "https://api.unsplash.com/users/fredrikohlander/followers"
                        },
                        profile_image: {
                          small:
                            "https://images.unsplash.com/profile-1530864939049-bcc82b6c41c2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
                          medium:
                            "https://images.unsplash.com/profile-1530864939049-bcc82b6c41c2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
                          large:
                            "https://images.unsplash.com/profile-1530864939049-bcc82b6c41c2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
                        },
                        instagram_username: "fredrikohlander",
                        total_collections: 10,
                        total_likes: 37,
                        total_photos: 151,
                        accepted_tos: true
                      }
                    }
                  }
                },
                {
                  type: "landing_page",
                  title: "animal",
                  source: {
                    ancestry: {
                      type: {
                        slug: "images",
                        pretty_slug: "Images"
                      },
                      category: {
                        slug: "animals",
                        pretty_slug: "Animals"
                      }
                    },
                    title: "Animals Images & Pictures",
                    subtitle: "Download free animals images",
                    description:
                      "Passionate photographers have captured the most gorgeous animals in the world in their natural habitats and shared them with Unsplash. Now you can use these photos however you wish, for free!",
                    meta_title:
                      "Best 20+ Animals Pictures [HD] | Download Free Images on Unsplash",
                    meta_description:
                      "Choose from hundreds of free animals pictures. Download HD animals photos for free on Unsplash.",
                    cover_photo: {
                      id: "YozNeHM8MaA",
                      created_at: "2017-04-18T13:00:04-04:00",
                      updated_at: "2020-06-21T01:07:45-04:00",
                      promoted_at: "2017-04-19T13:54:55-04:00",
                      width: 5184,
                      height: 3456,
                      color: "#120803",
                      description:
                        "I met this dude on safari in Kruger National park in northern South Africa. The giraffes were easily in my favorite creatures to witness. They seemed almost prehistoric the the way the graced the African plain.",
                      alt_description: "selective focus photography of giraffe",
                      urls: {
                        raw:
                          "https://images.unsplash.com/photo-1492534513006-37715f336a39?ixlib=rb-1.2.1",
                        full:
                          "https://images.unsplash.com/photo-1492534513006-37715f336a39?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb",
                        regular:
                          "https://images.unsplash.com/photo-1492534513006-37715f336a39?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
                        small:
                          "https://images.unsplash.com/photo-1492534513006-37715f336a39?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
                        thumb:
                          "https://images.unsplash.com/photo-1492534513006-37715f336a39?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max"
                      },
                      links: {
                        self: "https://api.unsplash.com/photos/YozNeHM8MaA",
                        html: "https://unsplash.com/photos/YozNeHM8MaA",
                        download:
                          "https://unsplash.com/photos/YozNeHM8MaA/download",
                        download_location:
                          "https://api.unsplash.com/photos/YozNeHM8MaA/download"
                      },
                      categories: [],
                      likes: 1038,
                      liked_by_user: false,
                      current_user_collections: [],
                      sponsorship: null,
                      user: {
                        id: "J6cg9TA8-e8",
                        updated_at: "2020-05-12T09:05:39-04:00",
                        username: "judahlegge",
                        name: "Judah Legge",
                        first_name: "Judah",
                        last_name: "Legge",
                        twitter_username: null,
                        portfolio_url: null,
                        bio: null,
                        location: null,
                        links: {
                          self: "https://api.unsplash.com/users/judahlegge",
                          html: "https://unsplash.com/@judahlegge",
                          photos:
                            "https://api.unsplash.com/users/judahlegge/photos",
                          likes:
                            "https://api.unsplash.com/users/judahlegge/likes",
                          portfolio:
                            "https://api.unsplash.com/users/judahlegge/portfolio",
                          following:
                            "https://api.unsplash.com/users/judahlegge/following",
                          followers:
                            "https://api.unsplash.com/users/judahlegge/followers"
                        },
                        profile_image: {
                          small:
                            "https://images.unsplash.com/profile-fb-1492532922-001f65e39343.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
                          medium:
                            "https://images.unsplash.com/profile-fb-1492532922-001f65e39343.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
                          large:
                            "https://images.unsplash.com/profile-fb-1492532922-001f65e39343.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
                        },
                        instagram_username: null,
                        total_collections: 0,
                        total_likes: 4,
                        total_photos: 1,
                        accepted_tos: false
                      }
                    }
                  }
                },
                {
                  type: "search",
                  title: "pet"
                }
              ]
            },
            {
              id: "ngqyo2AYYnE",
              created_at: "2017-10-04T15:49:27-04:00",
              updated_at: "2020-07-07T01:40:32-04:00",
              promoted_at: "2017-10-05T13:29:50-04:00",
              width: 5184,
              height: 3456,
              color: "#F9F7F3",
              description: null,
              alt_description:
                "selective focus photography of short-coated brown puppy facing right side",
              urls: {
                raw:
                  "https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE0NDMyNn0",
                full:
                  "https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NDMyNn0",
                regular:
                  "https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE0NDMyNn0",
                small:
                  "https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NDMyNn0",
                thumb:
                  "https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE0NDMyNn0"
              },
              links: {
                self: "https://api.unsplash.com/photos/ngqyo2AYYnE",
                html: "https://unsplash.com/photos/ngqyo2AYYnE",
                download: "https://unsplash.com/photos/ngqyo2AYYnE/download",
                download_location:
                  "https://api.unsplash.com/photos/ngqyo2AYYnE/download"
              },
              categories: [],
              likes: 912,
              liked_by_user: false,
              current_user_collections: [],
              sponsorship: null,
              user: {
                id: "yWQ9VpYPOHE",
                updated_at: "2020-03-13T20:05:56-04:00",
                username: "berkaygumustekin",
                name: "Berkay Gumustekin",
                first_name: "Berkay",
                last_name: "Gumustekin",
                twitter_username: null,
                portfolio_url: null,
                bio: null,
                location: null,
                links: {
                  self: "https://api.unsplash.com/users/berkaygumustekin",
                  html: "https://unsplash.com/@berkaygumustekin",
                  photos:
                    "https://api.unsplash.com/users/berkaygumustekin/photos",
                  likes:
                    "https://api.unsplash.com/users/berkaygumustekin/likes",
                  portfolio:
                    "https://api.unsplash.com/users/berkaygumustekin/portfolio",
                  following:
                    "https://api.unsplash.com/users/berkaygumustekin/following",
                  followers:
                    "https://api.unsplash.com/users/berkaygumustekin/followers"
                },
                profile_image: {
                  small:
                    "https://images.unsplash.com/profile-1507145301102-a12df6093630?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
                  medium:
                    "https://images.unsplash.com/profile-1507145301102-a12df6093630?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
                  large:
                    "https://images.unsplash.com/profile-1507145301102-a12df6093630?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
                },
                instagram_username: "sberg.photo",
                total_collections: 3,
                total_likes: 0,
                total_photos: 28,
                accepted_tos: false
              },
              tags: [
                {
                  type: "landing_page",
                  title: "dog",
                  source: {
                    ancestry: {
                      type: {
                        slug: "images",
                        pretty_slug: "Images"
                      },
                      category: {
                        slug: "animals",
                        pretty_slug: "Animals"
                      },
                      subcategory: {
                        slug: "dog",
                        pretty_slug: "Dog"
                      }
                    },
                    title: "Dog Images & Pictures",
                    subtitle: "Download free dog images",
                    description:
                      "Man's best friend is something to behold in all forms: gorgeous Golden Retrievers, tiny yapping chihuahuas, fearsome pitbulls. Unsplash's community of incredible photographers has helped us curate an amazing selection of dog images that you can access and use free of charge.",
                    meta_title:
                      "Dog Pictures | Download Free Images on Unsplash",
                    meta_description:
                      "Choose from hundreds of free dog pictures. Download HD dog photos for free on Unsplash.",
                    cover_photo: {
                      id: "tGBRQw52Thw",
                      created_at: "2018-01-19T09:20:08-05:00",
                      updated_at: "2020-06-14T01:18:04-04:00",
                      promoted_at: "2018-01-20T05:59:48-05:00",
                      width: 3264,
                      height: 4896,
                      color: "#F1F2F0",
                      description: "Dog day out",
                      alt_description: "short-coated brown dog",
                      urls: {
                        raw:
                          "https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-1.2.1",
                        full:
                          "https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb",
                        regular:
                          "https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
                        small:
                          "https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
                        thumb:
                          "https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max"
                      },
                      links: {
                        self: "https://api.unsplash.com/photos/tGBRQw52Thw",
                        html: "https://unsplash.com/photos/tGBRQw52Thw",
                        download:
                          "https://unsplash.com/photos/tGBRQw52Thw/download",
                        download_location:
                          "https://api.unsplash.com/photos/tGBRQw52Thw/download"
                      },
                      categories: [],
                      likes: 375,
                      liked_by_user: false,
                      current_user_collections: [],
                      sponsorship: null,
                      user: {
                        id: "toGyhBVt2M4",
                        updated_at: "2020-06-17T23:13:48-04:00",
                        username: "fredrikohlander",
                        name: "Fredrik Öhlander",
                        first_name: "Fredrik",
                        last_name: "Öhlander",
                        twitter_username: null,
                        portfolio_url: null,
                        bio: "fredrikohlander@gmail.com\r\n\r\n",
                        location: "El Stockholmo, Sweden",
                        links: {
                          self:
                            "https://api.unsplash.com/users/fredrikohlander",
                          html: "https://unsplash.com/@fredrikohlander",
                          photos:
                            "https://api.unsplash.com/users/fredrikohlander/photos",
                          likes:
                            "https://api.unsplash.com/users/fredrikohlander/likes",
                          portfolio:
                            "https://api.unsplash.com/users/fredrikohlander/portfolio",
                          following:
                            "https://api.unsplash.com/users/fredrikohlander/following",
                          followers:
                            "https://api.unsplash.com/users/fredrikohlander/followers"
                        },
                        profile_image: {
                          small:
                            "https://images.unsplash.com/profile-1530864939049-bcc82b6c41c2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
                          medium:
                            "https://images.unsplash.com/profile-1530864939049-bcc82b6c41c2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
                          large:
                            "https://images.unsplash.com/profile-1530864939049-bcc82b6c41c2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
                        },
                        instagram_username: "fredrikohlander",
                        total_collections: 10,
                        total_likes: 37,
                        total_photos: 151,
                        accepted_tos: true
                      }
                    }
                  }
                },
                {
                  type: "landing_page",
                  title: "animal",
                  source: {
                    ancestry: {
                      type: {
                        slug: "images",
                        pretty_slug: "Images"
                      },
                      category: {
                        slug: "animals",
                        pretty_slug: "Animals"
                      }
                    },
                    title: "Animals Images & Pictures",
                    subtitle: "Download free animals images",
                    description:
                      "Passionate photographers have captured the most gorgeous animals in the world in their natural habitats and shared them with Unsplash. Now you can use these photos however you wish, for free!",
                    meta_title:
                      "Best 20+ Animals Pictures [HD] | Download Free Images on Unsplash",
                    meta_description:
                      "Choose from hundreds of free animals pictures. Download HD animals photos for free on Unsplash.",
                    cover_photo: {
                      id: "YozNeHM8MaA",
                      created_at: "2017-04-18T13:00:04-04:00",
                      updated_at: "2020-06-21T01:07:45-04:00",
                      promoted_at: "2017-04-19T13:54:55-04:00",
                      width: 5184,
                      height: 3456,
                      color: "#120803",
                      description:
                        "I met this dude on safari in Kruger National park in northern South Africa. The giraffes were easily in my favorite creatures to witness. They seemed almost prehistoric the the way the graced the African plain.",
                      alt_description: "selective focus photography of giraffe",
                      urls: {
                        raw:
                          "https://images.unsplash.com/photo-1492534513006-37715f336a39?ixlib=rb-1.2.1",
                        full:
                          "https://images.unsplash.com/photo-1492534513006-37715f336a39?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb",
                        regular:
                          "https://images.unsplash.com/photo-1492534513006-37715f336a39?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
                        small:
                          "https://images.unsplash.com/photo-1492534513006-37715f336a39?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
                        thumb:
                          "https://images.unsplash.com/photo-1492534513006-37715f336a39?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max"
                      },
                      links: {
                        self: "https://api.unsplash.com/photos/YozNeHM8MaA",
                        html: "https://unsplash.com/photos/YozNeHM8MaA",
                        download:
                          "https://unsplash.com/photos/YozNeHM8MaA/download",
                        download_location:
                          "https://api.unsplash.com/photos/YozNeHM8MaA/download"
                      },
                      categories: [],
                      likes: 1038,
                      liked_by_user: false,
                      current_user_collections: [],
                      sponsorship: null,
                      user: {
                        id: "J6cg9TA8-e8",
                        updated_at: "2020-05-12T09:05:39-04:00",
                        username: "judahlegge",
                        name: "Judah Legge",
                        first_name: "Judah",
                        last_name: "Legge",
                        twitter_username: null,
                        portfolio_url: null,
                        bio: null,
                        location: null,
                        links: {
                          self: "https://api.unsplash.com/users/judahlegge",
                          html: "https://unsplash.com/@judahlegge",
                          photos:
                            "https://api.unsplash.com/users/judahlegge/photos",
                          likes:
                            "https://api.unsplash.com/users/judahlegge/likes",
                          portfolio:
                            "https://api.unsplash.com/users/judahlegge/portfolio",
                          following:
                            "https://api.unsplash.com/users/judahlegge/following",
                          followers:
                            "https://api.unsplash.com/users/judahlegge/followers"
                        },
                        profile_image: {
                          small:
                            "https://images.unsplash.com/profile-fb-1492532922-001f65e39343.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
                          medium:
                            "https://images.unsplash.com/profile-fb-1492532922-001f65e39343.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
                          large:
                            "https://images.unsplash.com/profile-fb-1492532922-001f65e39343.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
                        },
                        instagram_username: null,
                        total_collections: 0,
                        total_likes: 4,
                        total_photos: 1,
                        accepted_tos: false
                      }
                    }
                  }
                },
                {
                  type: "search",
                  title: "pet"
                }
              ]
            }
          ]
        }
      })
    );
    await wrapper.vm.searchUnsplash("test");
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.images.length).toBeGreaterThan(0);
  });
  it("shows no data when search request returns nothing", async () => {
    wrapper.setData({
      images: [
        {
          id: "123456",
          selected: false,
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
          selected: true,
          description: "test image 2",
          urls: {
            thumb:
              "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
            small:
              "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          }
        }
      ],
      resultImages: [
        {
          id: "654321",
          selected: true,
          description: "test image 2",
          urls: {
            thumb:
              "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
            small:
              "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          }
        }
      ]
    });
    axios.get.mockImplementation(() =>
      Promise.resolve({
        data: {
          total: 0,
          total_pages: 0,
          results: []
        }
      })
    );
    await wrapper.vm.searchUnsplash("nonsensesearch");
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.noMatchingPictures).toBe(true);
  });
  it("shows no data when search request is rejected", async () => {
    axios.get.mockImplementation(() => Promise.reject());
    await wrapper.vm.searchUnsplash("nonsensesearch");
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.noMatchingPictures).toBe(true);
  });
  it("returns the right image objects on save", async () => {
    wrapper.setData({
      images: [
        {
          id: "123456",
          selected: false,
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
          selected: true,
          description: "test image 2",
          urls: {
            thumb:
              "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
            small:
              "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          }
        }
      ]
    });
    wrapper.setData({
      resultImages: [
        {
          id: "654321",
          description: "test image 2",
          urls: {
            thumb:
              "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
            small:
              "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          }
        }
      ]
    });
    wrapper.vm.saveImageSelection();
    await localVue.nextTick();
    expect(wrapper.emitted().result[0][0][0].id).toBe("654321");
  });
  it("returns the right image objects on save with fullPictureObjectResult=true", async () => {
    wrapper.setProps({
      fullPictureObjectResult: true
    });
    await Vue.nextTick();
    wrapper.setData({
      images: [
        {
          id: "123456",
          selected: false,
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
          selected: true,
          description: "test image 2",
          urls: {
            thumb:
              "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
            small:
              "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          }
        }
      ]
    });
    axios.get.mockImplementation(() =>
      Promise.resolve({
        data: {
          id: "654321",
          description: "test image 2",
          urls: {
            thumb:
              "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
            small:
              "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          }
        }
      })
    );
    await Vue.nextTick();
    await wrapper.vm.saveImageSelection();
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted().result[0][0][0].id).toBe("654321");
  });
  it("unselect image by id when calling unselectImageById(imageId)", () => {
    wrapper.setData({
      images: [
        {
          id: "654321",
          selected: true,
          description: "test image 2",
          urls: {
            thumb:
              "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
            small:
              "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          }
        }
      ]
    });
    wrapper.vm.unselectImageById("654321");
    expect(
      wrapper.vm.images.find(image => image.id === "654321").selected
    ).toBe(false);
  });
  it("shows the snackbar when calling showError(text)", async () => {
    wrapper.vm.showError("TEST");
    await Vue.nextTick();
    expect(wrapper.vm.snackbarText).toBe("TEST");
    expect(
      wrapper.findComponent({ ref: "snackbar-v-unplash" }).element
    ).toBeVisible();
  });

  it("returns right rbg value when calling hexToRgb(hex)", () => {
    const rgbColor = wrapper.vm.hexToRgb("#ff5324");
    expect(rgbColor.r).toBe(255);
    expect(rgbColor.g).toBe(83);
    expect(rgbColor.b).toBe(36);
  });
  it("changes image selection when calling changeImageSelection(image)", async () => {
    wrapper.setData({
      images: [
        {
          id: "123456",
          selected: false,
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
    });
    wrapper.vm.changeImageSelection(wrapper.vm.images[0]);
    expect(wrapper.vm.images[0].selected).toBe(true);
    wrapper.vm.changeImageSelection(wrapper.vm.images[1]);
    expect(wrapper.vm.showSnackbar).toBe(true);
    wrapper.vm.changeImageSelection(wrapper.vm.images[0]);
    expect(wrapper.vm.images[0].selected).toBe(false);
  });
  it("changes image selection when calling changeImageSelection(image) with selectMultiple=true", async () => {
    wrapper.setProps({
      selectMultiple: true,
      maxMultipleSelect: 2
    });
    await localVue.nextTick();
    wrapper.setData({
      images: [
        {
          id: "123456",
          selected: false,
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
        },
        {
          id: "678910",
          selected: true,
          description: "test image 3",
          urls: {
            thumb:
              "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
            small:
              "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          }
        }
      ]
    });
    wrapper.vm.changeImageSelection(wrapper.vm.images[0]);
    expect(wrapper.vm.images[0].selected).toBe(true);
    wrapper.vm.changeImageSelection(wrapper.vm.images[1]);
    expect(wrapper.vm.showSnackbar).toBe(true);
    wrapper.vm.changeImageSelection(wrapper.vm.images[0]);
    expect(wrapper.vm.images[0].selected).toBe(false);
  });
  it("selects all images when calling selectAllImages()", async () => {
    wrapper.setData({
      images: [
        {
          id: "123456",
          selected: false,
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
    });
    wrapper.vm.selectAllImages();
    for (let i = 0; i < wrapper.vm.images.length; i++) {
      expect(wrapper.vm.images[i].selected).toBe(true);
    }
  });
  it("unselects all images when calling unselectAllImages()", () => {
    wrapper.setData({
      images: [
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
          selected: true,
          description: "test image 2",
          urls: {
            thumb:
              "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
            small:
              "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          }
        }
      ]
    });
    wrapper.vm.unselectAllImages();
    for (let i = 0; i < wrapper.vm.images.length; i++) {
      expect(wrapper.vm.images[i].selected).toBe(false);
    }
  });
  it("updates images per page with number when updateItemsPerPage(number) is called", () => {
    const itemsPerPageTestValue = 10;
    wrapper.vm.updateItemsPerPage(itemsPerPageTestValue);
    expect(wrapper.vm.imagesPerPage).toBe(itemsPerPageTestValue);
  });
  it("behaves like defined in when calling formerPage()", () => {
    wrapper.setData({ page: 1 });
    wrapper.vm.formerPage();
    expect(wrapper.vm.page).toBe(1);
    wrapper.setData({ page: 2 });
    wrapper.vm.formerPage();
    expect(wrapper.vm.page).toBe(1);
  });
  it("behaves like defined in when calling nextPage()", async () => {
    wrapper.setProps({ imagesPerPage: 1 });
    wrapper.setData({
      page: 1,
      images: [
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
          selected: true,
          description: "test image 2",
          urls: {
            thumb:
              "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
            small:
              "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          }
        }
      ]
    });
    wrapper.vm.nextPage();
    await localVue.nextTick();
    expect(wrapper.vm.page).toBe(2);
    wrapper.vm.nextPage();
    expect(wrapper.vm.page).toBe(2);
  });
});
