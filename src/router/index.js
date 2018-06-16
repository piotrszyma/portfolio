import VueRouter from 'vue-router';

const Home = () => import('@/components/home/Home.vue');
const Bio = () => import('@/components/bio/Bio.vue');

const routes = [{
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
    beforeEnter() {
      location.href = 'http://github.com/piotrszyma'
    }
  },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router;
