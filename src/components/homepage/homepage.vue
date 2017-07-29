<template lang="html">
    <div>
      <new-song></new-song>
      <recommend></recommend>
      <toplist></toplist>
      <hotdiss></hotdiss>
    </div>
</template>

<script>
  import NewSong from 'components/homepage/new-song'
  import Recommend from 'components/homepage/recommend'
  import Toplist from 'components/homepage/toplist'
  import Hotdiss from 'components/homepage/hotdiss'

  export default {
    components:{
      NewSong,
      Recommend,
      Toplist,
      Hotdiss
    }
  }
</script>

<style lang="css">
  @import '~common/css/homepage.css'
</style>
