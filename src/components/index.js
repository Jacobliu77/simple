/*
 * @Description: 组件统一导出的出口文件
 * @Author: jacob
 * @Date: 2020-06-14 17:05:02
 * @LastEditTime: 2020-06-14 17:09:38
 * @LastEditors: jacob
 */ 
import navLeft from './navigationLeft'
import navTop from './navigationTop'

export default {
    install (Vue) {
      Vue.component('nav-left', navLeft) // 注册一个全局组件左侧边栏
      Vue.component('nav-top', navTop) // 注册一个全局组件上边栏
    }
  }
