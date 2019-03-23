import Vue from "vue"
import ayuFloatinput from "./FloatInput"
import ayuPagination from "./Pagination"
import ayuSelect from "./Select";
import ayuOption from "./Select/option";
import ayuCarousel from "./Carousel";
import ayuCarouselItem from "./Carousel/item";
const Components = {
  ayuFloatinput,
  ayuPagination,
  ayuSelect,
  ayuOption,
  ayuCarousel,
  ayuCarouselItem
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
});

export default Components
