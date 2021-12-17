import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

export const store = new Vuex.Store({
    //variables y metodos de nivel global
    state:{
        valor:5,
        nombre:"Canela"
    }
})
