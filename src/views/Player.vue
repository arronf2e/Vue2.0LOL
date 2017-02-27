<template>
  <div class="player">
    <div class="player-search">
      <input type="text" placeholder="搜索召唤师" v-model="name" />
      <button @click="playerSearch">搜索</button>
    </div>
    <div class="player-result">
      <div class="player-result-empty" v-if="playerSearchResult.length == 0">
        <img src="http://o9xap42x4.bkt.clouddn.com/empty1.png" alt="">
      </div>
      <div class="player-result-list" v-else>
        <div class="player-result-list-item" v-for="player in playerSearchResult">
          <div class="icon">
            <img :src="TGPICON + player.icon_id + '.png'">
          </div>
          <div class="info">
            <p>{{ player.name }}</p>
            <p>
              {{ player.area_id | AREANAME }}
              <span>等级:{{ player.level }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from 'mint-ui'
import { mapState, mapActions } from 'vuex'
// http://cdn.tgp.qq.com/lol/images/resources/usericon/icon_id.png
const TGPICON = 'http://cdn.tgp.qq.com/lol/images/resources/usericon/'
const AREAS = [
  {
    'id': 1,
    'isp': '电信一',
    'name': '艾欧尼亚'
  },
  {
    'id': 2,
    'isp': '网通一',
    'name': '比尔吉沃特'
  },
  {
    'id': 3,
    'isp': '电信二',
    'name': '祖安'
  },
  {
    'id': 4,
    'isp': '电信三',
    'name': '诺克萨斯'
  },
  {
    'id': 5,
    'isp': '电信四',
    'name': '班德尔城'
  },
  {
    'id': 6,
    'isp': '网通二',
    'name': '德玛西亚'
  },
  {
    'id': 7,
    'isp': '电信五',
    'name': '皮尔特沃夫'
  },
  {
    'id': 8,
    'isp': '电信六',
    'name': '战争学院'
  },
  {
    'id': 9,
    'isp': '网通三',
    'name': '弗雷尔卓德'
  },
  {
    'id': 10,
    'isp': '电信七',
    'name': '巨神峰'
  },
  {
    'id': 11,
    'isp': '电信八',
    'name': '雷瑟守备'
  },
  {
    'id': 12,
    'isp': '网通四',
    'name': '无畏先锋'
  },
  {
    'id': 13,
    'isp': '电信九',
    'name': '裁决之地'
  },
  {
    'id': 14,
    'isp': '电信十',
    'name': '黑色玫瑰'
  },
  {
    'id': 15,
    'isp': '电信十一',
    'name': '暗影岛'
  },
  {
    'id': 16,
    'isp': '网通五',
    'name': '恕瑞玛'
  },
  {
    'id': 17,
    'isp': '电信十二',
    'name': '钢铁烈阳'
  },
  {
    'id': 18,
    'isp': '电信十三',
    'name': '水晶之痕'
  },
  {
    'id': 19,
    'isp': '电信十四',
    'name': '均衡教派'
  },
  {
    'id': 20,
    'isp': '网通六',
    'name': '扭曲丛林'
  },
  {
    'id': 21,
    'isp': '教育网',
    'name': '教育网专区'
  },
  {
    'id': 22,
    'isp': '电信十五',
    'name': '影流'
  },
  {
    'id': 23,
    'isp': '电信十六',
    'name': '守望之海'
  },
  {
    'id': 24,
    'isp': '电信十七',
    'name': '征服之海'
  },
  {
    'id': 25,
    'isp': '电信十八',
    'name': '卡拉曼达'
  },
  {
    'id': 26,
    'isp': '网通七',
    'name': '巨龙之巢'
  },
  {
    'id': 27,
    'isp': '电信十九',
    'name': '皮城警备'
  }
]
export default {
  data () {
    return {
      name: '',
      TGPICON: TGPICON,
      AREAS: AREAS
    }
  },
  computed: mapState({
    playerSearchResult: state => state.playerSearchResult
  }),
  methods: {
    playerSearch () {
      if (this.name == '') {
        this.$toast('请输入正常的召唤师名字哦')
        return
      }
      this.$store.dispatch('GET_PLAYER_SEARCH', {
        name: this.name
      })
    }
  },
  filters: {
    AREANAME (val) {
      for(var i = 0; i < AREAS.length; i++) {
        if (AREAS[i].id == val) {
          return AREAS[i].name
        }
      }
    }
  },
  components: {
    
  }
}
</script>
<style lang="less" scoped>
.player {
  &-search {
    border: 5px solid #26a2ff;
    // border-radius: 4px;
    height: 35px;
    display: flex;
    flex-direction: row;
    input {
      height: 100%;
      flex: 3;
      border: none;
      padding-left: 10px;
    }
    button {
      height: 100%;
      flex: 1;
      border: none;
      background: navajowhite;
      color: #fff;
    }
  }
  &-result {
    &-empty {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 100px;
        height: 100px;
        opacity: 0.7;
        margin-top: 100px;
      }
    }
    &-list {
      &-item {
        display: flex;
        flex-direction: row;
        &:not(:last-child) {
          border-bottom: 1px solid #eee;
        }
        .icon {
          display: flex;
          justify-content: center;
          flex: 1;
          padding: 5px 0;
          img {
            display: block;
            border-radius: 50%;
            width: 55px;
            height: 55px;
          }
        }
        .info {
          display: flex;
          flex-direction: column;
          flex: 3;
          padding: 8px 0;
          p {
            span {
              font-size: 12px;
              color: #333;
            }
          }
        }
      }
    }
  }
}
</style>