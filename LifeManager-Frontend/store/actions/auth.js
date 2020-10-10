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