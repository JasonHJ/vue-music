<template lang="html">
    <div>
      <new-song></new-song>
      <recommend></recommend>
    </div>
</template>

<script>
  import NewSong from 'components/homepage/new-song'
  import Recommend from 'components/homepage/recommend'

  export default {
    components:{
      NewSong,
      Recommend
    }
  }
</script>

<style lang="css">
  @import '~common/css/homepage.css'
</style>
