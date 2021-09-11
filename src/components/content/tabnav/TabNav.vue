<template>
  <div class="tab-nav">
      <div v-for="(item,index) in tabnav" 
        :key="index" 
        class="tab-nav-item"
        :class="{active: index === currentIndex}"
        @click="tabNavclick(index)">
          <span>{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
    name:'TabNav',
    props:{
        tabnav:{
            type:Array,
            default(){
                return [];
            }
        }
    },
    data(){
        return {
            currentIndex : 0
        }
    },
    methods:{
        tabNavclick(index){
            this.currentIndex = index;
            this.$emit('tabNavClick',index)
        }
    }
}
</script>

<style>
.tab-nav {
    width: 100%;
    height: 50px;
    /* background-color:pink; */
    display: flex;
    text-align: center;
    background-color: #fff;
    position: sticky;
    top: 40px;
    z-index: 10;

}
.tab-nav-item{
    margin-top: 10px;
    flex: 1;
    
}
.tab-nav-item span {
    padding-bottom: 10px;
}
.active span {
    border-bottom: 1px solid red;

}
.active{
    color: red; 
    
}
</style>