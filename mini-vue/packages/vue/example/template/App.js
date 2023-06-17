import {
  h,
  ref,
  reactive
} from "../../dist/mini-vue.esm-bundler.js";


export default {
  name: "App",
  setup() {
    const msg = ref("hello world");
    return {
      msg
    }
  },
  template: `<div>hi {{msg}}</div>`,
  // render() {
  //   return h("div", {
  //     tId: 1
  //   }, [h("p", {}, "主页")]);
  // },
};