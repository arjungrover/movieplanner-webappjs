import { GET_MOVIE_DETAILS, GET_MOVIE_DETAILS_ERROR, CLEAR_MOVIE_DETAILS_ERROR } from "constants/index";
import { getAllMovies } from "services/getAllMovies";

export const getMovieDetails = () => dispatch => {
    return getAllMovies()
    .then(res => {
        dispatch({
            type: GET_MOVIE_DETAILS,
            payload: res.data
        })
    })
    .catch(err => {
        if(err.response) {
            dispatch({
                type: GET_MOVIE_DETAILS_ERROR,
                payload: err.response
            })
        }
    })
}

export const clearError = () => dispatch => {
    dispatch({
        type: CLEAR_MOVIE_DETAILS_ERROR
    })
}
