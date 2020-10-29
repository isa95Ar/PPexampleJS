import {SET_USER_NAME, SET_USER_PICTURE, SET_USER_TOKEN} from "../constants/action-types";

export function setUserName(payload){
    return {
        type: SET_USER_NAME,
        payload
    };
};

export function setPicture(payload){
    return {
        type: SET_USER_PICTURE,
        payload
    };
};

export function setToken(payload){
    return {
        type: SET_USER_TOKEN,
        payload
    };
};