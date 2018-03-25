import VueRouter from 'vue-router';
import Home from '@/components/home/Home.vue';
import Bio from '@/components/bio/Bio.vue';
const routes = [
  {
    name: 'home',
    path: '/',
    component: Home
  },
  {
    name: 'bio',
    path: '/bio',
    component: Bio
  }
]

export default new VueRouter({
  routes,
  mode: 'history'
})