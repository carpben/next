import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import nextApp from './app/reducers'
import AppContainer from './app/containers/AppContainer.js'
import thunkMiddleware from 'redux-thunk'
import moment from "moment"
import {setNewHour,createUserState} from "./app/actions/index"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(nextApp, composeEnhancers(applyMiddleware(thunkMiddleware)));

render(
	<Provider store={store}>
		<AppContainer />
	</Provider>,
	document.getElementById('root')
)

const currentMinutes = moment().minutes()
const msLeft = (60 - currentMinutes) * 60 * 1000

const dispatchNewHour = () => {
	console.log("dispatchNewHour")	
	store.dispatch(setNewHour)
}

const onFirstNewHour = () => {
	dispatchNewHour()
	setInterval( dispatchNewHour, 60*60*1000 )
}

setTimeout(
	onFirstNewHour,
	msLeft
)

setInterval(
	() => store.dispatch(createUserState)
	, 600000
) 

