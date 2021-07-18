import { Vue, Component, Prop } from 'vue-property-decorator'
import AppTabbar from '@/components/AppTabbar/Index.vue'

@Component({
    components: { AppTabbar }
})
export default class IndexPage extends Vue {
}
