<template>
  <div class="goodslist">
    <goods-list-item v-for="(item,index) in goods" :key="index" :goodsitem="item"></goods-list-item>
    
  </div>
</template>

<script>

import goodsListItem from './goodsListItem.vue'
export default {
    name : 'goosList',
    components:{
      goodsListItem
    },
    props:{
      goods:{
        type:Array,
        default(){
          return []
      }
      }
    }
}
</script>

<style>
.goodslist{
  width: 100%;
  display: flex;
  /* align-content: flex-start; */
  flex-wrap: wrap;
  justify-content: space-around;
  padding-bottom: 20px;
}
</style>