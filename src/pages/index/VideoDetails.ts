import { Video } from '@/models/Video'
import AppTabbar from '@/components/AppTabbar/Index.vue'
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
    components: { AppTabbar }
})
export default class IndexPage extends Vue {
    video: Video = new Video()
    created() {
        this.video = Video.getVideo(this.$store.state.app.video)
        console.log(this.video, this.video.title)
    }
    onOpen(v: Video) {
        plus.runtime.openURL(v.video)
    }
}
