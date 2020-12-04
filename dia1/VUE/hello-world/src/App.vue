<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1 >{{titulo}}</h1>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <MisTareas subtitulo="Ingrese su tarea"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MisTareas from './components/MisTareas.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    MisTareas
  },
  data() {
    return{
      titulo: 'Tareas con VUE'
    }
  }
}
</script>

<style scoped>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
