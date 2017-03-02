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
    
  },
  data () {
    return {
      selected: '1'
    }
  },
  computed: {
    
  },
  components: {
    NewstVideos
  }
}
</script>