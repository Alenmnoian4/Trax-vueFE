<template>
  <mainpage></mainpage> 
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import MainPage from './components/mainfile/MainPage.vue';
export default {
  name: 'App',
  components: {
    MainPage,
    
  }
}
</script>

<style>
</style>

