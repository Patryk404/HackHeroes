import * as actionTypes from '../actions/actionTypes';

const INITIAL_STATE = { 
    logged: false,
    token: null,
    update: false
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
                ...state,
                logged: false,
                token: null
            };
        }
        case actionTypes.UPDATE_COMPONENT_ABLE:{
            return {
                ...state,
                update: true
            }; 
        }
        case actionTypes.UPDATE_COMPONENT_DISABLE:{
            return {
                ...state,
                update: false
            }
        }
        default: {
            return state
        }
    }
}

export default authReducer;