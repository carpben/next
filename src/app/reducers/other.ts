import { AnyAction } from "redux";
import moment from "moment"
import { DR } from "../../general/types";
import { momentObjToStr } from "../functions";

// import Reducer from 

interface IState {
	nowStr: string 
}

const initialState :IState = {
	nowStr:  momentObjToStr(moment())
}

const other : (st:DR<IState|undefined>, action:AnyAction) => IState|undefined = 
	(state:IState =initialState, action) => {
		if (action.type==="NEW_HOUR"){
			console.log("New Hour")
			return {nowStr: momentObjToStr(moment())}
		}
		return state 
	}

export default other