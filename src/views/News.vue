<template>
  <div>
    aaa
    <div class="news">
      <div class="news-banners">
        <swiper :options="swiperOption">
          <swiper-slide v-for="news in bannerNews"><img :src="news.image_url_big" class="banner-item"  alt="" height="20%" width="100%" @click="test"></swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <div class="news-list">
        <div class="news-list-item" v-for="news in newstNews">
          <a :href="news.article_url">
            <div class="news-list-item-img">
              <img :src="news.image_url_small" alt="">
            </div>
            <div class="news-list-item-title">
              <p class="title">{{ news.title }}</p>
              <p class="summary">{{ news.summary }}</p>
              <p class="time">
                {{ news.publication_date }}
                <span>
                  {{ news.pv}}
                </span>
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import Loading from '../components/Loading'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  created () {
    this.getList()
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: 3000
      },
      p: 1
    }
  },
  computed: {
    ...mapState(['newstNews', 'bannerNews'])
  },
  methods: {
    getList () {
      this.$store.dispatch('GET_NEWST_NEWS')
    },
    test() {
      
    }
  },
  components: {
    Loading,
    swiper,
    swiperSlide
  }
}
</script>
<style lang="less">
.news {
  &-list {
    background: #f0f0f0;
    padding: 0 10px;
    padding-top: 5px;
    &-item {
      margin-bottom: 5px;
      a {
        background: #fff;
        display: flex;
        flex-direction: row;
      }
      &-img {
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 90px;
          height: 65px;
        }
      }
      &-title {
        .title {
          font-size: 14px;
        }
        .summary {
          font-size: 12px;
          color: #999;
        }
        .time {
          font-size: 12px;
        }
      }
    }
  }
}
</style>