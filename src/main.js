import Vue from 'vue'
// import App from './App'
import VueRouter from 'Vue-router'
import Helloworld from './components/Helloworld'
import Home from './components/Home'

import Todolist from './Todolist'
Vue.config.productionTip = false

// import caculate from
/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   render: h => h(App)
// })

Vue.use(VueRouter)
//配置路由
const router = new VueRouter({
  routes:[
    {path:'/',component:Home},
    {path:'/helloworld',component:Home},
  ]
})

new Vue({
  router,
  el:'#app',
  // components: { //注册主件
  //   TodoList
  // },
  // template: '<Todolist />' //注册使用
  render: h => h(Todolist)
})

//index.html -> main.js -> app.vue（就是一个组件）模板内容插入