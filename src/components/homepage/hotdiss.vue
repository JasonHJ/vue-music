<template lang="html">
  <div class="main" id="hotSong">
      <div class="main-inner">
        <div class="main-title">
          <h2 class="title"><i></i></h2>
          <span class="line line-left"></span>
          <span class="line line-right"></span>
        </div>
        <div class="main-slider">
          <ul class="slider-wrapper" :style="scoll" :class="{move:show}">
            <li v-for="(item,index) in hotdiss" class="lii">
              <a href="#" class="img">
                <img :src="item.imgurl">
                <span class="mask"></span>
                <i class="icon-play"></i>
              </a>
              <div class="info">
                <div class="title">
                  <a :href="item.dissurl">{{item.dissname}}</a>
                  <i class="icon-sprite"></i>
                </div>
                <a href="#" class="author">{{item.listennum}}</a>
              </div>
            </li>
          </ul>
          <div class="slider-btns">
            <span v-for="(val,index) in currBtn"
                  :class="{cur:btn==index}"
                  :data-index="index"
                  @click="showPic">
              <i></i>
            </span>
          </div>
        </div>
      </div>
      <div class="main-operate">
        <a href="javascript:;" class="slider-prev" @click="prevPic"><i class="icon-sprite"></i></a>
        <a href="javascript:;" class="slider-next" @click="nextPic"><i class="icon-sprite"></i></a>
      </div>
    </div>
</template>

<script>
  import {getAllData} from 'api/fcg_first'
  import {ERR_OK} from 'api/config'
  import {hotdiss} from 'common/js/normalizeData'
  import {getData} from 'common/js/dom'

  export default {
    data(){
      return {
        hotdiss:[],
        scoll:{
          left:'-1200px',
        },
        currBtn:new Array(3),
        btn:0,
        show:true
      }
    },
    props:{
      autoplay:{
        type:Boolean,
        default:true
      }
    },
    created(){
      this._getAllData();
    },
    methods:{
      _getAllData(){
        getAllData().then((res)=>{
          if(res.code===ERR_OK){
            this.hotdiss=hotdiss(res.data.hotdiss.list);
          }
        })
      },
      animate(offset,incre){
        this.show=true;
        var newLeft=parseInt(this.scoll.left)+offset;
        this.scoll.left=newLeft+'px';

        if(-3600<=newLeft&&newLeft<=-1200){
          this.btn+=incre;
        }
        if(newLeft==0){
          this.btn=2;
        }
        if(newLeft==-4800){
          this.btn=0;
        }
        //增加定时器的原因是：可以在滚动到最后一张图片后无缝滚动到第一张
        setTimeout(()=>{
          if(newLeft==0){
            this.show=false;
            this.scoll.left=-3600+'px';
            this.btn=2;
          }
          if(newLeft==-4800){
            this.show=false;
            this.scoll.left=-1200+'px';
            this.btn=0;
          }
        },1100)
      },
      nextPic(){
        this.animate(-1200,1);
      },
      prevPic(){
        this.animate(1200,-1)
      },
      showPic(event){
        //a small bug wait for solving
        this.show=true;
        let index=getData(event.target,'index');
        this.btn=index;
        this.scoll.left=-1200*(parseInt(index)+1)+'px';
      }
    }
  }
</script>

<style scoped lang="css">
  @import '~common/css/hotdiss.css'
</style>
