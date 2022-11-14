import { combineReducers } from "redux";


import dataReducer from "./data";
import web3Reducer from "./web3";


const rootReducer = combineReducers({
    web3 : web3Reducer,
    data: dataReducer
});

export default rootReducer;