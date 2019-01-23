import React, {Component} from 'react';
import DayPickerW from './DayPickerW';
import PropTypes from 'prop-types';
import { Moment } from 'moment';
import { ChangeDate } from '../types.js';



interface IProps {
   dueDate:Moment,
   changeDate:ChangeDate,
   notKey:string
}

interface IState {
   displayDayPicker:boolean
}


class Date3 extends Component<IProps, IState>{
   state = {
      displayDayPicker: false
   }
   showDisplay = () => {
      this.setState({displayDayPicker:true})
   }
   hideDisplay = () => {
      this.setState({displayDayPicker:false})
   }
   changeDate : ChangeDate = (newDueDate) => {
      this.setState({displayDayPicker:false})
      this.props.changeDate(newDueDate)
   }

   render () {
      const dayIcon = <span > <i className="fa fa-calendar" aria-hidden="true"></i> </span>
      return (
         <div className="date3" onMouseEnter={this.showDisplay} onMouseLeave={this.hideDisplay}>
            {dayIcon}
            {this.state.displayDayPicker?
               <DayPickerW changeDate={this.changeDate} notKey={this.props.notKey} dueDate={this.props.dueDate} hideDisplay={this.hideDisplay}  
                  // className="day-picker-w" 
               /> : ""
            }
         </div>)
   }
}


export default Date3
