import React from 'react'
import NotificationRowContainer from '../containers/NotificationRowContainer.js'
import DISPLAY_MODES from '../CONSTS.js'
import PropTypes from 'prop-types';
import '../styles/NotificationTable.css'
import { css } from '@emotion/core';
import Box from '../../general/wrappers/Box';

interface IProps {
    notificationsToDisplay: string[], 
    addNewNotification:VoidFunction, 
    displayMode:number
}

const stl = css`
   border-collapse: collapse;
   background-color: white;
      th {
         border-bottom: 1px solid #555;
         font-size: 15px
      }
   .date-col {
      span {
         min-width: 70px;
         display: block
      }
   }

   .date3{
      text-align: center;
      font-size: 20px;
      color: #007;
      position: relative;
   }
   .date4{
      text-align: center;
      font-size: 20px;
      color: #007;

   }
   .day-picker-w {
      position: absolute;
      background-color: white;
      border: 5px solid #007;
      border-radius: 10px;
      top: -60px;
      right: -60px;
      z-index: 100;
      padding:12px;
   }
   .importance-column {
      padding-left: 10px;
      padding-right: 10px;
      >div {
         width: 100px;

      }
   }
   input {
      border: none;
   }
   textarea {
      width: 100%;
      padding: 12px; 
      resize: none;
      border: none;
      &:focus {
          outline: 1px solid lightblue;
      }
   }
   .title-column {
      width: 33%;
   }
   .next-column {
      width: 33%;
   }
   .details-column {
      width: 33%;
   }
   .notification-remove {
      color: #700;
       text-align: center;
       font-size: 20px
   }
   .notification-remove:hover {
       color:#b00;
   }
   .notification-done {
       color: #070;
       text-align: center;
       font-size: 20px;
       &:hover, &.completed{
          color: #0b0;
       }
   }
   td{
      &.title-column, &.next-column, &.details-column {
         padding: 0;
      }
   }
`

class NotificationsTable extends React.PureComponent<IProps> {


    render(){
        const { notificationsToDisplay, displayMode } = this.props
        return (
            <Box stl={stl}>
                <table className="table NotificationsTable">
                    <thead>
                        <tr>
                            {displayMode !== DISPLAY_MODES.NEXT.val ? <th className="date-col">Date</th> : null}
                            <th className="title-column">Task / Reminder</th>
                            <th className="importance-column">Importance</th>
                            <th className="snooze-column"></th>
                            <th className="snooze-2-column"></th>
                            <th className="icon-1-column"></th>
                            <th className="icon-2-column"></th>
                            <th className="next-column">Info</th>
                            <th className="details-column">More Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {   
                            notificationsToDisplay.map(
                                (notKey:string) => <NotificationRowContainer notKey={notKey} key={notKey}/>
                            )
                        }
                    </tbody>
                </table>
            </Box>
        )
    }
}

export default NotificationsTable
