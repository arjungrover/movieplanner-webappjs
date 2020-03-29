import { ADDSHOW_URL } from "constants/index";
import axios from 'axios';

var url = ADDSHOW_URL;

export const addShowPost = (user) => {
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
