<template>
  <div class="index">
    <mu-appbar :title="title">
    </mu-appbar>
    <div class="index-container" id="index-container">
      <transition name="">
        <router-view></router-view>
      </transition>
    </div>
    <mu-paper>
      <mu-bottom-nav :value="bottomNav" @change="handleChange">
        <mu-bottom-nav-item value="news" title="资讯" icon="fiber_new"/>
        <mu-bottom-nav-item value="player" title="玩家" icon="person"/>
        <mu-bottom-nav-item value="championList" title="英雄" icon="pets"/>
        <mu-bottom-nav-item value="video" title="视频" icon="ondemand_video"/>
      </mu-bottom-nav>
    </mu-paper>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'index',
  created () {
    var rname = this.$route.name
    switch(rname) {
      case 'news':
          this.bottomNav = 'news'
          break
      case 'player':
      case 'playerDetail':
      case 'combatDetail':
          this.bottomNav = 'player'
          break
      case 'championList':
      case 'championDetail':
          this.bottomNav = 'championList'
          break
      case 'video':
          this.bottomNav = 'video'
          break
      
    }
  },
  data () {
    return {
      bottomNav: 'news'
    }
  },
  computed: mapState({
    title: state => state.title
  }),
  methods: {
    handleChange (val) {
      this.bottomNav = val
      this.$router.push({name: val})
    },
    goback () {
      this.$router.go('-1')
    }
  }
}
</script>
<style lang="less">
.index {
  a {
    color: #333 !important;
  }
  &-container {
    width: 100%;
    position: absolute;
    top: 45px;
    bottom: 56px;
    overflow-y: scroll;
  }
  .mu-appbar {
    height: 45px;
    .mu-appbar-title {
      text-align: center;
      span {
        font-size: 18px;
      }
    }
  }
  .mu-paper {
    position: fixed;
    bottom: 0;
    left:0;
    width: 100%;
  }
}

.bounce-enter-active, .bounce-leave-active {
  animation: slideInRight 0.1s;
}
.bounce-enter, .bouncede-leave-to /* .fade-leave-active in <2.1.8 */ {
  animation: slideOutLeft 0.1s;
}
</style>