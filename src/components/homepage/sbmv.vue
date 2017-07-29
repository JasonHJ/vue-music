<template lang="html">
  <div class="main" id="mv">
      <div class="main-inner">
        <div class="main-title">
          <h2 class="title"><i></i></h2>
          <span class="line line-left"></span>
          <span class="line line-right"></span>
        </div>
        <a :href="allurl" class="readAll">全部<i class="icon-sprite"></i></a>
        <div class="main-tab tab-title">
          <a v-for="(val,key) in location"
             href="javascript:;"
             class="item"
             :class="{'item-cur':currItem==key}"
             :data-key="key"
             @click="changeLoc">
            {{val}}
          </a>
        </div>
        <ul class="mv-list tab-cont">
          <li class="item" v-for="(item,index) in mv">
            <a :href="item.vid" class="img"><img :src="item.picurl"><i class="icon-play"></i></a>
            <div class="info">
              <a :href="item.vid" class="title">{{item.mvtitle}}</a>
              <a :href="item.singer_mid" class="author">{{item.singer_name}}</a>
              <span class="play-total"><i class="icon-sprite"></i>{{item.listennum}}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
  import {getAllData} from 'api/fcg_first'
  import {ERR_OK} from 'api/config'
  import {sbmv} from 'common/js/normalizeData'
  import {getData} from 'common/js/dom'

  export default {
    data(){
      return {
        location:{
          all:'全部',
          neidi:'内地',
          gangtai:'港台',
          oumei:'欧美',
          korea:'韩国',
          japan:'日本'
        },
        sbmv:{},
        mv:[],
        currItem:'all',
        allurl:'https://y.qq.com/portal/mv_lib.html'
      }
    },
    created(){
      this._getAllData();
    },
    methods:{
      _getAllData(){
        getAllData().then((res)=>{
          if(ERR_OK===res.code){
            this.sbmv=res.data.shoubomv;
            this.mv=sbmv(this.sbmv.all);
          }
        })
      },
      changeLoc(e){
        let key=getData(e.target,'key');
        this.mv=sbmv(this.sbmv[key]);
        this.currItem=key;
      }
    }
  }
</script>

<style lang="css">
  @import '~common/css/sbmv.css'
</style>
