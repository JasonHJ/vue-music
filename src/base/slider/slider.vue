<template>
  <div class="main-slider tab-cont" ref="slider">
    <ul class="slider-wrapper" ref="sliderGroup">
      <slot>
      </slot>
    </ul>
    <div class="slider-btns">
      <span v-for="(item,index) in dots" :class="{cur:currentPageIndex===index}"><i></i></span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import {addClass} from 'common/js/dom'

  export default{
    data(){
      return {
        currentPageIndex:0,
        dots:new Array(4)
      }
    },
    props:{
      loop:{
        type:Boolean,
        default:true
      },
      autoPlay:{
        type:Boolean,
        default:true
      },
      interval:{
        type:Number,
        default:4000
      }
    },
    mounted(){
      setTimeout(()=>{
        this._setSliderWidth();
        this._initSlider();
        this._clickSlide();
        if(this.autoPlay)
          this._play();
        window.addEventListener('resize',()=>{
          if(!this.slider){
            return;
          }
          this._setSliderWidth(true);
          this.slider.refresh()
        })
      },20)
      this.$on('updated',function () {
        this.slider.refresh();

      })
    },
    methods:{
      _setSliderWidth(isResize){
        let sliderWidth=this.$refs.slider.clientWidth;
        let width=4*sliderWidth;
        if(this.loop && !isResize){
          width+=2*sliderWidth
        }
        this.$refs.sliderGroup.style.width=width+'px';
      },
      _initSlider(){
        this.slider=new BScroll(this.$refs.slider,{
          scrollX:true,
          scrollY:false,
          momentum:true,
          snap:true,
          snapLoop:this.loop,
          snapThreshold:0.3,
          snapSpeed:400
        });
        this.slider.on('scrollEnd',()=>{
          let pageIndex = this.slider.getCurrentPage().pageX;
          if(this.loop)
            pageIndex -=1;
          this.currentPageIndex=pageIndex;
          if(this.autoPlay){
            clearTimeout(this.timer);
            this._play();
          }
        })
      },
      _play(){
        let pageIndex=this.currentPageIndex+1
        if(this.loop)
          pageIndex+=1;
        this.timer=setTimeout(()=>{
          this.slider.goToPage(pageIndex,0,1000)
        },this.interval);
      },
      _clickSlide(){
        this.$on('prevEvent', function () {
          let pageIndex = this.slider.getCurrentPage().pageX;
          if(this.loop)
            pageIndex -=1;
          this.currentPageIndex=pageIndex;
          this.slider.goToPage(pageIndex,0,1000);
        })
        this.$on('nextEvent', function () {
          let pageIndex = this.slider.getCurrentPage().pageX;
          if(this.loop)
            pageIndex +=1;
          this.currentPageIndex=pageIndex;
          this.slider.goToPage(pageIndex,0,1000);
        })
      }
    },
    destroyed(){
      clearTimeout(this.timer);
    }
  }
</script>

<style>

</style>
