import { connect } from 'react-redux'
import NotificationRow from '../components/NotificationRow'
import {deleteNotification, toggleComplete, editField, changeImportance, changeDate} from '../actions'

const mapStateToProps = (state,ownProps) => {
    const notification = state.notifications.store[ownProps.notKey]
    return {
        notKey: ownProps.notKey, 
        ...notification, 
        displayMode:state.display.displayMode,
        nowHourStr: state.other.nowStr
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const notKey = ownProps.notKey
    return ({
        toggleComplete: (completed) => dispatch(toggleComplete(notKey, completed)),
        deleteNotification: () => dispatch(deleteNotification(notKey)),
        editField: (field, text) => dispatch(editField(notKey,field,text)),
        changeImportance: (newImportanceValue) => dispatch(changeImportance(notKey, newImportanceValue)),
        changeDate: (newDueDate) =>{ 
            dispatch(changeDate(notKey,newDueDate))}
    })
}

const NotificationRowContainer = connect(mapStateToProps, mapDispatchToProps)(NotificationRow)

export default NotificationRowContainer
