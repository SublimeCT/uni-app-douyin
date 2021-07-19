// common/http.interceptor.js

import Vue from "vue";
import { Config } from "./Config";

// 这里的Vue为Vue对象(非创建出来的实例)，vm为main.js中“Vue.use(httpInterceptor, app)”这一句的第二个参数，
// 为一个Vue的实例，也即每个页面的"this"
// 如果需要了解这个install方法是什么，请移步：https://uviewui.com/components/vueUse.html
const install = (vue: typeof Vue, vm: Vue) => {
    // 此为自定义配置参数，具体参数见上方说明
    vue.prototype.$u.http.setConfig(Config.HTTP_CONFIG);
    // 请求拦截部分，如配置，每次请求前都会执行
    vue.prototype.$u.http.interceptor.request = (config: UniApp.RequestOptions) => {
        (config.data as any)._signature = 'xxxxxxxxxxx'
        // // 可以对某个url进行特别处理，此url参数为this.$u.get(url)中的url值
        // if (config.url == '/user/login') config.header.noToken = true;
        // 最后需要将config进行return
        return config;
        // 如果return一个false值，则会取消本次请求
        // if(config.url == '/user/rest') return false; // 取消某次请求
    }
    // 响应拦截，如配置，每次请求结束都会执行本方法
    vue.prototype.$u.http.interceptor.response = (res: UniApp.RequestSuccessCallbackResult['data']) => {
        // if (res.code == 200) {
        //     // res为服务端返回值，可能有code，result等字段
        //     // 这里对res.result进行返回，将会在this.$u.post(url).then(res => {})的then回调中的res的到
        //     // 如果配置了originalData为true，请留意这里的返回值
        //     return res.result;
        // } else if (res.code == 201) {
        //     // 假设201为token失效，这里跳转登录
        //     vm.$u.toast('验证失败，请重新登录');
        //     setTimeout(() => {
        //         // 此为uView的方法，详见路由相关文档
        //         vm.$u.route('/pages/user/login')
        //     }, 1500)
        //     return false;
        // } else {
        //     // 如果返回false，则会调用Promise的reject回调，
        //     // 并将进入this.$u.post(url).then().catch(res=>{})的catch回调中，res为服务端的返回值
        //     return false;
        // }
        return res
    }
}

export default {
    install
}