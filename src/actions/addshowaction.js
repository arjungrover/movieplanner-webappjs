import { CREATE_BAD_REQUEST, SAVE_SHOW, CLEAR_SAVESHOW_ERROR } from "constants/index";
import { addShowPost } from "services/addshowPost";

export const addshow = (user) => dispatch =>{
    return addShowPost(user)
    .then(res => {
        dispatch({
            type: SAVE_SHOW,
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
        type: CLEAR_SAVESHOW_ERROR
    })
}
