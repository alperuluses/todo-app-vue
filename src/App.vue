<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <TodoList title="TODOS" />
</template>

<script>
import TodoList from './components/TodoList.vue';

export default {
  name: 'App',
  components: {
    TodoList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  background-color: #FAD6A5;
}

.d-flex {
  display: flex;
}

.justify-content-center {
  justify-content: center;
}

.justify-content-between {
  justify-content: space-between;
}

.align-items-center {
  align-items: center
}

.flex-column {
  flex-direction: column;
}

.m-10 {
  margin: 10px;
}

.mx-10 {
  margin-left: 10px !important;
  margin-right: 10px !important;
}

.my-10 {
  margin-top: 10px !important;
  margin-bottom: 10px !important;
}

.text-decoration-overline {
  text-decoration: line-through;
  opacity: 0.8;
}
</style>
