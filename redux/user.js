const SET_USER_NAME = "SET_USER_NAME";
const SET_USER_PICTURE = "SET_USER_PICTURE";
const SET_USER_TOKEN = "SET_USER_TOKEN";

const initialState = {
    userName: "TEST",
    picture: "",
    token: ""
}

export default function user(state = initialState, action = {}){
    switch(action.type){
        case SET_USER_NAME:
            return {
                ...state,
                userName: action.data
            };
        case SET_USER_PICTURE:
            return {
                ...state,
                picture: action.data.picture
            };
        case SET_USER_TOKEN:
            return {
                ...state,
                token: action.data.token
            };
        default:
            return state
    };
};

export function setUserName(text){
    
    return {
        type: SET_USER_NAME,
        data: text
    }
};

export function setPicture(picture){
    return {
        type: SET_USER_NAME,
        data: picture
    }
};

export function setToken(token){
    return {
        type: SET_USER_NAME,
        data: token
    }
};