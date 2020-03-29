import { SIGNUP_BAD_REQUEST, SAVE_USER, CLEAR_SIGNUP_ERROR} from "constants/index";

const initialState = {
    user: null, 
    error: null
}

export const signUp = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_USER:
            return {
                ...state,
                user: action.payload,
                error: false
            }
        case SIGNUP_BAD_REQUEST: 
            return {
                ...state,
                error: action.payload
            }
        case CLEAR_SIGNUP_ERROR:
                return {
                    ...state,
                    error: null
                }
        default:
            return state;
    }
}
