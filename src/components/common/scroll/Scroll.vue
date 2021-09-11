<template>
  <!-- 如果ref绑定在普通元素中，则通过this.$refs.refname获取到一个普通元素 -->
  <div class="wrapper" ref="wrapper">
    <div class="scrollContent">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
import ObserveDOM from "@better-scroll/observe-dom";
import PullUp from '@better-scroll/pull-up'

export default {
  name: "Scroll",
  data() {
    return {
      scroll: null,
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUploadItem: {
      type: Boolean,
      default: true,
    },
  },
  mounted() {
    BScroll.use(ObserveDOM);
    BScroll.use(PullUp);
    //创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      pullUpLoad: {
        threshold : -30 //threshold（阀值）  当上拉距离超过30px的时候触发pullingup事件
      },
       probeType: this.probeType,
      // scrollY: true,
      click: true,
      swipeTime: 1000,
      observeDOM: true,
      observeImage: true,
    });

    //监测实时滚动
    
      this.scroll.on('scroll', (position) => {
        this.$emit('scroll', position);
        // console.log(position);
      })
    

    //监听上拉事件
    
      this.scroll.on("pullingUp", () => {
        // console.log(1);
        this.$emit("pullingUp");
        // this.scroll.finishPullUP();
      });
  },
  methods: {
    finishPullUp() {
       this.scroll.finishPullUp();
    }
  }
};
</script>

<style>
</style>