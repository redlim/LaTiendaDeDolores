import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/pages/Welcome'
import StoresList from '@/pages/StoresList'
import StoreDetails from '@/pages/StoreDetails'
import VueResource from 'vue-resource';

Vue.use(VueResource);
Vue.use(Router);

Vue.http.options.root = 'https://ddatos.com/api';
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
      path: '/:postalcode/markets/:marketid',
      name: 'StoreDetails',
      component: StoreDetails
    }
  ]
})
