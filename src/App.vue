<template>
  <div class="relative">
    <nav-bar></nav-bar>
    <statistics/>
  </div>
  <router-view></router-view>
</template>

<script>
import NavBar from './components/Menus/NavBar.vue'
import Statistics from './components/Statistics.vue'
export default {
  name: 'App',
  components: {
    NavBar,
    Statistics,
    // wallet
  }

}
</script>

<style>

</style>
