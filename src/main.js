import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import comp from './utils/globalComp.js'
import page from './utils/globalPage.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import less from 'less'

import 'bpmn-js/dist/assets/diagram-js.css'
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn.css'
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-codes.css'
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css'
Vue.use(less)
Vue.use(ElementUI)

Vue.use(comp)
Vue.use(page)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
