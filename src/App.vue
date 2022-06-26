<template>
  <div class="app" id="app">  
    <header>
      <Vheader />
    </header>

    <router-view class="content"></router-view>
  </div>
</template>

<script>
import Vheader from "@/components/V-header.vue"

export default {
  name: 'App',
  components: {
    Vheader
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: none;
  margin: none;
  background-color: #1F1F1F;
}

html {
  overflow: hidden;
}

html, body {
  margin: 0;
  padding: 0;
}

::-webkit-scrollbar {
  width: 0;
}

.router-link-active {
  color: #808191;
}

.content {
  width: 100%;
  min-width: 320px;
  max-width: 1000px;

  margin: 0 auto;

  height: 100%;
  min-height: 100vh;

  background-color: #1A1A1A;
  border-top: solid 2px rgba(228, 228, 228, 0.1);
}
</style>
