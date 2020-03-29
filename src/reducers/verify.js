import { VERIFY_BAD_REQUEST, VERIFY_TOKEN} from "constants/index";

const initialState = {
    user: null, 
    error: null
}

export const verify = (state = initialState, action) => {
    switch (action.type) {
        case VERIFY_BAD_REQUEST:
            return {
                ...state,
                error: action.payload
            }
        case VERIFY_TOKEN:
            return {
                    ...state,
                    user: action.payload,
                    error: false
                }
        default:
            return state;
    }
}
