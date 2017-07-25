<template lang="html">
    <div>
      <new-song></new-song>
      <recommend></recommend>
      <toplist></toplist>
    </div>
</template>

<script>
  import NewSong from 'components/homepage/new-song'
  import Recommend from 'components/homepage/recommend'
  import Toplist from 'components/homepage/toplist'

  export default {
    components:{
      NewSong,
      Recommend,
      Toplist
    }
  }
</script>

<style lang="css">
  @import '~common/css/homepage.css'
</style>
