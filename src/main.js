import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import axios from 'axios'

// css初始化
import 'normalize.css/normalize.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@/styles/index.scss'

import Http from '@/config/axios'

// 引入svg-icon圖片
import './icons'
import '@/assets/iconfont/iconfont.css'

import './permission'

Vue.use(ElementUI, { size: 'medium', zIndex: 3000 })

// 原生的axios对象
Vue.http = Vue.prototype.$http = axios
// 封装的axios
Vue.prototype.$axios = Http

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
