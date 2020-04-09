import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import comp from './components/index.js'
import page from './views/main-page/index.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

Vue.use(comp)
Vue.use(page)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: (h) => h(App)
}).$mount('#app')