<template>
<v-app>
      <v-container fluid style="padding: 0;">
          <v-tabs v-model="tab" align-with-title>
            <v-tab v-for="(item, index) in items" :key="index">
              {{ item.tab }}
            </v-tab>
          </v-tabs>
          <v-tabs-items v-model="tab">
            <v-tab-item v-for="(item, index) in items" :key="index">
              <component v-bind:is="item.content"></component>
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
