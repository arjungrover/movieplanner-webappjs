import { logoutService } from "services/logoutService"
import { GET_USER_DETAILS_ERROR, CLEAR_USER_DETAILS_ERROR } from "constants/index";

export const logout = () => dispatch => {
    logoutService();
    dispatch({
        type: GET_USER_DETAILS_ERROR
    })
}
export const clearError = () => dispatch => {
    dispatch({
        type: CLEAR_USER_DETAILS_ERROR
    })
}