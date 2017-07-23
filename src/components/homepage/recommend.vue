<template lang="html">
  <div class="main" id="recommend">
      <div class="main-inner">
        <div class="main-title">
          <h2 class="title"><i></i></h2>
          <span class="line line-left"></span>
          <span class="line line-right"></span>
        </div>
        <div class="carousel">
          <div class="carousel-slider">
            <a v-for="(item,index) in recommends" :href="item.jumpurl" class="item" :class="'item-pic'+(index+1)">
              <img :src="item.pic">
            </a>
          </div>
          <div class="slider-btns">
            <span v-for="item in recommends" :class="{cur:index==0}"><i></i></span>
          </div>
        </div>
      </div>
      <div class="main-operate">
        <a href="#" class="slider-prev"><i class="icon-sprite"></i></a>
        <a href="#" class="slider-next"><i class="icon-sprite"></i></a>
      </div>
    </div>
</template>

<script>
  import {getAllData} from 'api/fcg_first'
  import {ERR_OK} from 'api/config'
  import {recommendData} from 'common/js/normalizeData'

  export default {
    data(){
      return {
        recommends:[]
      }
    },
    created(){
      this._getAllData()
    },
    methods:{
      _getAllData(){
        getAllData().then((res)=>{
          if(ERR_OK===0){
            this.recommends=recommendData(res.data.focus)
            console.log(this.recommends)
          }
        })
      }
    }
  }
</script>

<style lang="css">
  #recommend {
    height: 610px;
  }
  #recommend .main-title .title i {
    background-position: 0 -240px;
  }
  #recommend .main-title .line {
    background-color: #000;
  }
  #recommend .main-operate .slider-prev,
  #recommend .main-operate .slider-next {
    background-color: rgba(0, 0, 0, .1);
  }
  .carousel-slider {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 300px;
    margin-bottom: 50px;
  }
  .carousel-slider .item {
    position: absolute;
    z-index: 1;
    left: 0;
    top: 0;
    width: 750px;
    height: 300px;
    opacity: 0;

    transition: all 300ms ease-out;
  }
  .carousel-slider .item-pic2,
  .carousel-slider .item-pic4 {
    z-index: 2;
    opacity: .8;
  }
  .carousel-slider .item-pic1 {
    transform: translate3d(-224px,0,0) scale(0.81);
  }
  .carousel-slider .item-pic2 {
    transform: translate3d(0px,0,0) scale(0.81);
    transform-origin: 0% 50%;
  }
  .carousel-slider .item-pic3 {
    z-index: 3;
    opacity: 1;
    transform: translate3d(224px,0,0) scale(1);
  }
  .carousel-slider .item-pic4 {
    transform: translate3d(449px,0,0) scale(0.81);
    transform-origin: 100% 50%;
  }
  .carousel-slider .item-pic5 {
    transform: translate3d(672px,0,0) scale(0.81);
  }
  .carousel-slider .item-pic6 {
    transform: translate3d(896px,0,0) scale(0.81);
  }
  .carousel-slider .item img {
    width: 100%;
  }
  #recommend .slider-btns span i {
    background-color: #b9b9b9;
  }
  #recommend .slider-btns span.cur i {
    background-color: #151515;
  }
</style>
