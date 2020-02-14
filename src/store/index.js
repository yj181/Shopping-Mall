import Vue from 'vue';
import Vuex from 'vuex';

import * as actions from './actions';
import * as mutations from './mutations';
import * as getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        goodsList:[],
        spikeList:[],
        countdown:{
            hours:0,
            minutes:0,
            seconds:0
        },
        quantity:0,
        shoppingList:[]
    },
    getters,
    actions,
    mutations
})