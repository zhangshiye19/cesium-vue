<script lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
import * as Cesium from 'cesium'
import CMap from "./map/cmap.ts";
// import { onMounted, ref } from 'vue'

// const container = ref<any>('container')
// onMounted(() => {
//   const viewer = new Cesium.Viewer('cesiumContainer',{
//     infoBox: false
//   })
//   // console.log(viewer)
// })

export default {
  data() {
    return {
        viewer: Cesium.Viewer
    }
  },
  mounted() {
    this.viewer = CMap.getInstance().viewer
  }
}

</script>

<template>
  <div id="cesiumContainer" class="container" ref="container">
  </div>
</template>

<style scoped>

.container {
  height: 100%;
  width: 100%;
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
