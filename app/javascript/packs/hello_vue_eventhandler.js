import Vue from 'vue/dist/vue.esm'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.config.productionTip = false

const eventhandler = new Vue ({
  el: '#eventhandler',
  data: {
    message: 'hello'
  }
})