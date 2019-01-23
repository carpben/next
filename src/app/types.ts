import { Moment } from "moment";

export type ChangeDate = (newDueDate:Moment) => void 

export type HandleNotificationClick = <T>(x:T) => void