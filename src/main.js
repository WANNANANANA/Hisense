import Vue from 'vue'
import App from './App.vue'
import VueLazyLoad from 'vue-lazyload'
import loadingImg from './assets/img/loading.jpg'
import errorImg from './assets/img/error.jpg'

Vue.config.productionTip = false

Vue.use(VueLazyLoad, {
  preload: 1.3, // 预加载高度比例
  error: errorImg, // 图片路径出错时加载图片
  loading: loadingImg, // 预加载图片
  attempt: 6, // 尝试加载图片数量
  observer: true,
  observerOptions: {
    rootMargin: '0px',
    threshold: 0.1
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
