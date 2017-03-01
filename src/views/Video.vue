<template>
  <div class="videos">
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">最新视频</mt-tab-item>
      <mt-tab-item id="2">解说视频</mt-tab-item>
    </mt-navbar>
    <div class="videos-list">
      <keep-alive>
        <component :is="currentView">
          
        </component>
      </keep-alive>
    </div>
  </div>
</template>
<script>
import NewstVideos from '../components/NewstVideos'
import CommenterList from '../components/CommenterList'
export default {
  created () {
    
  },
  data () {
    return {
      selected: '1'
    }
  },
  computed: {
    currentView () {
      return this.selected == '1' ? NewstVideos : CommenterList
    }
  },
  components: {
    NewstVideos,
    CommenterList
  }
}
</script>