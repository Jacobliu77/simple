/*
 * @Description: js入口文件
 * @Author: jacob
 * @Date: 2020-06-14 15:22:19
 * @LastEditTime: 2020-06-14 20:25:47
 * @LastEditors: jacob
 */ 
import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import echarts from 'echarts'
import router from './router'
import Component from './components'


Vue.config.productionTip = false
Vue.use(Component);
Vue.use(ElementUI);
Vue.prototype.$echarts = echarts


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
