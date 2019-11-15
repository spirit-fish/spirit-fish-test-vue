import Vue from 'vue'
import VueRouter from 'vue-router'
import Gif from './components/Gif.vue';
import PageNotFound from './components/PageNotFound.vue';

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Gif
    },
    { 
      path: '*',
      component: PageNotFound
    }
  ]
})
