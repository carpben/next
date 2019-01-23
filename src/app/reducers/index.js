import { combineReducers } from 'redux'
import notifications from './notifications'
import user from './user'
import display from './display'
import other from "./other"

const nextApp = combineReducers({
  notifications,
  user,
  display, 
  other
})

export default nextApp
