import Vue from 'vue'

import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        cararr: JSON.parse(localStorage.getItem('cararr') || '[]'),
        // cararr:[]
        myinformations: JSON.parse(localStorage.getItem('cararr') || '{}')
    },
    mutations: {
        getmyobj(state, obj) {
            state.cararr.push(obj)
            localStorage.setItem('cararr', JSON.stringify(state.cararr));
        },
        addo(state, obj) {
            state.myinformations = obj
            localStorage.setItem('myinformations', JSON.stringify(state.myinformations))
        },
        getnumadd(state, { index, obj }) {
            state.cararr[index].num += obj.num;
            localStorage.setItem('cararr', JSON.stringify(state.cararr));
        },
        getsub(state, index) {
            state.cararr[index].num--;
            localStorage.setItem('cararr', JSON.stringify(state.cararr));
        },
        getadd(state, index) {
            state.cararr[index].num++;
            localStorage.setItem('cararr', JSON.stringify(state.cararr));
        },
        getback(state, index) {
            state.cararr[index].flag = !state.cararr[index].flag
            localStorage.setItem('cararr', JSON.stringify(state.cararr));
        },
        getchange(state, v) {
            state.cararr.forEach(item => {
                item.flag = v;
            });
            localStorage.setItem('cararr', JSON.stringify(state.cararr));
        },
        getshow(state, index) {
            state.cararr[index].fuck = !state.cararr[index].fuck
            localStorage.setItem('cararr', JSON.stringify(state.cararr));
        },
        del(state, i) {
            state.cararr.splice(i, 1)
            localStorage.setItem('cararr', JSON.stringify(state.cararr));
        }
    },
    actions: {
        getnewobj(context, obj) {
            const index = context.state.cararr.findIndex(item => {
                // console.log(item)
                return obj.id == item.id && obj.userid == item.userid
            })
            if (index < 0) {
                context.commit("getmyobj", obj);
            } else {
                context.commit('getnumadd', { index, obj })
            }
        },
        getmysub(context, index) {
            if (context.state.cararr[index].num > 1) {
                context.commit('getsub', index)
            }
        }
    }
})

export default store;
