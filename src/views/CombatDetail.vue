<template>
  <div>
    <div class="combat-detail" v-if="combatDetail !== null">
      <div class="combat-detail-info">
        <p>
          开始时间: {{ combatDetail.start_time.split(' ')[1].slice(0,5) }}
        </p>
        <p>
          总时长: {{ Math.ceil(combatDetail.duration/60) }}分钟
        </p>
        <p>
          模式: {{ combatDetail.game_type | getCombatType}}
        </p>
      </div>
      <div class="combat-detail-players">
        <div class="combat-detail-players-win">
          <div class="combat-detail-players-win-count">
            <div class="win-side">
              获胜方
            </div>
            <p>
              <img src="http://o9xap42x4.bkt.clouddn.com/kill1.png" alt="">
              <img src="http://o9xap42x4.bkt.clouddn.com/death1.png" alt="">
              <img src="http://o9xap42x4.bkt.clouddn.com/sup1.png" alt="">
            </p>
          </div>
          <div class="combat-detail-players-win-list">
            <div class="item" v-for="winner in winners">
              <div class="champion-icon">
                <img :src="pics + winner.champion_id + '.png'" alt="">
                <p>
                  Lv{{ winner.level }}
                </p>
              </div>
              <div class="equips">
                <p>{{ winner.name }}</p>
                <img :src="equips + winner.item0 + '.png'" >
                <img :src="equips + winner.item1 + '.png'" >
                <img :src="equips + winner.item2 + '.png'" >
                <img :src="equips + winner.item3 + '.png'" >
                <img :src="equips + winner.item4 + '.png'" >
                <img :src="equips + winner.item5 + '.png'" >
                <img :src="equips + winner.item6 + '.png'" >
              </div>
              <div class="kda">
                <p>
                  {{ winner.champions_killed }} / {{ winner.num_deaths }} / {{ winner.assists}}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="combat-detail-player-lose">
          <div class="combat-detail-players-lose-count">
            <div class="lose-side">
              失败方
            </div>
            <p>
              <img src="http://o9xap42x4.bkt.clouddn.com/kill2.png" alt="">
              <img src="http://o9xap42x4.bkt.clouddn.com/death2.png" alt="">
              <img src="http://o9xap42x4.bkt.clouddn.com/sup2.png" alt="">
            </p>
          </div>
          <div class="combat-detail-players-lose-list">
            <div class="item" v-for="winner in losers">
              <div class="champion-icon">
                <img :src="pics + winner.champion_id + '.png'" alt="">
                <p>
                  Lv{{ winner.level }}
                </p>
              </div>
              <div class="equips">
                <p>{{ winner.name }}</p>
                <img :src="equips + winner.item0 + '.png'" >
                <img :src="equips + winner.item1 + '.png'" >
                <img :src="equips + winner.item2 + '.png'" >
                <img :src="equips + winner.item3 + '.png'" >
                <img :src="equips + winner.item4 + '.png'" >
                <img :src="equips + winner.item5 + '.png'" >
                <img :src="equips + winner.item6 + '.png'" >
              </div>
              <div class="kda">
                <p>
                  {{ winner.champions_killed }} / {{ winner.num_deaths }} / {{ winner.assists}}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Loading v-else></Loading>
  </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import Loading from '../components/Loading'
import { getCombatType } from '../filters'
const pics = 'http://cdn.tgp.qq.com/pallas/images/champions_id/'
const equips = 'http://ddragon.leagueoflegends.com/cdn/6.21.1/img/item/'
export default {
  created () {
    this.getDetail()
  },
  data () {
    return {
      pics: pics,
      equips: equips
    }
  },
  computed: {
    ...mapState(['combatDetail']),
    ...mapGetters(['winners', 'losers'])
  },
  methods: {
    getDetail () {
      let params = {
        qquin: this.$route.params['qquin'],
        vaid: this.$route.params['vaid'],
        gameid: this.$route.params['gameid']
      }
      this.$store.dispatch('GET_COMBAT_DETAIL', params)
    }
  },
  components: {
    Loading
  },
  filters: {
    getCombatType
  }
}
</script>
<style lang="less">
.combat-detail {
  &-info {
    display: flex;
    flex-direction: row;
    // border-bottom: 1px solid #999;
    p {
      padding: 8px 0;
      flex: 1;
      text-align: center;
      font-size: 13px;
    }
  }
  &-players {
    background: #f8f8f8;
    padding-top: 20px;
    &-win {
      &-count {
        display: flex;
        flex-direction: row;
        padding-left: 10px;
        padding-right: 10px;
        padding-bottom: 10px;
        border-bottom: 1px solid #f0f0f0;
        .win-side {
          flex: 2;
          background: #26a2ff;
          color: #fff;
          padding-left: 2px;
          font-size: 18px;
        }
        p {
          flex: 8;
          text-align: right;
        }
      }
      &-list {
        padding-top: 20px;
        .item {
          padding-left: 10px;
          padding-top: 10px;
          padding-bottom: 10px;
          display: flex;
          flex-direction: row;
          border-bottom: 1px solid #f0f0f0;
          // margin-bottom: 10px;
          .champion-icon {
            flex: 1;
            img {
              width: 60px;
              height: 60px;
            }
            p {
              width: 58px;
              text-align: center;
              border: 1px solid green;
            }
          }
          .equips {
            flex: 3;
            padding-left: 5px;
            p {
              padding-top: 5px;
              padding-bottom: 10px;
            }
            img {
              width: 20px;
              height: 20px;

            }
          }
          .kda {
            flex: 1;
            display: flex;
            align-items: center;
            font-size: 14px;
            color: #666;
          }
        }
      }
    }
    &-lose {
      &-count {
        display: flex;
        flex-direction: row;
        padding-left: 10px;
        padding-right: 10px;
        padding-bottom: 10px;
        padding-top: 10px;
        border-bottom: 1px solid #f0f0f0;
        .lose-side {
          flex: 2;
          background: #ff3e3e;
          color: #fff;
          padding-left: 2px;
          font-size: 18px;
        }
        p {
          flex: 8;
          text-align: right;
        }
      }
      &-list {
        .item {
          padding-left: 10px;
          padding-top: 10px;
          padding-bottom: 10px;
          display: flex;
          flex-direction: row;
          border-bottom: 1px solid #f0f0f0;
          // margin-bottom: 10px;
          .champion-icon {
            flex: 1;
            img {
              width: 60px;
              height: 60px;
            }
            p {
              width: 58px;
              text-align: center;
              border: 1px solid green;
            }
          }
          .equips {
            flex: 3;
            padding-left: 5px;
            p {
              padding-top: 5px;
              padding-bottom: 10px;
            }
            img {
              width: 20px;
              height: 20px;

            }
          }
          .kda {
            flex: 1;
            display: flex;
            align-items: center;
            font-size: 14px;
            color: #666;
          }
        }
      }
    }
  }
}
</style>