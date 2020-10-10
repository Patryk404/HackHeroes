import * as actionTypes from '../actions/actionTypes';

const INITIAL_STATE = { 
    logged: false,
    token: null
};

const authReducer = (state= INITIAL_STATE,action)=>{
    switch(action.type){
        case actionTypes.LOGIN_INTO:{
            return {
                ...state,
                logged: true,
                token: action.token
            }
        }
        case actionTypes.LOG_OUT:{
            return {
                logged: false,
                token: null
            };
        }
        default: {
            return state
        }
    }
}

export default authReducer;