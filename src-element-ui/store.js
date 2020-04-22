import Vue from 'vue'

import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        // cararr: JSON.parse(localStorage.getItem('cararr') || '[]'),
        myobj: JSON.parse(localStorage.getItem('myobj') || '{}')


    },
    mutations: {
        getchange(state, o) {
            state.myobj = o
            localStorage.setItem('myobj', JSON.stringify(state.myobj));
        }

    }
})
// store.subscribe((mutations, state) => {
//     // 每次执行完mutations中的函数后，该subscribe函数会被自动执行
//     //   把更新后的state  本地保存一下
//     // console.log(JSON.stringify(state.cartArr))
//     localStorage.setItem('myobj', JSON.stringify(state.myobj));
// })
export default store;
