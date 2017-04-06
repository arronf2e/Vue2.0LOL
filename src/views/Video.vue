<template>
  <div class="videos">
    <div class="videos-list">
      <mu-raised-button label="test" @click="toggle()"/>
      <NewstVideos></NewstVideos>
      <mu-drawer :open="open" right>
        <mu-appbar title="视频菜单"/>
        <mu-list>
          <mu-list-item title="推荐视频" @click.native="changeList"/>
          <mu-list-item title="解说视频" @click.native="changeList"/>
          <mu-list-item title="视频查找" @click.native="changeList"/>
        </mu-list>
      </mu-drawer>
    </div>
  </div>
</template>
<script>
import NewstVideos from '../components/NewstVideos'
export default {
  created () {
    this.init()
  },
  data () {
    return {
      selected: '1',
      p: 1,
      open: false,
    }
  },
  methods: {
    init() {
      this.$store.dispatch('GET_NEWST_VIDEOS', {
          p: this.p
      })
    },
    toggle () {
      this.open = !this.open
    },
    changeList(type) {
      this.open = !this.open
    }
  },
  computed: {

  },
  components: {
    NewstVideos
  }
}
</script>
<style>
.mu-drawer {
  width: 50% !important;
}
.mu-appbar {
  height: 45px !important;
}
</style>
