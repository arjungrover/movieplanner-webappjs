import { VERIFY_TOKEN, VERIFY_BAD_REQUEST } from "constants/index";
import { verifyTokenAPI } from 'services/verifytokenAPI';

export const verifyToken = (token) => dispatch => {
    return verifyTokenAPI(token)
    .then(res => {
        dispatch({
            type: VERIFY_TOKEN,
            payload: res.data
        });
    })
    .catch(err => {
        if(err.response){
            dispatch({
                type: VERIFY_BAD_REQUEST,
                payload: err.response.data
            });
        }
    })
}
