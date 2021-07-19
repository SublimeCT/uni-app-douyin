// 全局挂载引入http相关请求拦截插件
import http from '@/typings/uview/libs/request';

export class Config {
    static primaryColor: string = '#111'
    static primaryBackgroundColor: string = '#EAEAEA'
    static readonly HTTP_CONFIG: Omit<typeof http, 'interceptor' | 'setConfig' | 'request' | 'get' | 'post' | 'put' | 'delete'> = {
        config: {
            baseUrl: 'https://www.douyin.com',
            dataType: 'json',
            showLoading: true,
            loadingText: 'loading ...', // 请求loading中的文字提示
            loadingTime: 800, // 在此时间内，请求还没回来的话，就显示加载中动画，单位ms
            originalData: false, // 是否在拦截器中返回服务端的原始数据
            loadingMask: true, // 展示loading的时候，是否给一个透明的蒙层，防止触摸穿透
            // 配置请求头信息
            header: {
                "accept": "application/json, text/plain, */*",
                "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,mn;q=0.7,zh-TW;q=0.6,ko;q=0.5",
                "sec-ch-ua": "\" Not;A Brand\";v=\"98\", \"Google Chrome\";v=\"90\", \"Chromium\";v=\"90\"",
                "sec-ch-ua-mobile": "?0",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "withcredentials": "true"
            },
        },
        options: {
            url: 'https://www.douyin.com',
            withCredentials: true,
            timeout: 7000,
        }
    }
}
