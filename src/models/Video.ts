import { BaseModel } from "./BaseModel";
import rawVideos from '@/static/videos.json'
import { plainToClass } from "class-transformer";

export class Video extends BaseModel {
    public video: string = ''
    public cover: string = ''
    public title: string = ''
    public avatar: string = ''
    public nickname: string = ''
    public digg_count: number = 1
    public comment_count: number = 1
    public duration: number = 1
    static getVideos(randomMin: number = 0.75): Array<Video> {
        return rawVideos
            .filter(v => Math.random() > randomMin)
            .map(v => plainToClass(Video, v))
    }
}
