<template>
  <div id="HomeSwiper">
    <swiper :options="swiperOptions">
    <slot></slot>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {
  name : 'HomeSwiper',
  data(){
    return {
      swiperOptions:{
        pagination:'.swiper-pagination',
        loop:true,
        autoplay:3000
      }
    }
  }
}
</script>

<style>
#HomeSwiper{
  overflow: hidden;
  /* height: 0; */
  width: 100%;
}
</style>