import Vue from 'vue'
import Router from 'vue-router'
// Pages
import MainPage from '../pages/main_page'
import HomePage from '../pages/home_page'
import StatisticPage from '../pages/statistic_page'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'main_page',
      component: MainPage,
      children: [
        {
          path: '',
          name: 'home_page',
          component: HomePage
        },
        {
          path: '/statistic',
          name: 'statistic_page',
          component: StatisticPage
        },
      ]
    }
  ]
})
