import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const TOKEN = {
  "DAIWAN-API-TOKEN": "6745A-A8696-53335-948D9"
}
const VIDEOTOKEN = {
  "DAIWAN-API-TOKEN":"C18BC-4CFC9-1C966-CC490"
}

const API = {
  championList: 'http://lolapi.games-cube.com/champion',
  championDetail: 'http://lolapi.games-cube.com/GetChampionDetail?champion_id=',
  playerSearch: 'http://lolapi.games-cube.com/UserArea?keyword=',
  playerDetail: 'http://lolapi.games-cube.com/UserHotInfo?qquin=',
  getTierQueue: 'http://lolapi.games-cube.com/GetTierQueue?tier=',
  playExtInfo: 'http://lolapi.games-cube.com/UserExtInfo?qquin=',
  combatList: 'http://lolapi.games-cube.com/CombatList?qquin=',
  combatDetail: 'http://lolapi.games-cube.com/GameDetail?qquin=',
  newstVideos: 'http://infoapi.games-cube.com/GetNewstVideos?p=',
  commenterList: 'http://infoapi.games-cube.com/GetAuthors'
}
// playerDetail: http://lolapi.games-cube.com/UserHotInfo?qquin={qquin}&vaid={vaid}
// 段位  http://lolapi.games-cube.com/GetTierQueue?tier={tier}&queue={queue}
// 详细信息  http://lolapi.games-cube.com/UserExtInfo?qquin={qquin}&vaid={vaid}
// 战斗数据  http://lolapi.games-cube.com/CombatList?qquin={qquin}&vaid={vaid}&p={p}
// 单场游戏数据： http://lolapi.games-cube.com/GameDetail?qquin={qquin}&vaid={vaid}&gameid={gameid}
// 最新视频： http://infoapi.games-cube.com/GetNewstVideos?p={p}

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
    combatList: [],
    combatDetail: null,
    newstVideos: [],
    newstNews: null,
    bannerNews: null
  },
  mutations: {
    get_champion_list(state) {
      axios.get(API.championList, {
        headers: TOKEN
      }).then((res) => {
        if (res.data.code == 0) {
          state.championList = res.data.data
          state.title = '英雄列表'
        }
      })
    },
    get_champion_detail(state, object) {
      axios.get(API.championDetail + object.id, {
        headers: TOKEN
      }).then((res) => {
        if (res.data.code == 0) {
          state.champion = res.data.data[0]
          state.title = state.champion.name
        }
      })
    },
    get_player_search(state, object) {
      axios.get(API.playerSearch + object.name, {
        headers: TOKEN
      }).then((res) => {
        if (res.data.code == 0) {
          state.playerSearchResult = res.data.data
          state.title = '搜索召唤师'
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
          state.title = state.playerDetail.name
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
            state.combatList = state.combatList.concat(res.data.data[0].battle_list)
        }
      })
    },
    get_combat_detail(state, object) {
      axios.get(API.combatDetail + object.qquin + '&vaid=' + object.vaid + '&gameid=' + object.gameid, {
        headers: TOKEN
      }).then((res) => {
        if (res.data.code == 0) {
            state.combatDetail = res.data.data[0].battle
            state.title = '对战详情'
        }
      })
    },
    empty_combat_list(state) {
      state.combatList = []
    },
    get_newst_videos(state, object) {
      state.title = '视频'
      axios.get('/api/GetNewstVideos?p=' + object.p, {
        headers: VIDEOTOKEN
      }).then((res) => {
        if (res.data.code == 0) {
            state.newstVideos = state.newstVideos.concat(res.data.data)
        }
      })
    },
    get_newst_news(state) {
      // 有点问题，暂时用本地数据代替
      // state.title = '最新资讯'
      // axios.get('http://qt.qq.com/php_cgi/news/php/varcache_getnews.php?id=12&page=0&plat=ios&version=33').then((res) => {
      //   state.newstNews = res.data.list
      // })
      // axios.get('http://qt.qq.com/static/pages/news/phone/c13_list_1.shtml').then((res) => {
      //   state.bannerNews = res.data.list
      // })
    },
    set_title(state, val) {
      state.title = val
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
    },
    GET_COMBAT_DETAIL(context, object) {
      context.commit('get_combat_detail', object)
    },
    GET_NEWST_VIDEOS(context, object) {
      context.commit('get_newst_videos', object)
    },
    GET_NEWST_NEWS(context) {
      context.commit('get_newst_news')
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
    },
    winners (state) {
      return state.combatDetail.gamer_records.slice(0,5)
    },
    losers (state) {
      return state.combatDetail.gamer_records.slice(-5)
    }
  }
})

export default store