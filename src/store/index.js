import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const TOKEN = {
  "DAIWAN-API-TOKEN": "EC4D3-3246D-7DA01-ADCDD"
}

const API = {
  championList: 'http://lolapi.games-cube.com/champion',
  championDetail: 'http://lolapi.games-cube.com/GetChampionDetail?champion_id=',
  playerSearch: 'http://lolapi.games-cube.com/UserArea?keyword=',
  playerDetail: 'http://lolapi.games-cube.com/UserHotInfo?qquin=',
  getTierQueue: 'http://lolapi.games-cube.com/GetTierQueue?tier=',
  playExtInfo: 'http://lolapi.games-cube.com/UserExtInfo?qquin=',
  combatList: 'http://lolapi.games-cube.com/CombatList?qquin='
}
// playerDetail: http://lolapi.games-cube.com/UserHotInfo?qquin={qquin}&vaid={vaid}
// 段位  http://lolapi.games-cube.com/GetTierQueue?tier={tier}&queue={queue}
// 详细信息  http://lolapi.games-cube.com/UserExtInfo?qquin={qquin}&vaid={vaid}
// 战斗数据  http://lolapi.games-cube.com/CombatList?qquin={qquin}&vaid={vaid}&p={p}

const store = new Vuex.Store({
  state: {
    title: '英雄联盟助手',
    championList: [],
    champion: null,
    championDetailBg: '',
    playerSearchResult: [],
    playerDetail: null,
    tierQueue: '',
    tripleKills: 0,
    quadraKills: 0,
    pentaKills: 0,
    godlikeNum: 0,
    killsTotal: 0,
    totalMvps: 0,
    combatList: []
  },
  mutations: {
    get_champion_list(state) {
      axios.get(API.championList, {
        headers: TOKEN
      }).then((res) => {
        if (res.data.code == 0) {
          state.championList = res.data.data
        }
      })
    },
    get_champion_detail(state, object) {
      axios.get(API.championDetail + object.id, {
        headers: TOKEN
      }).then((res) => {
        if (res.data.code == 0) {
          state.champion = res.data.data[0]
        }
      })
    },
    get_player_search(state, object) {
      axios.get(API.playerSearch + object.name, {
        headers: TOKEN
      }).then((res) => {
        if (res.data.code == 0) {
          state.playerSearchResult = res.data.data
        }
      })
    },
    get_player_detail(state, object) {
      let qquin = object.qquin
      let vaid = object.vaid
      axios.get(API.playerDetail + qquin + '&vaid=' + vaid, {
        headers: TOKEN
      }).then((res) => {
        if (res.data.code == 0) {
          state.playerDetail = res.data.data[0]
          axios.get(API.getTierQueue + res.data.data[0].tier + '&queue=' + res.data.data[0].queue, {
            headers: TOKEN
          }).then((res) => {
            if (res.data.code == 0) {
              state.tierQueue = res.data.data[0].return
            }
          })
        }
      })
      axios.get(API.playExtInfo + qquin + '&vaid=' + vaid, {
        headers: TOKEN
      }).then((res) => {
        if (res.data.code == 0) {
          let data = res.data.data
          state.tripleKills = data[1].triple_kills
          state.quadraKills = data[1].quadra_kills
          state.pentaKills = data[1].penta_kills
          state.godlikeNum = data[1].god_like_num
          state.killsTotal = data[1].kills_total
          state.totalMvps = data[2].total_match_mvps + data[2].total_rank_mvps
        }
      })
    },
    empty_player_search(state) {
      state.playerSearchResult = []
    },
    get_combat_list(state, object) {
      axios.get(API.combatList + object.qquin + '&vaid=' + object.vaid + '&p=' + object.p, {
        headers: TOKEN
      }).then((res) => {
        if (res.data.code == 0) {
            state.combatList.push(res.data.data[0].battle_list)
        }
      })
    },
    empty_combat_list(state) {
      state.combatList = []
    }
  },
  actions: {
    GET_CHAMPION_LIST (context) {
      context.commit('get_champion_list')
    },
    GET_CHAMPION_DETAIL(context, object) {
      context.commit('get_champion_detail', object)
    },
    GET_PLAYER_SEARCH(context, object) {
      context.commit('get_player_search', object)
    },
    GET_PLAYER_DETAIL(context, object) {
      context.commit('get_player_detail', object)
    },
    GET_COMBAT_LIST(context, object) {
      context.commit('get_combat_list', object)
    }
  },
  getters: {
    skins (state) {
      var skins = []
      for(var i = 0; i < state.champion.skins.length; i++) {
        let obj = {
          name: state.champion.skins[i].name,
          skinurl: `http://cdn.tgp.qq.com/pallas/images/skins/original/${state.champion.key}-${state.champion.skins[i].id}.jpg`,
          videourl: state.champion.skins[i].displayUrl
        }
        skins.push(obj)
      }
      return skins
    },
    skills (state) {
      var skills = [{
        name: state.champion.passive.name,
        description: state.champion.passive.description,
        imgurl: `http://ossweb-img.qq.com/images/lol/img/passive/${state.champion.passive.image.full}`
      }]
      for(var i = 0; i < state.champion.spells.length; i++) {
        let obj = {
          name: state.champion.spells[i].name,
          description: state.champion.spells[i].tooltip,
          imgurl: `http://ossweb-img.qq.com/images/lol/img/spell/${state.champion.spells[i].id}.png`
        }
        skills.push(obj)
      }
      return skills
    }
  }
})

export default store