import { BaseModel } from "./BaseModel";
import rawVideos from '@/static/videos.json'
import { plainToClass } from "class-transformer";

export class Video extends BaseModel {
    public video: string = ''
    public cover: string = ''
    public title: string = ''
    public avatar: string = ''
    public nickname: string = ''
    /** 点赞数 */
    public digg_count: number = 1
    /** 用于显示的点赞数(w) */
    get $digg_count(): string {
        return (this.digg_count / 10000).toFixed(2) + 'w'
    }
    /** 评论数 */
    public comment_count: number = 1
    /** 时长 */
    public duration: number = 1
    /** 用于显示的视频时长 */
    get $duration(): string {
        return BaseModel.toolkit.formateSeconds(parseInt((this.duration / 1000).toString()))
    }
    static getVideos(randomMin: number = 0.75): Array<Video> {
        return rawVideos
            .filter(v => Math.random() > randomMin)
            .map(v => plainToClass(Video, v))
    }
}
