<template>
  <div>
    <div class="player-detail" v-if="playerDetail !== null">
      <div class="player-detail-header">
        <div class="player-detail-header-icon">
          <img :src="TGPICON + playerDetail.icon + '.png'" alt="">
          <span>{{ playerDetail.level }}级</span>
        </div>
        <div class="player-detail-header-info">
          <p>
            {{ playerDetail.area_id | getAreaName }} | {{ tierQueue }}
          </p>
          <p>
            战斗力: {{ playerDetail.power_value }} | 赞: {{ playerDetail.praise_num }}
          </p>
        </div>
      </div>
      <div class="player-detail-mvp">
        <div class="player-detail-mvp-item">
          <img src="http://o9xap42x4.bkt.clouddn.com/3.png" alt="">
          <p>三杀: {{ tripleKills }}</p>
        </div>
        <div class="player-detail-mvp-item">
          <img src="http://o9xap42x4.bkt.clouddn.com/4.png" alt="">
          <p>四杀: {{ quadraKills }}</p>
        </div>
        <div class="player-detail-mvp-item">
          <img src="http://o9xap42x4.bkt.clouddn.com/5.png" alt="">
          <p>五杀: {{ pentaKills }}</p>
        </div>
        <div class="player-detail-mvp-item">
          <img src="http://o9xap42x4.bkt.clouddn.com/TOTAL.png" alt="">
          <p>总击杀: {{ killsTotal }}</p>
        </div>
        <div class="player-detail-mvp-item">
          <img src="http://o9xap42x4.bkt.clouddn.com/mvpicon.png" alt="">
          <p>MVP: {{ totalMvps }}</p>
        </div>
        <div class="player-detail-mvp-item">
          <img src="http://o9xap42x4.bkt.clouddn.com/cs.png" alt="">
          <p>超神: {{ godlikeNum }}</p>
        </div>
      </div>
      <div class="player-detail-combats">
        <ul>
          <router-link tag="li" v-for="combat in combatList[0]" :to="{name: 'combatDetail', params: {gameid: combat.game_id}}">
            <div class="icon">
              <img :src="pics + combat.champion_id + '.png'" alt="">
            </div>
            <div class="combat-info">
              <p class="combat-info-result" :class="combat.win == 1 ? 'win' : 'lose'">
                {{ combat.win == '1' ? '胜利' : '失败'}}
              </p>
              <p class="combat-info-mode">
                {{ combat.game_type | getCombatType }}
              </p>
            </div>
            <div class="arrow-right">
              <img src="http://o9xap42x4.bkt.clouddn.com/arrow_blue.png" alt="">
            </div>
          </router-link>
        </ul>
      </div>
    </div>
    <Loading v-else></Loading>
  </div>
</template>
<script>
import Loading from '../components/Loading'
import { mapState, mapActions, mapMutations } from 'vuex'
import { getCombatType, getAreaName } from '../filters'
const TGPICON = 'http://cdn.tgp.qq.com/lol/images/resources/usericon/'
const pics = 'http://cdn.tgp.qq.com/pallas/images/champions_id/'
export default {
  created () {
    this.getDetail()
    this.getCombatList()
    this.empty_combat_list()
  },
  data () {
    return {
      TGPICON: TGPICON,
      p: 0,
      pics: pics
    }
  },
  computed: {
    ...mapState(['playerDetail', 'tierQueue', 'tripleKills', 'quadraKills', 'pentaKills', 'godlikeNum', 'killsTotal', 'totalMvps', 'combatList'])
  },
  methods: {
    getDetail () {
      let params = {
        qquin: this.$route.params['qquin'],
        vaid: this.$route.params['vaid']
      }
      this.$store.dispatch('GET_PLAYER_DETAIL', params)
    },
    getCombatList () {
      let params = {
        qquin: this.$route.params['qquin'],
        vaid: this.$route.params['vaid'],
        p: this.p
      }
      this.$store.dispatch('GET_COMBAT_LIST', params)
    },
    ...mapMutations([
      'empty_combat_list'
    ]),
  },
  components: {
    Loading
  },
  filters: {
    getAreaName: getAreaName,
    getCombatType: getCombatType
  }
}
</script>
<style lang="less">
.player-detail {
  &-header {
    height: 150px;
    background: url('http://o9xap42x4.bkt.clouddn.com/playerdetailbg.png');
    &-icon {
      text-align: center;
      padding-top: 12px;
      color: #fff;
      img {
        width: 55px;
        height: 55px;
        display: block;
        border-radius: 50%;
        margin: 0 auto;
      }
    }
    &-info {
      p {
        text-align: center;
        color: #fff;
        font-size: 12px;
      }
    }
  }
  &-mvp {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    &-item {
      width: 30%;
      text-align: center;
      padding: 10px 0;
      img {

      }
      p {
        text-align: center;
        font-size: 12px;
        padding: 3px 0;
      }
    }
  }
  &-combats {
    ul {
      li {
        padding: 0 30px;
        display: flex;
        flex-direction: row;
        .icon {
          img {
            width: 35px;
            height: 35px;
            display: block;
            border-radius: 50%;
          }
        }
        .combat-info {
          &-result {

          }
          .win {
            color: #26a2ff;
          }
          .lose {
            color: #ff0000;
          }
        }
        .arrow-right {

        }
      }
    }
  }
}
</style>