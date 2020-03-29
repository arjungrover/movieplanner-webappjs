import { GET_MOVIE_DETAILS, GET_MOVIE_DETAILS_ERROR, CLEAR_MOVIE_DETAILS_ERROR } from "constants/index";

const initialState = {
    moviesList: null,
    error: null
}


export const getAllMovies = (state = initialState, action) => {
    switch (action.type) {
        case GET_MOVIE_DETAILS:
            return {
                ...state,
                moviesList: action.payload,
                error: false
            }
        case GET_MOVIE_DETAILS_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case CLEAR_MOVIE_DETAILS_ERROR:
            return {
                ...state,
                error: null
            }
        default:
            return state
    }
}
