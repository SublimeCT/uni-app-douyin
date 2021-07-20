import { Vue, Component, Prop } from 'vue-property-decorator'
import AppTabbar from '@/components/AppTabbar/Index.vue'

@Component({
    components: {
        AppTabbar
    }
})
export default class IndexPage extends Vue {
    src: string = ''
    created() {
        /* #ifdef APP-PLUS */
        this.src = 'https://github.com/SublimeCT/uni-app-douyin'
        /* #endif */
        /* #ifndef APP-PLUS */
        this.src = 'https://www.uviewui.com/'
        /* #endif */
    }
}
