import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const TOKEN = {
  "DAIWAN-API-TOKEN": "2BDC0-0FF9C-9D4C9-6CB20"
}
const VIDEOTOKEN = {
  "DAIWAN-API-TOKEN":"DF4B4-27CC2-F60FF-C77C0"
}

const API = {
  championList: '/api/champion',
  championFree: '/api/Free',
  championDetail: '/api/GetChampionDetail?champion_id=',
  playerSearch: '/api/UserArea?keyword=',
  playerDetail: '/api/UserHotInfo?qquin=',
  getTierQueue: '/api/GetTierQueue?tier=',
  playExtInfo: '/api/UserExtInfo?qquin=',
  combatList: '/api/CombatList?qquin=',
  combatDetail: '/api/GameDetail?qquin=',
  newstVideos: '/api/GetNewstVideos?p=',
  commenterList: '/api/GetAuthors',
  newstVideos: 'http://infoapi.games-cube.com/GetNewstVideos?p=',
  speakersList: 'http://infoapi.games-cube.com/GetAuthors'
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
    championFree: [],
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
    bannerNews: null,
    speakersList: []
    // showKeybord: false
  },
  mutations: {
    get_champion_list(state, data) {
      state.championList = data
      state.title = '全部英雄'
    },
    get_champion_free(state, data) {
      state.championFree = []
      for(let key in data) {
        state.championFree.push({
          id: data[key].key,
          title: data[key].name,
          cname: data[key].title,
          ename: key
        })
      }
      state.title = '周免英雄'
    },
    get_champion_detail(state, data) {
      state.champion = data
      state.title = state.champion.name
    },
    get_player_search(state, data) {
      state.playerSearchResult = data
      state.title = '搜索召唤师'
    },
    get_player_fight_detail(state, data) {
      state.tripleKills = data[1].triple_kills
      state.quadraKills = data[1].quadra_kills
      state.pentaKills = data[1].penta_kills
      state.godlikeNum = data[1].god_like_num
      state.killsTotal = data[1].kills_total
      state.totalMvps = data[2].total_match_mvps + data[2].total_rank_mvps
    }
    ,
    get_player_base_detail(state,data1, data2) {
      state.playerDetail = data1
      state.title = state.playerDetail.name
      state.tierQueue = data2
    },
    empty_player_search(state) {
      state.playerSearchResult = []
    },
    get_combat_list(state, data) {
      state.combatList = state.combatList.concat(data)
    },
    get_combat_detail(state, data) {
      state.combatDetail = data
      state.title = '对战详情'
    },
    empty_combat_list(state) {
      state.combatList = []
    },
    get_newst_videos(state, data) {
      state.title = '视频'
      state.newstVideos = state.newstVideos.concat(data)
    },
    get_speakers_list(state, data) {
      state.speakersList = data
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
    // update_show_keybord(state) {
    //   state.showKeybord = !state.showKeybord
    // }
  },
  actions: {
    GET_CHAMPION_LIST (context) {
      axios.get(API.championList, {
        headers: TOKEN
      }).then((res) => {
        if (res.data.code == 0) {
          context.commit('get_champion_list', res.data.data)
        }
      })
    },
    GET_CHAMPION_FREE (context) {
      axios.get(API.championFree, {
        headers: TOKEN
      }).then((res) => {
        if (res.data.code == 0) {
          context.commit('get_champion_free', res.data.data[0])
        }
      })
    },
    GET_CHAMPION_DETAIL(context, object) {
      axios.get(API.championDetail + object.id, {
        headers: TOKEN
      }).then((res) => {
        if (res.data.code == 0) {
          context.commit('get_champion_detail', res.data.data[0])
        }
      })
    },
    GET_PLAYER_SEARCH(context, object) {
      axios.get(API.playerSearch + object.name, {
        headers: TOKEN
      }).then((res) => {
        if (res.data.code == 0) {
          context.commit('get_player_search', res.data.data)
        }
      })
    },
    GET_PLAYER_FIGHT_DETAIL(context, object) {
      let qquin = object.qquin
      let vaid = object.vaid
      axios.get(API.playExtInfo + qquin + '&vaid=' + vaid, {
        headers: TOKEN
      }).then((res) => {
        if (res.data.code == 0) {
          context.commit('get_player_fight_detail', res.data.data)
        }
      })
    },
    GET_PLAYER_BASE_DETAIL(context, object) {
      let qquin = object.qquin
      let vaid = object.vaid
      axios.get(API.playerDetail + qquin + '&vaid=' + vaid, {
        headers: TOKEN
      }).then((res) => {
        if (res.data.code == 0) {
          var data1 = res.data.data[0]
          axios.get(API.getTierQueue + res.data.data[0].tier + '&queue=' + res.data.data[0].queue, {
            headers: TOKEN
          }).then((res) => {
            if (res.data.code == 0) {
              var data2 = res.data.data[0].return
              context.commit('get_player_base_detail', data1, data2)
            }
          })
        }
      })
    },
    GET_COMBAT_LIST(context, object) {
      axios.get(API.combatList + object.qquin + '&vaid=' + object.vaid + '&p=' + object.p, {
        headers: TOKEN
      }).then((res) => {
        if (res.data.code == 0) {
          context.commit('get_combat_list', res.data.data[0].battle_list)
        }
      })
    },
    GET_COMBAT_DETAIL(context, object) {
      axios.get(API.combatDetail + object.qquin + '&vaid=' + object.vaid + '&gameid=' + object.gameid, {
        headers: TOKEN
      }).then((res) => {
        if (res.data.code == 0) {
          context.commit('get_combat_detail', res.data.data[0].battle)
        }
      })
    },
    GET_NEWST_VIDEOS(context, object) {
      axios.get(API.newstVideos + object.p, {
        headers: VIDEOTOKEN
      }).then((res) => {
        if (res.data.code == 0) {
          context.commit('get_newst_videos', res.data.data)
        }
      })
    },
    GET_NEWST_NEWS(context) {
      context.commit('get_newst_news')
    },
    GET_SPEAKERS_LIST(context) {
      axios.get(API.speakersList, {
        headers: VIDEOTOKEN
      }).then((res) => {
        if (res.data.code == 0) {
          context.commit('get_speakers_list', res.data.data)
        }
      })
    }
  },
  getters: {
    skins (state) {
      var skins = []
      if(!state.champion) {
        return null
      }
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
      if(!state.champion) {
        return null
      }
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
      if(!state.combatDetail) {
        return null
      }
      return state.combatDetail.gamer_records.slice(0,5)
    },
    losers (state) {
      if(!state.combatDetail) {
        return null
      }
      return state.combatDetail.gamer_records.slice(-5)
    }
  }
})

export default store
