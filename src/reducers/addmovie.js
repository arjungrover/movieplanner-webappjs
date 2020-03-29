import { CREATE_BAD_REQUEST, SAVE_MOVIE, CLEAR_ADDMOVIE_ERROR} from "constants/index";

const initialState = {
    user: null, 
    error: null
}

export const addmovie = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_MOVIE:
            return {
                ...state,
                error: false
            }
        case CREATE_BAD_REQUEST:
            return {
                ...state,
                user: action.payload['name'],
                error: true
            }
        case CLEAR_ADDMOVIE_ERROR:
                return {
                    ...state,
                    error: null,
                }
        default:
            return state;
    }
}
