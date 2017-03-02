<template>
  <div class="video-list">
    <v-card :data="video" v-for="video in newstVideos"></v-card>
  </div>
</template>
<script>
import Loading from '../components/Loading'
import vCard from '../components/VideoCard'
import { newstVideos } from '../data'
export default {
  created () {
    this.setTitle()
  },
  data () {
    return {
      newstVideos: newstVideos
    }
  },
  computed: {
  },
  methods: {
    setTitle () {
      this.$store.commit('set_title', '最新视频')
    }
  },
  components: {
    Loading,
    vCard
  }
}
</script>
<style lang="less">
.video-list {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 10px;
  background: #f0f0f0;
}
</style>