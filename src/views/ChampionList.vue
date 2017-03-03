<template>
  <div>
    <div class="champion-list" v-if="championList.length > 0">
      <div class="champion-list-item" v-for="champion in championList" @click="goDetail(champion.id)">
        <div class="champion-list-item_avatar">
          <mu-avatar slot="left" :src="pic + champion.id + '.png'" :size="55"/>
          <!--<v-img :imgUrl="pic + champion.id + '.png'"></v-img>-->
        </div>
        <div class="champion-list-item_info">
          <p class="title">
            {{ champion.title }} <br>
            <span class="name">{{ champion.cname }}({{ champion.ename }})</span>
          </p>
        </div>
      </div>
      
    </div>
    <Loading v-else></Loading>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import Loading from '../components/Loading'
import vImg from '../components/Lazyimg'
const pics = 'http://cdn.tgp.qq.com/pallas/images/champions_id/'
export default {
  created () {
    this.getList();
  },
  data () {
    return {
      pic: pics,
      defaultIcon: 'http://o9xap42x4.bkt.clouddn.com/2014081214542085349.jpg'
    }
  },
  computed: mapState({
    championList: state => state.championList
  }),
  methods: {
    ...mapActions({
      getList: 'GET_CHAMPION_LIST'
    }),
    goDetail(id) {
      this.$router.push({name: 'championDetail', params: {id: id}})
    }
  },
  components: {
    Loading,
    vImg
  }
}
</script>
<style lang="less" scoped>
.champion-list {
  padding: 12px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background: #f8f8f8;
  &-item {
    width: 50%;
    text-align: center;
    display: flex;
    flex-direction: row;
    margin: 5px 0;
    &_avatar {
      flex: 1;
      width: 55px;
      height: 55px;
      border: none;
      img {
        display: block;
        border-radius: 50%;
        width: 55px;
        height: 55px;
        border: none;
      }
    }
    &_info {
      padding-left: 4px;
      flex: 2;
      display: flex;
      // flex-direction: column;
      align-items: center;
      .title {
        width: 100%;
        text-align: left;
        color: #333; 
        font-size: 14px;
      }
      .name {
        width: 100%;
        text-align: left;
        color: #999; 
        font-size: 12px;
      }
    }
  }
}
</style>