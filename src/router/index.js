import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/index.vue'
import cardNum from '../views/cardNum.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/index',
    name: 'home',
    component: Home
  },
  { 
    path: '/',
    redirect: '/index' 
  },
  {
    path: '/cardNum',
    name: 'cardNum',
    component: cardNum
  },,
]
const router = new VueRouter({
  routes
})
export default router