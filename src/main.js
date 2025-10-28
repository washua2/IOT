import { createApp } from 'vue'
import './style.css'
import "@/assets/fonts/Roboto/font.css"
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import { BaseUrl } from './config';
import 'flowbite';

import HOME from "./view/index.vue"
import HOMEPAGE from "./view/homePage/index.vue"
import MARQUE from "./components/Marque.vue"



import { Slider } from 'ant-design-vue';

const router = createRouter({
  history: createWebHistory("/"),
  routes: [
    { path: '/', component:HOME  },
    { path: '/home', component: HOME },
    { path: '/Marque', component: MARQUE },
  ],
});


createApp(App).use(router).use(Slider).provide('BaseUrl', BaseUrl).mount('#app');
