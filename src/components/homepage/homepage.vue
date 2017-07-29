<template lang="html">
    <div>
      <new-song></new-song>
      <recommend></recommend>
      <toplist></toplist>
      <hotdiss></hotdiss>
      <sbmv></sbmv>
    </div>
</template>

<script>
  import NewSong from 'components/homepage/new-song'
  import Recommend from 'components/homepage/recommend'
  import Toplist from 'components/homepage/toplist'
  import Hotdiss from 'components/homepage/hotdiss'
  import Sbmv from 'components/homepage/sbmv'

  export default {
    components:{
      NewSong,
      Recommend,
      Toplist,
      Hotdiss,
      Sbmv
    }
  }
</script>

<style lang="css">
  @import '~common/css/homepage.css'
</style>
