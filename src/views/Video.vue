<template>
  <div class="videos">
    <div class="videos-list">
      <NewstVideos></NewstVideos>
    </div>
  </div>
</template>
<script>
import NewstVideos from '../components/NewstVideos'
export default {
  created () {
//    this.init()
  },
  data () {
    return {
      selected: '1'
    }
  },
  methods: {
    init() {
      this.$store.dispatch('GET_NEWST_VIDEOS', {
          p: 10
      })
    }
  },
  computed: {

  },
  components: {
    NewstVideos
  }
}
</script>
