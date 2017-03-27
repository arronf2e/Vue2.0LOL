<template>
  <div>
    <mu-tabs :value="activeTab" @change="handleTabChange">
      <mu-tab value="all" title="全部英雄"/>
      <mu-tab value="free" title="周免英雄"/>
    </mu-tabs>
    <div class="champion-list" v-if="championList.length > 0 && activeTab == 'all'">
      <div class="champion-list-item" v-for="champion in championList" @click="goDetail(champion.id)">
        <div class="champion-list-item_avatar">
          <mu-avatar slot="left" :src="pic + champion.id + '.png'" :size="55"/>
        </div>
        <div class="champion-list-item_info">
          <p class="title">
            {{ champion.title }} <br>
            <span class="name">{{ champion.cname }}({{ champion.ename }})</span>
          </p>
        </div>
      </div>
    </div>
    <div class="champion-list" v-if="championFree.length > 0 && activeTab == 'free'">
      <div class="champion-list-item" v-for="champion in championFree" @click="goDetail(champion.id)">
        <div class="champion-list-item_avatar">
          <mu-avatar slot="left" :src="pic + champion.id + '.png'" :size="55"/>
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
const pics = 'http://cdn.tgp.qq.com/pallas/images/champions_id/'
export default {
  created () {
    this.getList()
    this.getFree()
  },
  data () {
    return {
      pic: pics,
      defaultIcon: 'http://o9xap42x4.bkt.clouddn.com/2014081214542085349.jpg',
      activeTab: 'all',
      list: []
    }
  },
  computed: mapState({
    championList: state => state.championList,
    championFree: state => state.championFree
  }),
  methods: {
    ...mapActions({
      getList: 'GET_CHAMPION_LIST',
      getFree: 'GET_CHAMPION_FREE'
    }),
    goDetail(id) {
      this.$router.push({name: 'championDetail', params: {id: id}})
    },
    handleTabChange(val) {
      this.activeTab = val
    }
  },
  components: {
    Loading
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
.mu-tabs {
  background-color: #b9dff9;
}
</style>
