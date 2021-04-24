<template>
  <div>
    <gallery :images="images" :index="index" @close="index = null"></gallery>
    <div class="imgWrap">
      <div
        class="image"
        v-for="(image, imageIndex) in images"
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
      images: [
        "https://picsum.photos/id/1/200/300",
        "https://picsum.photos/id/20/200/300",
        "https://picsum.photos/id/310/200/300",
        "https://picsum.photos/id/520/200/300",
        "https://picsum.photos/id/55/200/300",
        "https://picsum.photos/id/60/200/300",
      ],
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