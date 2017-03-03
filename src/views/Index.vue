<template>
  <div class="index">
    <div class="index-title">
      <mu-flexbox>
        <mu-flexbox-item class="back-flex" grow="1">
          <mu-icon-button icon="arrow_back" @click="goback"/>
        </mu-flexbox-item>
        <mu-flexbox-item class="title-flex" grow="5">
          {{ title }}
        </mu-flexbox-item>
        <mu-flexbox-item class=""  grow="1">
        </mu-flexbox-item>
      </mu-flexbox>
    </div>
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
  &-title {
    .mu-flexbox {
      background: #03a9f4;
      height: 45px;
      .title-flex {
        text-align: center;
        color: #fff;
        font-size: 18px;
      }
      .back-flex {
        color: #fff;
      }
    }
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
</style>