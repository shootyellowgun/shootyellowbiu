import Vue from 'vue'

import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        num: 1
    },
    mutations: {
        add(state) {
            state.num++;
        },
        addN(state, n) {
            state.num += n
        }
    },
    actions: {
        addAsync(context) {
            setTimeout(() => {
                context.commit('add')
            }, 1000)
        },
        addAsyncn(context, n) {
            setTimeout(() => {
                context.commit('addN', n)
            }, 1000)
        }
    },
    getters: {
        getNum: (state) => {
            return '当前最新的数量是[' + state.num + ']'
        }
    }
})
export default store;