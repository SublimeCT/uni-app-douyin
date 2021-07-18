import Vue from 'vue'
import App from './App.vue'
import store from '@/store'
import uView from 'uview-ui'

Vue.config.productionTip = false

Vue.use(uView)

new App({store}).$mount()
