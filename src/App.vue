<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
import * as Cesium from 'cesium'
import { onMounted, ref } from 'vue'

const container = ref<any>('container')
onMounted(() => {
  const viewer = new Cesium.Viewer('cesiumContainer',{
    infoBox: false
  })
  // console.log(viewer)
})

</script>

<template>
  <!-- <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" /> -->
  <div id="cesiumContainer" class="container" ref="container">
  </div>
</template>

<style scoped>

.container {
  height: 100%;
  widows: 100%;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
