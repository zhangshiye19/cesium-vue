<script lang="ts">

import CMap from "@/map/CMap";
import {onMounted} from "vue";

export default {
  setup() {

    onMounted(()=>{
      CMap.getInstance()
    })

    return {

    }
  }
}

</script>

<template>
  <div id="cesiumContainer" style="height: 100%; width: 100%">
  </div>
</template>

<style scoped>

</style>