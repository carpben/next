import { Moment } from "moment";

export const dateStrToInt = (str:string) => parseInt(str.replace(/-/gi,""),10)
export const momentObjToStr = (moment:Moment) => moment.format("YYYY-MM-DD HH")
