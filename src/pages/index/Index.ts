import { Vue, Component, Prop } from 'vue-property-decorator'
import { Config } from '@/models/Config'
import AppTabbar from '@/components/AppTabbar/Index.vue'
import VideoList from '@/components/VideoList/Index.vue'

@Component({
    components: { AppTabbar, VideoList }
})
export default class IndexPage extends Vue {
    Config = Config
    title: string = 'hello uni-app'
    query: string = ''
    navigatorConfig: object = {
        title: 'hello nui_modules'
    }
    onSearch() {
        uni.showToast({
            title: this.query,
            icon: 'none',
            mask: true,
            position: 'bottom',
        })
        uni.navigateTo({ url: '/pages/explor/Explor' })
    }
    onPullDownRefresh() {
        (this.$refs.videos as any).init()
        setTimeout(() => {
            uni.stopPullDownRefresh()
        }, 700);
    }
    onClickHeaderIcon() {
        // #ifdef APP-PLUS
        plus.runtime.openURL(
            'https://www.douyin.com/',
            err => {
                uni.showToast({
                    title: 'err: ' + err,
                    icon: 'error',
                    mask: true
                })
            },
        )
        // #endif
        // #ifndef APP-PLUS
        uni.showToast({
            title: '哎呦, 好疼',
            icon: 'success',
            mask: true
        })
        // #endif
    }
}
