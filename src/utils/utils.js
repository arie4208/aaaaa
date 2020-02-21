export default {
  install(Vue) {
    Vue.prototype.addComma = $_number => {
      return $_number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
  }
};
