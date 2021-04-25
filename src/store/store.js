import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        tab: null,
        tabs: [
            { tabKind: "메뉴1" },
            { tabKind: "메뉴2" },
        ],
        currentPage: "FirstTabCont",
        gallery: {
            images: [
                "https://picsum.photos/id/1/200/300",
                "https://picsum.photos/id/20/200/300",
                "https://picsum.photos/id/310/200/300",
                "https://picsum.photos/id/520/200/300",
                "https://picsum.photos/id/55/200/300",
                "https://picsum.photos/id/60/200/300",
              ]
        }
    },
    mutations: {
        setCurrentPage(state, payload) {
            payload.targetIndex === 0 ? (state.currentPage = "FirstTabCont") : (state.currentPage = "SecTabCont")
        }
    }
});
