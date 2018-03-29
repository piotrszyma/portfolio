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
  },
  {
    name: 'github',
    path: '/github',
    beforeEnter() { location.href = 'http://github.com/piotrszyma' }
},
]

export default new VueRouter({
  routes,
  mode: 'history'
})