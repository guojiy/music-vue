import Vue from 'vue'
import Router from 'vue-router'
import Recommend from '../components/recommend/recom.vue'
import Rank from '../components/rand/rank.vue'
import Search from '../components/search/search.vue'
import Singer from '../components/singer/singer.vue'
import SingerDetail from '../components/singer-detail/singer-detail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      component: Recommend
    },
    {
      path: '/singer',
      component: Singer,
      children:[
        {
          path:':id',
          component:SingerDetail
        }
      ]
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/rank',
      component: Rank
    }
  ]
})