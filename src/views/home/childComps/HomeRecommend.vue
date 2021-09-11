<template>
  <div class="home-recommend">
      <div v-for="(item,index) in recommends" :key="index" class="recommends-item">
          <a :href="item.link">
              <img :src="item.image" alt="">
              <div>{{item.title}}</div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
    name : 'HomeRecommend',
    props: {
        recommends:{
            type: Array,
            default(){
                return [];
            }
        }
    }
}
</script>

<style>
.home-recommend {
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 14px;
    padding-bottom: 20px;
}
.recommends-item{
    flex: 1;
}
.home-recommend img {
    width: 80px;
    margin-bottom: 10px;
    margin-top: 10px;
}
</style>