<script lang="ts">

import MapContainer from "@/components/MapContainer/MapContainer.vue";

export default {
  components: {MapContainer},
  data() {
    return {
      // viewer: Cesium.Viewer
    };
  },
  mounted() {
    // this.viewer = CMap.getInstance().viewer
  }
}

</script>

<template>
  <!-- <Map></Map> -->
  <div style="width: 100%;height: 100%;">
    <!--    <OLMapContainer />-->
    <MapContainer/>
  </div>
</template>

<style scoped>

/* .container {
  height: 100%;
  width: 100%;
} */

/* .logo {
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
} */
</style>
