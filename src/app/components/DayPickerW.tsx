import React, {Component} from 'react';
import DayPicker from 'react-day-picker';
import onClickOutside from 'react-onclickoutside';
import {momentObjToStr} from '../functions'
import moment, { Moment } from 'moment'

import 'react-day-picker/lib/style.css';
import { ChangeDate } from '../types.js';
import { HandleClick } from '../../general/types/index.js';

interface IProps {
   changeDate:ChangeDate
   dueDate: Moment
   notKey: string
   hideDisplay: VoidFunction
}

class DayPickerW extends Component<IProps> {

   handleDayClick = (dateObj:Date) => {
      const newDueDate : Moment = moment(dateObj)
      this.props.changeDate(newDueDate)
   }
   handleClickOutside : HandleClick = () => {
      this.props.hideDisplay()
   }
   render (){
      const dateObj = this.props.dueDate.toDate()

      return (
         <div className="day-picker-w">
            <DayPicker
               onDayClick={this.handleDayClick}
               selectedDays={dateObj}
            />
         </div>
       );
}

  }


export default onClickOutside(DayPickerW)
