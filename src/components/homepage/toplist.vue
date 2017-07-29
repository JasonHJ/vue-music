<template lang="html">
  <div class="main" id="rank">
      <div class="main-inner">
        <div class="main-title">
          <h2 class="title"><i></i></h2>
          <span class="line line-left"></span>
          <span class="line line-right"></span>
        </div>
        <a href="https://y.qq.com/n/yqq/toplist/4.html#" class="readAll">全部<i class="icon-sprite"></i></a>
        <ul v-if="toplist.length" class="rank-list">
            <li v-for="(value,index) in toplist" class="rank-list__item" :class="'rank-list__'+(index+1)">
              <span class="rank-bg"></span>
              <span class="mask"></span>
              <i class="icon-play"></i>
              <div class="title">
                <a :href="value.url">
                  <i></i>
                  <h3>
                    {{value.listname}}
                  </h3>
                </a>
              </div>
              <i class="line"></i>
              <ul class="song-list">
                <li v-for="(item,index) in value.songlist" class="song-list__item">
                  <a :href="'https://y.qq.com/n/yqq/song/'+item.songid+'_num.html'">
                    <span>{{index+1}}</span>{{item.songname}}
                  </a>
                  <span>
                    {{item.singername}}
                  </span>
                </li>
              </ul>
            </li>
          </ul>
      </div>
    </div>
</template>

<script>
  import {getAllData} from 'api/fcg_first'
  import {ERR_OK} from 'api/config'
  import {toplistData} from 'common/js/normalizeData'

  export default {
    data(){
      return {
        toplist:[]
      }
    },
    created(){
      this._getAllData();
    },
    methods:{
      _getAllData(){
        getAllData().then((res)=>{
          if(res.code===ERR_OK){
            this.toplist=toplistData(res.data.toplist);
          }
        })
      }
    }
  }
</script>

<style lang="css">
  @import '~common/css/toplist.css'
</style>
