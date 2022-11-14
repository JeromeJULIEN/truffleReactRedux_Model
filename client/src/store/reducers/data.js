import {  SET_VALUE } from "../actions";

export const initialState = {
    value:666
};


const dataReducer = (state = initialState,action={}) =>{
    switch(action.type){
        case SET_VALUE:{
            return {
                ...state,
                value:action.payload
            }
        }
        default:
            return state;
        }
    }
    
export default dataReducer;