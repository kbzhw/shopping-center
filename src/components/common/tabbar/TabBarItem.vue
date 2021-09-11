<template>
  <div class="tab-bar-item" @click="itemclick">
    <!-- <img src="../../../assets/img/tabbar/home.svg" alt="">
      <div>首页</div> -->
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :class="{ active: isActive }"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
  },
  data() {
    return {
    //   isActive: true,
    };
  },
  computed:{
      //通过计算属性动态的获取isActive到底是为true还是flase
      //当$route里面的path = 当前传过来的path 时当前这个组件返回true
      isActive(){
          return this.$route.path.indexOf(this.path) != -1;
      }
  },
  methods: {
    itemclick() {
      this.$router.replace(this.path);
    //   console.log(this.$router)
    },
  },
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
}

.tab-bar-item img {
  width: 20px;
  height: 20px;
}
.active {
  color: red;
}
</style>