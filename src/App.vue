<template>
  <div id="app">
    <MenuHeader/>
    <router-view/>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import MenuHeader from "@/components/MenuHeader.vue";

@Component({
  components: {
    MenuHeader
  }
})

export default class App extends Vue {

  headerCreate() {
    let href = window.location.href;
    if (href.search("pay")) {
      return false;
    }
    return true
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
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
