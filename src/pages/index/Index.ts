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
}
