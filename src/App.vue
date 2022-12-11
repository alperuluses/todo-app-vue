<template>
  <toast-use position="top-right" />
  <img alt="Vue logo" src="./assets/logo.png">
  <TodoList title="TODOS" />
</template>

<script>
import TodoList from './components/TodoList.vue';
export default {
  name: 'App',
  components: {
    TodoList
  },
}
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  padding-top: 60px;
  width: 100%;
  height: 100%;
}

body {
  background: url(https://images.unsplash.com/photo-1548222606-6c4f581fd09d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2097&q=80) no-repeat center center / cover, linear-gradient(320deg, #00223c, #000e18, #000000);
  width: 100%;
  min-height: 100vh;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;
  font-family: 'Roboto', sans-serif !important;
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
