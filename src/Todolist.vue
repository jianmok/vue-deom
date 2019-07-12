<template>
<div id = 'app'>
  router-vue;
    <p>{{ title }}</p>
    <p v-if='showSub'>{{ subTitle }}</p>
    <input @keyup.enter = 'clickInfo' type= 'text' v-model='myTodo'>
    <button @click = 'clickInfo'>添加</button>
    <button @click = 'clearInfo'>清除</button>
    <ul>
      <li :class="{'done':todo.done}" @click='changeDone(index)' v-for='(todo,index) in todos'>{{ index+1 }}:{{ todo.text }}</li>
    </ul>
    <p>{{ remain }}/{{ todos.length }}</p>
    <button @click = 'add(1)'>涨一岁</button>
    <button @dblclick = 'subscribe(1)'>减一岁</button>
    <button @click = 'add(10)'>涨十岁</button>
    <button @click = 'subscribe(10)'>减十岁</button>
    <p>{{ age }}</p>
    <div id = 'canvas' @mousemove='updatexy'>
      {{x}},{{y}} - <span @mousemove.stop>stop Moving</span>
    </div>
      <a v-bind:href="baiduurl">百度链接</a>
      </br>
      <p v-html='baidu'>{{ baidu }}</p>
      <label>姓名：</label>
      <input ref = 'names' @keyup = 'logName'></input>
      <span>{{ name }}</span>
      <label>年龄：</label>
      <input v-model = 'ages'>{{ ages }}</input>

      <h2>示例1</h2>
      <div class = 'span' :class = "{ changeColor: ischangeColors}" @click = 'changeColors'>
        <span>herry {{ ischangeColor }}</span>
      </div>
      
      <h2>示例2</h2>
      <button @click = 'changeColors'>changeColor</button>
      <button @click = 'changeLengths'>changeLength</button>
      <div class = 'span' :class = "compClass">
      <span>herry颜色{{ ischangeColor }}长度{{ ischangeLength }}</span>
      </div>

      <h2>v-if</h2>
      <button @click = 'changeColors'>error</button>
      <button @click = 'changeLengths'>success</button>
      <p v-if = 'ischangeColor'>网络连接错误 404</p>
      <p v-else-if = 'ischangeLength'>网络连接成功 404</p>

</div>
</template>

<script>
export default {
// Vue.component('introduce',{
  // template:'<p>大家好，给大家介绍一下我自己</p>'
  // data： function(){
    // name:'zhangjiaojiao'
  // }
// }),
data() {
    return{
    title: 'hello vuejs!',
    subTitle: 'vue Reate Angular is good!',
    showSub: false,
    myTodo: '',
    name: '',
    ages: '',
    age: 30,
    baiduurl:'www.baidu.com',
    baidu: "<a href = 'www.baidu.com'>baifuWeb</a>",
    x:0,
    y:0,
    todos: [
      {text: '吃饭', done: false},
      {text: '睡觉', done: false},
      {text: '写代码', done: false}],
    ischangeColor: false,
    ischangeLength: false
    }
  },
  computed: {//计算属性
    remain () {
      return this.todos.filter(v => !v.done).length
    },
    compClass:function() {
      return {
        changeColor: this.ischangeColor,
        changeLength: this.ischangeLength
      }
    }
  },
  methods: {
    clickInfo () {
      this.todos.push({text: this.myTodo, done: false})
    },
    changeDone (index) {
      this.todos[index].done = !this.todos[index].done
    },
    clearInfo () {
      this.todos = this.todos.filter(v => !v.done)
    },
    add (inc) {
      this.age+=inc;
    },
    subscribe (dec) {
      this.age-=dec;
    },
    updatexy(event) {
      // console.log(event);
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    // stopMoving (event) {
    //   event.stopPropagation();
    // },
    logName () {
      this.name = this.$refs.names.value;
    },
    changeColors (){
      return this.ischangeColor = !this.ischangeColor;
    },
    changeLengths(){
      return this.ischangeLength = !this.ischangeLength;
    }
  }
}
</script>
<style>
  li.done{
    text-decoration: line-through;
    color: red
  }
  #canvas {
    width : 600px;
    padding: 200px 20px;
    text-align: center;
    border: 1px solid #333;
  }
  .span {
    background-color: red;
    display: inline-block;
    padding: 10px;
    color: #fff;
    margin: 10px, 0px;
  }
  .changeColor{
    background-color: green;
  }
  .changeLength {
    content: "length";
    margin-left: 10px;
  }
</style>