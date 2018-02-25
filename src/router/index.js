import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/pages/Welcome'
import StoresList from '@/pages/StoresList'
import StoreDetails from '@/pages/StoreDetails'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/:postalcode/markets/',
      name: 'StoreList',
      component: StoresList
    },
    {
      path: '/:postalcode/markets/:marketid/:marketname',
      name: 'StoreDetails',
      component: StoreDetails
    }
  ]
})
