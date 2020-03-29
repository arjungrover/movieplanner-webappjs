import { GET_USER_DETAILS, GET_USER_DETAILS_ERROR, CLEAR_USER_DETAILS_ERROR } from "constants/index"

const initialState = {
    user: null,
    error: null,
}

export const getUserDetails = (state=initialState, action) => {
    switch(action.type) {
        case GET_USER_DETAILS:
            return {
                ...state,
                user: action.payload,
                error: false
            }
        case GET_USER_DETAILS_ERROR:
            return {
                ...state,
                error: true
            }
        case CLEAR_USER_DETAILS_ERROR:
            return {
                ...state,
                error: null
            }
        default: 
            return state
    }
}
