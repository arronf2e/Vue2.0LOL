<template>
  <div class="index">
    <mt-header fixed :title="title">
      <router-link to="" slot="left">
        <mt-button  @click="goback">返回</mt-button>
      </router-link>
    </mt-header>
    <div class="index-container" id="index-container">
      <transition name="">
        <router-view></router-view>
      </transition>
    </div>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="championList" @click.native="go('championList')">
        <img src="http://o9xap42x4.bkt.clouddn.com/icon1.png" alt="" slot="icon">
        英雄
      </mt-tab-item>
      <mt-tab-item id="player" @click.native="go('player')">
        <img src="http://o9xap42x4.bkt.clouddn.com/icon2.png" alt="" slot="icon">
        玩家
      </mt-tab-item>
      <mt-tab-item id="video" @click.native="go('video')">
        <img src="http://o9xap42x4.bkt.clouddn.com/icon3.png" alt="" slot="icon">
        视频
      </mt-tab-item>
      <mt-tab-item id="about" @click.native="go('about')">
        <img src="http://o9xap42x4.bkt.clouddn.com/icon4.png" alt="" slot="icon">
        关于
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'index',
  // 监测路由信息，防止页面刷新时tab高亮显示的错误
  created () {
    var route = this.$route.name
    this.selected = route
  },
  data () {
    return {
      selected: 'champion'
    }
  },
  computed: mapState({
    title: state => state.title
  }),
  methods: {
    go (routeName) {
      this.$router.push({name: routeName})
    },
    goback () {
      this.$router.go('-1')
    }
  }
}
</script>
<style lang="less" scoped>
.index {
  &-container {
    width: 100%;
    position: absolute;
    top: 40px;
    bottom: 55px;
    overflow-y: scroll;
  }
}

.bounce-enter-active, .bounce-leave-active {
  animation: slideInRight 0.1s;
}
.bounce-enter, .bouncede-leave-to /* .fade-leave-active in <2.1.8 */ {
  animation: slideOutLeft 0.1s;
}
</style>