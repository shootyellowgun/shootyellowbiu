import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        mylist: [{ name: "你把爱还给我 高安", id: 1 },
        { name: "李白", id: 2 },
        { name: "放个大招给你看", id: 3 },
        { name: "话语原创十大金曲", id: 4 }],
        n: 99,
        songs: [],
        music: {
            mp3: '',
            img: 'https://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg'
        },
        list: [],
        play: false
    },
    mutations: {
        mychange(state, name) {
            state.n++
            state.mylist.forEach((item, index) => {
                if (item.name == name) {
                    state.mylist.splice(index, 1)
                }
            })
            var o = {
                id: state.n,
                name: name
            }
            state.mylist.unshift(o)

        },
        getsongs(state, arr) {
            state.songs = arr
        },
        getmusic(state, o) {
            state.music = o
            state.list.forEach((item, index) => {
                if (item.mp3 == o.mp3) {
                    state.list.splice(index, 1)
                }
            })
            state.list.push(o)
        },
        gettrue(state) {
            state.play = true
        },
        getfalse(state) {
            state.play = false
        },
        setmusic(state, o) {
            state.music = o
        }
    }
})
export default store;