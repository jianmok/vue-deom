<template>
<div>
    <p>{{ title }}</p>
    <p v-if='showSub'>{{ subTitle }}</p>
    <input @keyup.enter = 'clickInfo' type= 'text' v-model='myTodo'>
    <button @click = 'clickInfo'>添加</button>
    <button @click = 'clearInfo'>清除</button>
    <ul>
      <li :class="{'done':todo.done}" @click='changeDone(index)' v-for='(todo,index) in todos'>{{ index+1 }}:{{ todo.text }}</li>
    </ul>
    <p>{{ remain }}/{{ todos.length }}</p>
</div>
</template>

<script>
export default {
data() {
    return{
    title: 'hello vuejs!',
    subTitle: 'vue Reate Angular is good!',
    showSub: false,
    myTodo: '',
    todos: [
      {text: '吃饭', done: false},
      {text: '睡觉', done: false},
      {text: '写代码', done: false}]
    }
  },
  computed: {
    remain () {
      return this.todos.filter(v => !v.done).length
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
    }
  }
}
</script>
<style>
  li.done{
    text-decoration: line-through;
    color: red
  }
</style>