import * as actionTypes from './actionTypes';

export const loggedInto= token =>{
    return {
        type: actionTypes.LOGIN_INTO,
        token: token
    }
};

export const logOut = () =>{
    return {
        type: actionTypes.LOG_OUT
    }
};

export const onUpdateComponent = ()=>{
    return {
        type: actionTypes.UPDATE_COMPONENT_ABLE
    }
};

export const offUpdateComponent = () =>{
    return {
        type: actionTypes.UPDATE_COMPONENT_DISABLE
    }
};