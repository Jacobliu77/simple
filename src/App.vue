<!--
 * @Description:vue实例文件 第一个页面
 * @Author: jacob
 * @Date: 2020-06-14 15:22:19
 * @LastEditTime: 2020-06-14 18:34:01
 * @LastEditors: jacob
--> 
<template>
  <div id="app">
    <!-- 布局容器开始 -->
    <el-container>
      <!-- 左右布局-侧边栏开始 -->
      <el-aside width="200px">
        <nav-left></nav-left>
      </el-aside>
      <!-- 左右布局-侧边栏结束-右侧容器开始 -->
      <el-container>
        <!-- 上下布局-头部信息状态栏开始 -->
        <el-header>
          <nav-top></nav-top>
        </el-header>
        <!-- 上下布局-头部结束-主题区域开始 -->
        <el-main>
           <router-view></router-view>
        </el-main>
        <!-- 主题区域结束 -->
      </el-container>
      <!-- 右侧容器结束 -->
    </el-container>
    <!-- 布局容器结束 -->
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0;
  margin: 0;
}
.el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 100vh;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
  }
  
  body > .el-container {
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
  }
</style>
