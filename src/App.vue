<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <router-view></router-view>
    <m-footer></m-footer>
  </div>
</template>

<script type="text/ecmascript-6">
  import MHeader from 'components/m-header/m-header'
  import Tab from 'components/tab/tab'
  import MFooter from 'components/m-footer/m-footer'

  export default {
    components:{
      MHeader,
      Tab,
      MFooter
    }
  }
</script>

<style>
  .clearfix {
    zoom: 1;
  }
  .clearfix:after {
    content: "020";
    height: 0;
    display: block;
    clear: both;
    visibility: hidden;
  }
  .fl {
    float: left;
  }
  .fr {
    float: right;
  }
  .icon-sprite {
    background: url(/static/image/icon_sprite.png) no-repeat;
  }
</style>
