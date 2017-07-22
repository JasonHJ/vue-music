<template lang="html">
  <div class="main" id="newSong">
    <div v-if="newSongs.length" class="main-inner">
      <div class="main-title">
        <h2 class="title"><i></i></h2>
        <span class="line line-left"></span>
        <span class="line line-right"></span>
      </div>
      <a :href="allSong" class="readAll">全部<i class="icon-sprite"></i></a>
      <div class="main-tab tab-title">
        <a v-for="(item,index) in contents"
           href="javascript:;"
           class="item"
           :class="[index===0?'item-cur':'']"
           :data-index="index"
           @click="changeUrl">
          {{item}}
        </a>
      </div>
      <slider ref="son">
        <div v-for="sub in newSongs">
          <li v-for="item in sub">
            <a :href="item.link" class="img">
                <img :src="item.albumPic" alt="#">
                <span class="mask"></span>
                <i class="icon-play"></i>
            </a>
            <div class="info">
              <div class="title">
                <a href="javascript:;">{{item.album}}</a>
                <i class="icon-sprite"></i>
              </div>
              <a href="javascript:;" class="author">{{item.sname}}</a>
            </div>
          </li>
        </div>
      </slider>
    </div>
    <div class="main-operate" >
      <a href="javascript:;" class="slider-prev" @click="prevSlide"><i class="icon-sprite"></i></a>
      <a href="javascript:;" class="slider-next" @click="nextSlide"><i class="icon-sprite"></i></a>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Slider from 'base/slider/slider'
  import {getNewSong} from 'api/getNewSong'
	import {ERR_OK} from 'api/config'
  import NewSong from 'common/js/newSong'
  import {splitArr,getData,onlyClass} from 'common/js/dom'

  export default {
    data(){
      return {
        contents:['内地','华语','欧美','韩国','日本'],
        newSongs:[],
        allSong:'https://y.qq.com/portal/album_lib.html#stat=y_new.index.album.more'
      }
    },
    created(){
      this._getNewSong();
    },
    methods:{
      _getNewSong(lang){
        getNewSong(lang).then((res)=>{
          if(res.code===ERR_OK){
            if(this.newSongs.length!=0){
              this.newSongs=[];
            }
            this.newSongs=this._normalizeSinger(res.data.albumlist);
          }
        })
      },
      _normalizeSinger(list){
        let songArr=[];
        for(let key in list){
          songArr.push(new NewSong({
            album:list[key].album_name,
            sname:list[key].singer_name,
            mid:list[key].album_mid
          }))
        }
        songArr=splitArr(songArr,4);
        return songArr;
      },
      changeUrl(e){
        var lang=getData(e.target,"index");
        switch(lang){
          case "0":
            this._getNewSong(0);
            break;
          case "1":
            this._getNewSong(1)
            break;
          case "2":
            this._getNewSong(5)
            break;
          case "3":
            this._getNewSong(4)
            break;
          case "4":
            this._getNewSong(3)
            break;
        }
        onlyClass(e.target,'item-cur');
        this.$refs.son.$emit('updated');
      },
      prevSlide(){
          this.$refs.son.$emit('prevEvent');
      },
      nextSlide(){
        this.$refs.son.$emit('nextEvent');
      }
    },
    components:{
      Slider
    }
  }
</script>

<style lang="css">
  #newSong {
    height: 734px;
    background: url(/static/image/cont/bg_index_new.jpg) no-repeat center;
  }
  #newSong .main-operate .slider-prev,
  #newSong .main-operate .slider-next {
    background-color: rgba(255, 255, 255, .1);
  }
  #newSong .main-slider .slider-wrapper {
    width: 4800px;
  }
</style>
