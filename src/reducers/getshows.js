import { GET_SHOW_DETAILS, GET_SHOW_DETAILS_ERROR, CLEAR_SHOW_DETAILS_ERROR } from "constants/index";

const initialState = {
    showsList: null,
    error: null
}


export const getShows = (state = initialState, action) => {
    switch (action.type) {
        case GET_SHOW_DETAILS:
            return {
                ...state,
                showsList: action.payload,
                error: false
            }
        case GET_SHOW_DETAILS_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case CLEAR_SHOW_DETAILS_ERROR:
            return {
                ...state,
                error: null
            }
        default:
            return state
    }
}
