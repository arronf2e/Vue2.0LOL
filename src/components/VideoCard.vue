<template>
  <div class="video-card">
    <a :href="data.content | videoSrc">
      <div class="video-card-img">
        <img :src="data.img" alt="">
      </div>
      <p class="video-card-title">
        {{ data.title }}
      </p>
      <p class="video-card-date">
        {{ data.createdate.split('T')[0] }}
        <span>
          {{ data.comments/10000 | pv }}评论
        </span>
      </p>
    </a>
  </div>
</template>
<script>
import { pv, videoSrc } from '../filters' 
export default {
  name: 'v-card',
  props: {
    data: {
      type: Object
    }
  },
  components: {
    
  },
  filters: {
    pv,
    videoSrc
  }
}
</script>
<style lang="less">
.video-card {
  width: 45%;
  margin-bottom: 10px;
  background: #fff;
  padding: 5px;
  &-img {
    img {
      width: 100%;
    }
  }
  &-title {
    color: #666;
    font-size: 12px;
  }
  &-date {
    color: #999;
    font-size: 12px;
    span {
      float: right;
      color: goldenrod;
    }
  }
}
</style>