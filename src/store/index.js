import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const TOKEN = {
  "DAIWAN-API-TOKEN": "23487-B3428-43746-B8884"
}

const API = {
  championList: 'http://lolapi.games-cube.com/champion',
  championDetail: 'http://lolapi.games-cube.com/GetChampionDetail?champion_id='
}

const store = new Vuex.Store({
  state: {
    title: '英雄联盟助手',
    championList: [],
    champion: null,
    championDetailBg: ''
  },
  mutations: {
    get_champion_list(state) {
      axios.get(API.championList, {
        headers: TOKEN
      }).then((res) => {
        state.championList = res.data.data
      })
    },
    get_champion_detail(state,object) {
      axios.get(API.championDetail + object.id, {
        headers: TOKEN
      }).then((res) => {
        state.champion = res.data.data[0]
      })
    }
  },
  actions: {
    GET_CHAMPION_LIST (context) {
      context.commit('get_champion_list')
    },
    GET_CHAMPION_DETAIL(context, object) {
      context.commit('get_champion_detail', object)
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