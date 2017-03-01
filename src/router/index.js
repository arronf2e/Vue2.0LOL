import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/test',
      name: 'test',
      component: require('../components/Hello')
    },
    {
      path: '/',
      name: 'landing',
      component: require('../views/Landing')
    }, {
      path: '/index',
      name: 'index',
      component: require('../views/Index'),
      children: [
        {
          path: 'about',
          name: 'about',
          component: require('../views/About')      
        }, {
          path: 'championList',
          name: 'championList',
          component: require('../views/ChampionList')
        }, {
          path: 'championDetail/:id',
          name: 'championDetail',
          component: require('../views/championDetail'),
          beforeEnter: (to, from, next) => {
            if (from.name == 'championList') {
              let container = document.getElementById('index-container')
              container.scrollTop = 0
            }
            next()
          }     
        },
        {
          path: 'player',
          name: 'player',
          component: require('../views/player')
        }, {
          path: 'playerDetail/:vaid/:qquin',
          name: 'playerDetail',
          component: require('../views/playerdetail'),
          beforeEnter: (to, from, next) => {
            if (from.name == 'player') {
              let container = document.getElementById('index-container')
              container.scrollTop = 0
            }
            next()
          }     
        }, {
          path: '/combatDetail/:vaid/:qquin/:gameid',
          name: 'combatDetail',
          component: require('../views/CombatDetail'),
          beforeEnter: (to, from, next) => {
            if (from.name == 'playerDetail') {
              let container = document.getElementById('index-container')
              container.scrollTop = 0
            }
            next()
          }   
        }, {
          path: 'video',
          name: 'video',
          component: require('../views/video')
        }
      ]
    }
  ]
})

