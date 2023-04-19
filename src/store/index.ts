import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        token: ""
    },
    getters: {
        getToken(state) {
            return localStorage.getItem("token") || "";
        },
        delToken(){
            localStorage.removeItem("token");
        }
    },
    mutations: {
        setToken(state, token) {
            state.token = token;
            localStorage.setItem('token', token);
            console.log('store、localstorage保存token成功！');
        },
        delToken(state) {
            state.token = "";
            localStorage.removeItem("token");
        }
    },
    actions: {},
    modules: {}
})

export default store