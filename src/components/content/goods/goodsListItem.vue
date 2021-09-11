<template>
  <div class="goodsitem">
      <img :src="goodsitem.show.img" alt="">
      <div class="text">
          <p class="title">{{goodsitem.title}}</p>
          <span class="price">${{goodsitem.price}}</span>
          <span>★{{goodsitem.cfav}}</span>
      </div>
      
  </div>
</template>

<script>
export default {
    name : 'goodsListItem',
    props:{
        goodsitem:{
            typeof: Object
        }
    }
}
</script>

<style>
.goodsitem{
    width: 45%;
    text-align: center;
    font-size: 12px;
    position: relative;
}
.goodsitem img {
    width: 100%;
    height: 80%;
    border-radius: 10px;
    /* margin-bottom: 20px; */
}
.price {
    margin-right: 15px;
    color: pink;
}
.title {
    overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.text {
    position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  vertical-align: bottom;
  margin-top: 5px;
  font-size: 12px;
  overflow: hidden;
  text-align: center;
}
</style>