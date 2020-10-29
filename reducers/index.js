import {SET_USER_NAME, SET_USER_PICTURE, SET_USER_TOKEN} from "../constants/action-types";

const initialState = {
    userName: "",
    picture: "",
    token: ""
};

function rootReducer(state = initialState, action){
    switch (action.type){
        case SET_USER_NAME:
            return {
                ...state,
                userName: action.payload
            };
        case SET_USER_PICTURE:
            return {
                ...state,
                picture: action.payload
            };
        case SET_USER_TOKEN:
            return {
                ...state,
                token: action.payload
            };
        default: return state;
    };
};

export default rootReducer;