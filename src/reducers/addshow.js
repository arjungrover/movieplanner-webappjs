import { CREATE_BAD_REQUEST, SAVE_SHOW, CLEAR_SAVESHOW_ERROR} from "constants/index";

const initialState = {
    user: null, 
    error: null
}

export const addshow = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_SHOW:
            return {
                ...state,
                error: false
            }
        case CREATE_BAD_REQUEST:
            return {
                ...state,
                user: action.payload,
                error: true
            }
        case CLEAR_SAVESHOW_ERROR:
                return {
                    ...state,
                    error: null,
                }
        default:
            return state;
    }
}
