<template>
  <div class="app">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  components: {
    Navbar
  }

}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  overflow-x: hidden;
  max-width: 100%;
}

.app {
  background: #f8fafc;
  min-height: 100vh;
  padding: 0 0 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>