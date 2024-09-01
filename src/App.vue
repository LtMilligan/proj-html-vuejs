<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppMain,
    AppFooter
  }
}
</script>

<template>
  <div id="app">
    <AppHeader />
    <AppMain />
    <AppFooter />
  </div>
</template>

<style>
body {
  margin: 0;
  font-family: "Oxanium", sans-serif;
  background-color: #000;
}
</style>
