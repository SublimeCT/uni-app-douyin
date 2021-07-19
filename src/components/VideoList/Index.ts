import { Video } from '@/models/Video'
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class IndexPage extends Vue {
    videos: Array<Video> = []
    mounted() {
        this.init()
    }
    async init() {
        console.log('??')
        const res = await this.$u.get(
            'https://www.douyin.com/aweme/v1/web/aweme/related/?device_platform=webapp&aid=6383&channel=channel_pc_web&aweme_id=6978038232470605070&count=20&filterGids=6978038232470605070&version_code=160100&version_name=16.1.0&cookie_enabled=true&screen_width=1920&screen_height=1080&browser_language=zh-CN&browser_platform=MacIntel&browser_name=Mozilla&browser_version=5.0+(Macintosh%3B+Intel+Mac+OS+X+10_15_7)+AppleWebKit%2F537.36+(KHTML,+like+Gecko)+Chrome%2F91.0.4472.114+Safari%2F537.36&browser_online=true',
            {},
        ).catch((err: any) => err)
        this.videos = Video.getVideos()
        console.log(this.videos)
    }
}
