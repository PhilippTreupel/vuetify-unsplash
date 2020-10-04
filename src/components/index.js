import Vue from "vue";
import VUnsplash from "./VUnsplash";
const Components = {
  VUnsplash
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;
