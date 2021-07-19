import Vue from 'vue'
import App from './App.vue'
import store from '@/store'
import uView from 'uview-ui'

Vue.config.productionTip = false
Vue.use(uView)

const app = new App({ store })

// 参考 `uview` 官方文档中的请求配置方式, refer: https://www.uviewui.com/js/http.html#%E9%85%8D%E7%BD%AE%E5%8F%82%E6%95%B0
// http拦截器，此为需要加入的内容，如果不是写在common目录，请自行修改引入路径
import httpInterceptor from '@/models/http.interceptor'
// 这里需要写在最后，是为了等Vue创建对象完成，引入"app"对象(也即页面的"this"实例)
Vue.use(httpInterceptor, app)

app.$mount()
