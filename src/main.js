import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from "./routers/routes"
import vuetify from './plugins/vuetify';
import {store} from "./store/store"

Vue.use(VueRouter);

Vue.config.productionTip = false

const router = new VueRouter({
  //rutas
  routes,
  mode:"history"
})
new Vue({
  render: h => h(App),
  vuetify,
  router,
  store
}).$mount('#app')
