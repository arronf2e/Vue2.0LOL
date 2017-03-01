<template>
  <div>
    x video
    {{ newstVideos }}
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import Loading from '../components/Loading'
import vImg from '../components/Lazyimg'
export default {
  created () {
    this.getList()
  },
  data () {
    return {
      p: 1
    }
  },
  computed: {
    ...mapState(['newstVideos'])
  },
  methods: {
    getList () {
      this.$store.dispatch('GET_NEWST_VIDEOS', {
        p: this.p
      })
    }
  },
  components: {
    Loading,
    vImg
  }
}
</script>
<style lang="less">

</style>