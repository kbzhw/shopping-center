<template>
    <div id="home">
      <nav-bar class="home-nav">
      <template v-slot:center>
        <div class="home-center">购物街</div>
      </template>
      </nav-bar>

     <scroll class="content" 
            ref="scroll"
            :probe-type="3"
            :pull-upload-item="true"
            @scroll="getScroll"
            @pullingUp="loadMore">
        <home-swiper>
        <swiper-slide v-for="(item,index) in banners" :key="index">
          <a :href="item.link">
              <img :src="item.image" alt="">
          </a>
        </swiper-slide>
      </home-swiper>

      <home-recommend :recommends="recommends"></home-recommend>

      <div class="selected">
        <a href="https://pro.m.jd.com/mall/active/DpSh7ma8JV7QAxSE2gJNro8Q2h9/index.html?babelChannel=ttt5">
        <img src="../../assets/img/home/recommend_bg.jpg" alt="">
        </a>
      </div>

      <tab-nav :tabnav="tabnav" @tabNavClick = "tabNavClick"></tab-nav>

      
      <goods-list :goods="goods[this.currentType].list"></goods-list>
     </scroll>
      <back-top @click.native="backClick" v-show="isShow"></back-top>


    </div>

</template>

<script>
import NavBar from '../../components/common/navbar/NavBar.vue'
import HomeSwiper from '../../components/common/swiper/Swiper.vue'
import HomeRecommend from './childComps/HomeRecommend.vue'
import TabNav from '../../components/content/tabnav/TabNav.vue'
import goodsList from '../../components/content/goods/goodsList.vue'
import Scroll from '../../components/common/scroll/Scroll.vue'
import backTop from '../../components/content/backtop/backTop.vue'
import {getHomeData,getHomeGoods} from '../../network/home'



export default {
    name: 'Home',
    components:{
      NavBar,
      HomeSwiper,
      HomeRecommend,
      TabNav,
      goodsList,
      Scroll,
      backTop
    },
    data(){
      return {
        banners : [],
        recommends:[],
        tabnav:['流行','新款','精选'],
        goods: {
          pop:{
            page:0,
            list:[]
          },
          new:{
            page:0,
            list:[]
          },
          sell:{
            page:0,
            list:[]
          }
        },
        currentType: 'pop',
        isShow: false
      }
    },
    created(){
      //请求轮播图数据
      this.getHomeData()
      //请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')

    },
    methods:{
      //点击事件相关操作
      backClick(){
        this.$refs.scroll.scroll.scrollTo(0,0,500)
      },
      tabNavClick(index){
        // console.log(index);
        if(index === 0){
          this.currentType = 'pop';
        }else if(index === 1){
          this.currentType = 'new';
        }else {
          this.currentType = 'sell'
        }
      },
      getScroll(position) {
      // console.log(position);
      this.isShow = Math.abs(position.y) > 1000 ? true : false;
    },
      loadMore(){
        this.getHomeGoods(this.currentType)
        // console.log(1);
      },
      //请求数据相关操作
      getHomeData(){
        getHomeData().then(res => {
        // console.log(res);
        //函数执行完毕就会回收res,需要一个变量来保存数据
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
      },
      getHomeGoods(type){
        const page = this.goods[type].page + 1;
        getHomeGoods(type,page).then(res => {
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page +=1;
          this.$refs.scroll.finishPullUp();
        })
      }
    }
      
}
</script>

<style>
 #home {
   position: relative;
   /* height: 100vh; */
   /* height: 100%; */
   /* padding-top: 44px; */
 }
 .home-nav{
   background-color: #FF8E96;
 }

 .home-center{
   color: #fff;
 }
 .swiper-image{
  width: 100%;
  /* height: 270px; */
}
.swiper-slide {
  overflow: hidden;
}
.swiper-slide img {
  width: 100%;
  /* height: 200px; */
}
.selected{
  width: 100%;
}
.selected img {
  width: 100%;
}
.content {
 
  /* position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0; */
  height: calc(100vh - 44px);
  overflow: hidden;
}
</style>