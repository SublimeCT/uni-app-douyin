import { Vue, Component, Prop } from 'vue-property-decorator'
import { Config } from '@/models/Config'
// import uTabbar from "uview-ui/components/u-tabbar/u-tabbar.vue"

@Component({
    // components: { uTabbar }
})
export default class IndexPage extends Vue {
    Config = Config
    mounted() {
        console.log(this.$store.state.app.tabBarList)
    }
}
