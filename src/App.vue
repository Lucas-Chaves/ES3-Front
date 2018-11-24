<template>
  <div id="app">
    <div id='links'>
      <router-link to="/">home</router-link>
      <router-link to="/login">login</router-link>
      <router-link to="/funcionario">funcionario</router-link>
      <router-link to='/servico'>servico</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
