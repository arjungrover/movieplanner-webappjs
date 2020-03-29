import { GET_SHOW_DETAILS, GET_SHOW_DETAILS_ERROR, CLEAR_SHOW_DETAILS_ERROR } from "constants/index";
import { getShows } from "services/getShows";

export const getShowDetails = (id) => dispatch => {
    return getShows(id)
    .then(res => {
        dispatch({
            type: GET_SHOW_DETAILS,
            payload: res.data
        })
    })
    .catch(err => {
        if(err.response) {
            dispatch({
                type: GET_SHOW_DETAILS_ERROR,
                payload: err.response
            })
        }
    })
}

export const clearError = () => dispatch => {
    dispatch({
        type: CLEAR_SHOW_DETAILS_ERROR
    })
}
