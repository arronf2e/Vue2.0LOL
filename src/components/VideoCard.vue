<template>
  <div class="video-card">
    <div v-html="data.content"></div>
    <p class="video-card-title">
      {{ data.title }}
    </p>
    <p class="video-card-date">
      {{ data.createdate.split('T')[0] }}
      <span>
        {{ data.comments/10000 | pv }}评论
      </span>
    </p>
  </div>
</template>
<script>
import { pv } from '../filters' 
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
    pv
  }
}
</script>
<style lang="less">
.video-card {
  width: 45%;
  margin-bottom: 10px;
  background: #fff;
  padding: 5px;
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
  iframe {
    width: 100%;
  }
}
</style>