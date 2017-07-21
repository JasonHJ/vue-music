<template>
  <ul class="header-subNav">
    <li>
      <a href="#" class="subNav-cur">首页</a>
    </li>
    <li>
      <a href="#">歌手</a>
    </li>
    <li>
      <a href="#">专辑</a>
    </li>
    <li>
      <a href="#">排行榜</a>
    </li>
    <li>
      <a href="#">分类歌单</a>
    </li>
    <li>
      <a href="#">MV</a>
    </li>
  </ul>
</template>

<script>
export default {
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .header-subNav
    display block
    width 944px
    height 51px
    padding-left 310px
    li
      display inline-block
      margin 0 24px
    a
      line-height 50px
      font-size 15px
      &.subNav-cur
        color #31c27c
</style>
