import React from 'react'
import TextareaAutosize from 'react-autosize-textarea';
import Date3 from './Date3'
import DISPLAY_MODES from '../CONSTS.js'
import moment, { Moment } from 'moment'
import PropTypes from 'prop-types';
import Time from './Time'
import { HandleClick } from '../../general/types';
// @ts-ignore
import ReactStars from 'react-stars'
import { HandleNotificationClick } from '../types';
import { changeDate } from '../actions';
import TextareaAutosizeW from './TextareaAutosizeW';
import { momentObjToStr } from '../functions';
 

type IsOfDateType = (today:Moment, dueDate:Moment) => boolean

const isToday : IsOfDateType = (today, dueDate) => dueDate.isSame(today, 'd');
const isYesterday : IsOfDateType = (today, dueDate) => dueDate.isSame(today.clone().subtract(1, 'days'), 'd');
const isTomorrow : IsOfDateType = (today, dueDate) => dueDate.clone().subtract(1, 'days').isSame(today, 'd');

interface IProps {
   dateStr:Moment,
   nowHourStr: Moment
   notKey:string,
   importance:number,
   title:string,
   nextAction:string,
   details:string,
   completed:boolean,
   toggleComplete:HandleClick,
   deleteNotification:HandleClick,
   editField:(fieldKey:string, value:string ) => void,
   changeDate:HandleNotificationClick,
   changeImportance:HandleNotificationClick,
   displayMode:number,
}

interface IState {
   title: string
}

class NotificationRow extends React.Component<IProps> {

   getHandleTimeChange : (today:Moment) => (h:number) => void = today => h => this.changeDate(today.hour(h))

   changeDate = (dueDate:Moment) => this.props.changeDate(momentObjToStr(dueDate))

   onStarValueChange = (newRating:number) => {this.props.changeImportance(newRating)}

   render (){
      const {notKey, importance, title, nextAction, details, completed, toggleComplete, deleteNotification,
         editField, displayMode, dateStr, nowHourStr} = this.props
     
      const nowHour = moment(nowHourStr)
      const dueDate = moment(dateStr)
      const notificationCompletedClass = completed? 'completed' : '' ;

      let dayStr = null
      if (isToday(nowHour,dueDate)){
         dayStr="Today"
      } else if (isTomorrow(nowHour,dueDate)){
         dayStr="Tomorrow"
      } else if (isYesterday(nowHour,dueDate)){
         dayStr="Yesterday"
      } else {
         dayStr=dueDate.format("MMM D")
      }
      return (
         <tr >
            {displayMode!==DISPLAY_MODES.NEXT.val? <td className="date-col"><span> {dayStr} </span></td> : null }
            <td className="title-column">
              <TextareaAutosizeW
                   val = {title}
                   editField={editField}
                   fieldKey="title"
              />
            </td>
            <td className="importance-column">
              <ReactStars count={5} size={20} color2={'#00b'} value={importance} onChange={this.onStarValueChange} />
            </td>
            <td  className="snooze-column">
               <Date3 dueDate={dueDate} notKey={notKey} changeDate={this.changeDate}/>
            </td>
            <td  className="snooze-2-column">
               <Time dueDate={dueDate} changeTime={this.getHandleTimeChange(nowHour)}/>
            </td>
          <td className="done-column"><span className={"notification-done glyphicon glyphicon-ok " + notificationCompletedClass } onClick={toggleComplete} ></span></td>
          <td><span className="remove-column notification-remove glyphicon glyphicon-remove" onClick={deleteNotification}></span></td>
           <td className="next-column">
              <TextareaAutosizeW
                 val = {nextAction}
                 editField ={editField}
                 fieldKey="nextAction"
              />
          </td>
          <td className="details-column">
               <TextareaAutosizeW
                  val = {details}
                  editField={editField}
                  fieldKey="details"
               />
          </td>
         </tr>
      )
   }
}


export default NotificationRow
