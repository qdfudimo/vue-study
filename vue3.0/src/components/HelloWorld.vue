<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>
    Edit <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
<div class="father">
    <van-swipe @change="onChange" ref="swiper">
    <van-swipe-item>1</van-swipe-item>
    <van-swipe-item>2</van-swipe-item>
    <van-swipe-item>3</van-swipe-item>
    <van-swipe-item>4</van-swipe-item>
  </van-swipe>
</div>
</template>

<script>
import { Toast } from "vant";
import {
  ref,
  watch,
  reactive,
  computed,
  onMounted,
  getCurrentInstance,
  onActivated,
  onDeactivated,
  onBeforeUnmount,
} from 'vue';
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  setup() {
    const swiper = ref(null);
    onMounted(()=>{
      console.log(swiper.value);
    })
    const onChange = (index) => Toast("当前 Swipe 索引：" + index);
    return { onChange,swiper };
  },
  data() {
    return {
      count: 0,
    };
  },
  mounted() {
    console.log(this.$refs.swiper);
  },
};
</script>
<style lang="less" scoped>
.father {
  height: 150px;
  border: 1px solid #ccc;
  /deep/ .van-swipe {
    height: 100%;
    /deep/.van-swipe-item {
      background: #66c6f2;
    }
  }
}
</style>
