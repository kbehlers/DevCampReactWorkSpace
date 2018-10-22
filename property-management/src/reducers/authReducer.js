import {
    AUTHENTICATE_USER
} from '../actions/types';

const INITIAL_STATE = {
    user: [],
    authenticated: false
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case AUTHENTICATE_USER:
        const {user} = action.payload;
            return {
                ...state,
                user: user
            }
    
        default:
            return state;
    }
}