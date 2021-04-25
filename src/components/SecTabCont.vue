<template>
  <div class="contentWrap" @click.self="snackbar = true">
    <VueGallery />
    <v-snackbar v-model="snackbar" :timeout="timeout">
      {{ text }}
      <template v-slot:action="{ attrs }">
        <v-btn color="red" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import VueGallery from "./Gallery";

export default {
  name: "SecTabCont",
  components: { VueGallery },
  data: () => ({
    snackbar: false,
    text: `바탕화면이 아닌 이미지를 누르세요.`,
    timeout: 3000,
  }),
  methods: {
    snackbarHandler: function () {
      console.log(this.snackbar);
    },
  },
  updated: function () {
    console.log(this.snackbar);
  },
};
</script>

<style scoped>
.contentWrap {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 92vh;
}
</style>