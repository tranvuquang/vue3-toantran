<script>
import NavBar from "./components/NavBar.vue";
export default {
  name: "App",
  components: { NavBar },
  data() {
    return {};
  },
  methods: {},
};
</script>

<template>
  <div id="app">
    <h1>this is app</h1>
    <NavBar />
    <hr />
    <router-view></router-view>
  </div>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
