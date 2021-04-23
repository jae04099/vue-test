<template>
  <div class="contentWrap" @click="snackbar = true">
    <VueGallery />
    <Snackbar />
  </div>
</template>
<script>
import VueGallery from "./Gallery";
import Snackbar from './Snackbar.vue';
export default {
  name: "SecTabCont",
  components: { VueGallery, Snackbar },
};
</script>
<style scoped>
.contentWrap {
  display: flex;
  align-items: center;
  height: 92vh;
}
</style>