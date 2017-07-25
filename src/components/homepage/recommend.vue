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
            <a v-for="(item,index) in recommends" :href="item.jumpurl" class="item" :class="carouselArr[index]" :data-index="index">
              <img :src="item.pic">
            </a>
          </div>
          <div class="slider-btns">
            <span v-for="(item,index) in carouselArr"
                  :class="{cur:index==curDot}"
                  @click="clickDot"
                  :data-index="index">
              <i></i>
            </span>
          </div>
        </div>
      </div>
      <div class="main-operate">
        <a href="javascript:;" class="slider-prev" @click="prevClick"><i class="icon-sprite"></i></a>
        <a href="javascript:;" class="slider-next" @click="nextClick"><i class="icon-sprite"></i></a>
      </div>
    </div>
</template>

<script>
  import {getAllData} from 'api/fcg_first'
  import {ERR_OK} from 'api/config'
  import {recommendData} from 'common/js/normalizeData'
  import {removeClass,addClass,hasClass,getData} from 'common/js/dom'

  export default {
    data(){
      return {
        recommends:[],  //存储获取到的数据
        carouselArr:[], //将class类名存入其中，方便实现切换class
        curDot:0
      }
    },
    props:{
      autoPlay:{
        type:Boolean,
        default:true
      }
    },
    created(){
      this._getAllData();
      this.t_play=true;
    },
    mounted(){
      setTimeout(()=>{
        this._imgClick();
        if(this.autoPlay){
          this._play()
        }
      },20)
    },
    methods:{
      //发送请求获取数据
      _getAllData(){
        getAllData().then((res)=>{
          if(ERR_OK===res.code){
            this.recommends=recommendData(res.data.focus);
            this.carouselArr=this._initcarouselArr(this.recommends);
          }
        })
      },
      //将数据格式化成需要的形式
      _initcarouselArr(arr){
        let newArr=[];
        for(let i=0;i<arr.length;i++){
          newArr.push(`item-pic${i+1}`);
        }
        return newArr;
      },
      //prevClick,nextClick实现左右点击箭头时滚动切换页面
      prevClick(){
        if(this.t_play){
          this.t_play=false;
          this.carouselArr.push(this.carouselArr.shift());
          setTimeout(()=>{
            this._setBtn();
          },0)
        }
        setTimeout(()=>{
          this.t_play=true;
        },500)
      },
      nextClick(){
        if(this.t_play){
          this.t_play=false;
          this.carouselArr.unshift(this.carouselArr.pop());
          setTimeout(()=>{
            this._setBtn();
          },0)
        }
        setTimeout(()=>{
          this.t_play=true;
        },500)
      },
      //imgClick实现点击前一张和后一张时，不跳转而是进行滚动到正中页面
      _imgClick(){
        let pic2=document.querySelector(".carousel-slider")
        pic2.addEventListener('click',(event)=>{
          if(hasClass(event.target.parentElement,'item-pic2')){
            event.preventDefault();
            this.prevClick();
          }
          else if(hasClass(event.target.parentElement,'item-pic4')){
            event.preventDefault();
            this.nextClick();
          }
        })
      },
      //图片切换时，下面所对应的横杠样式同时切换
      _setBtn(){
        let index=getData(document.querySelector(".carousel-slider .item-pic3"),"index");
        this.curDot=index-2<0?index-2+this.recommends.length:index-2;
      },
      clickDot(event){
        this.newArr=this._initcarouselArr(this.recommends);
        let index=Number(getData(event.target,"index"))
        for(let k=1;k<=index;k++){
          this.newArr.unshift(this.newArr.pop())
        }
        this.carouselArr=this.newArr;
        setTimeout(()=>{
          this._setBtn();
        },0)
      },
      //自动播放
      _play(){
        this.timer=setInterval(()=>{
          if(this.t_play){
            this.nextClick();
          }
        },4000)
      }
    },
    destroyed(){
      clearInterval(this.timer)
    }

  }
</script>

<style lang="css">
  @import '~common/css/recommend.css'
</style>
