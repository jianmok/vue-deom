import Vue from 'vue'
// import App from './App'
import Todolist from './Todolist'
Vue.config.productionTip = false

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   render: h => h(App)
// })
new Vue({
  el:'#app',
  // components: {
  //   TodoList
  // },
  // template: '<Todolist />'
  render: h => h(Todolist)
})

