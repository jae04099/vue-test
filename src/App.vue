<template>
  <v-app>
    <v-container fluid style="padding: 0">
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
      <v-tabs-items v-model="tab">
        <v-tab-item transition='none'>
          <keep-alive>
            <component v-bind:is="this.$store.state.currentPage" ></component>
          </keep-alive>
        </v-tab-item>
        <v-tab-item transition='none'>
          <keep-alive>
            <component v-bind:is="this.$store.state.currentPage" ></component>
          </keep-alive>
        </v-tab-item>
      </v-tabs-items>
    </v-container>
  </v-app>
</template>

<script>
import FirstTabCont from "./components/FirstTabCont";
import SecTabCont from "./components/SecTabCont";
export default {
  components: {
    FirstTabCont,
    SecTabCont,
  },
  methods: {
    clickedTab: function (e) {
      this.$store.commit("setCurrentPage", {
        targetIndex: e.target.tabIndex,
      });
    },
  },
  data() {
    return {
      tab: null,
      items: [
        { tab: "메뉴1", content: "FirstTabCont" },
        { tab: "메뉴2", content: "SecTabCont" },
      ],
    };
  },
};
</script>

<style scoped>
section {
  height: 100%;
}
</style>
