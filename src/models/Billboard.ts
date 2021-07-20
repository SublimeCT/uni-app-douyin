import { BaseModel } from "./BaseModel";
import rawBillboard from '@/static/billboard.json'
import { plainToClass } from "class-transformer";

export class Billboard extends BaseModel {
    billboard_id: string = ''
    hot_value: string = ''
    get $hot_value(): string {
        return parseInt((Number(this.hot_value) / 10000).toString()) + 'w'
    }
    rank: number = 0
    title: string = ''
    static getBillBoards(): Array<Billboard> {
        return rawBillboard.map(b => plainToClass(Billboard, b))
    }
}