import Vue from 'vue';
import Vuex from 'vuex';
//示例login使用，请自行修改
import Login from './modules/login';
import BreakCrumbs from './modules/breakcrumbs';
Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
  	login: Login,
  	breakcrumbs: BreakCrumbs
  }
})

export default store