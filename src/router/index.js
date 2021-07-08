import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import Resume from '@/views/Resume.vue';

const routes = [{
  name: 'home',
  path: '/',
  component: Home
},
{
  name: 'resume',
  path: '/resume',
  component: Resume
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
