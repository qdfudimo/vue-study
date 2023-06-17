// 在 render 中可以通过 this.xxx 访问到 setup 返回的对象
import {onMounted,h ,ref} from "../../dist/vue.esm.js";

export default {
  name: "App",
  setup() {
    onMounted((args)=>{
      console.log(111,args);
      console.log(div.value);
    })
    const div = ref()
    return ()=>{
      return h("div", {ref:div}, 222);
    }
  }
};
