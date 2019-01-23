import React, {Component} from 'react';
import DayPickerW from './DayPickerW.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import styled from '@emotion/styled'
import WithToolTip from '../../general/wrappers/WithTooltip';
import css from '@emotion/css';
import Box from '../../general/wrappers/Box';
import { Moment } from 'moment';
import { HandleClick } from '../../general/types/index.js';
import Btn from '../../general/wrappers/Btn';
// @ts-ignore

const PossibleHours = Array.from(Array(24).keys()).map( (_, i) => i )

// const Box = styled.div`

// `


interface IProps{
   changeTime: (h:number) => void
   dueDate: Moment
}

interface IState { displayTimePicker: boolean }

class Time extends Component<IProps, IState > {
   state = { displayTimePicker: false }
   showDisplay = () => {
      this.setState({displayTimePicker:true})
   }
   hideDisplay = () => {
      this.setState({displayTimePicker:false})
   }
	
   changeTime : HandleClick = 
      (e) => {
         this.setState({displayTimePicker:false})
         e && this.props.changeTime(Number(e.currentTarget.getAttribute("data-time")))
      }

   render () {
      const dueHour = this.props.dueDate.hour()
      return (
         <Box onMouseEnter={this.showDisplay} onMouseLeave={this.hideDisplay} stl={css`
            text-align: center;
            font-size: 20px;
            color: brown;
            position: relative;
         `}>
               <WithToolTip
                  mode={this.state.displayTimePicker? 1 : 2}

                  tooltipChild={(
                     <Box stl={css`
                        display:flex;
                        flex-wrap:wrap; 
                        justify-content: space-around; 
                        width: 200px;
                        background-color: rgba(0,0,0,0.9); 
                        padding: 20px; 
                        border-radius:10px; 
                        .time-btn {
                           flex-basis:24%;  
                           &:hover {
                              color: white; 
                           }
                           &.is-duen-hour {
                              color:white;
                           }
                        }
                     `}>
                        {PossibleHours.map( pH => (
                              <Btn key={pH} data-time={pH} className={`time-btn ${(dueHour===pH)? "is-duen-hour time-btn" : undefined}`} handleClick={this.changeTime} >{pH}</Btn> 
                           ))}
                     </Box>
                  )}
               > 
                  <FontAwesomeIcon icon={faClock} />
               </WithToolTip>
         </Box>)
   }
}


export default Time
