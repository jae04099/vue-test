
// 탭 메뉴와 탭 선택에 따라 store에서 컴포넌트를 렌더링 합니다.

<template>
  <v-app>
    <v-container class="pa-0">
      <v-tabs v-model="tab" align-with-title>
        <v-tab
          v-on:click="clickedTab"
          v-for="(item, index) in this.$store.state.tabs"
          :key="index"
          :tabindex="index"
        >
          {{ item.tabKind }}
        </v-tab>
      </v-tabs>
      <keep-alive>
        <component v-bind:is="this.$store.state.currentPage"></component>
      </keep-alive>
    </v-container>
  </v-app>
</template>

<script>
import FirstTabCont from "./FirstTabCont";
import SecTabCont from "./SecTabCont";

export default {
  components: {
    FirstTabCont,
    SecTabCont,
  },
  data() {
    return {
      tab: null,
    };
  },
  methods: {
    clickedTab: function (e) {
      this.$store.commit("setCurrentPage", {
        targetIndex: e.target.tabIndex,
      });
    },
  },
};
</script>

<style scoped>
section {
  height: 100%;
  transition: all 0.3s ease-out;
}

</style>
