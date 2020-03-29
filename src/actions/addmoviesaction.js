import { CREATE_BAD_REQUEST, SAVE_MOVIE, CLEAR_ADDMOVIE_ERROR } from "constants/index";
import { addMoviePost } from "services/addmoviePost";

export const addmovie = (user) => dispatch =>{
    return addMoviePost(user)
    .then(res => {
        dispatch({
            type: SAVE_MOVIE,
            payload: res.data 
        });
    })
    .catch(err => {
        if(err.response){
            dispatch({
                type: CREATE_BAD_REQUEST,
                payload: err.response.data
            });
        }
    })
}

export const clearError = () => dispatch => {
    dispatch({
        type: CLEAR_ADDMOVIE_ERROR
    })
}
