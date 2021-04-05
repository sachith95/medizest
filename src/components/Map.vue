<template>
  <AzureMap :center="[-122.33, 47.6]" :zoom="12" class="azure-map" />
</template>

<script>
import { AzureMap } from "vue-azure-maps";

export default {
  components: {
    AzureMap,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.azure-map {
  width: 100%;
  height: 100%;
}
</style>
