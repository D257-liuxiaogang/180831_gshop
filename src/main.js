/*
入口js
 */
import Vue from 'vue'
import {Button} from 'mint-ui'
import App from './App'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'


import './mock/mockServer' // 加载 mockServer 即可
import loading from './common/imgs/loading.gif'
import './filters' // 加载过滤器

// 注册全局组件
Vue.component(Button.name,Button) // <mt-button>
Vue.use(VueLazyload,{ // 内部自定义一个指令 lazy
  loading
})

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store

})
