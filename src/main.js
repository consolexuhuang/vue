import Vue from 'vue'
import App from './App.vue'

import VueRouter from "vue-router";
Vue.use(VueRouter);

import routes from "./router.config";
const router = new VueRouter(routes);

import loading from "./loading";
Vue.use(loading)

import axios from "axios";
// Vue.use(axios);
Vue.prototype.$http = axios;
// axios.defaults.withCredentials=true 

import filters from "./filters";
// Vue.filter("name",fn)
for(var key in filters){
  key == "data"|"fillzero";
  Vue.filter(key,filters[key]);
}


new Vue({
  el: '#app',
  data:{
    bheader: true,
    bfooter: true,
    bloading:false,
  },
  // mounted(){
  //   console.log(this.bfooter)
  // },
  render: h => h(App),
  router
})
