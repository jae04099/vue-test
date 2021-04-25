<template>
  <div>
    <gallery
      :images="this.$store.state.gallery.images"
      :index="index"
      @close="index = null"
    ></gallery>
    <div class="imgWrap">
      <div
        class="image"
        v-for="(image, imageIndex) in this.$store.state.gallery.images"
        :key="imageIndex"
        @click="index = imageIndex"
        :style="{
          backgroundImage: 'url(' + image + ')',
          width: '110px',
          height: '130px',
        }"
      ></div>
    </div>
  </div>
</template>

<script>
import VueGallery from "vue-gallery";

export default {
  name: "SecTabCont",
  data: function () {
    return {
      index: null,
    };
  },
  components: {
    gallery: VueGallery,
  },
};
</script> 

<style scoped>
.imgWrap {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
}
.image {
  background-size: cover;
  flex-basis: calc(30%);
  margin: 0.7rem;
  cursor: pointer;
}
</style>