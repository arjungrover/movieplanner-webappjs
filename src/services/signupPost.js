import { SIGNUP_URL } from "constants/index";
import axios from 'axios';

var url = SIGNUP_URL;

export const signupPost = (user) => {
    return axios.post(
        url,
        user,
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
}
