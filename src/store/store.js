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
        currentPage: "FirstTabCont"
    },
    mutations: {
        setCurrentPage(state, payload) {
            payload.targetIndex === 0 ? (state.currentPage = "FirstTabCont") : (state.currentPage = "SecTabCont")
        }
    }
});
