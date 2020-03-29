import { ADDMOVIE_URL } from "constants/index";
import axios from 'axios';

var url = ADDMOVIE_URL;

export const addMoviePost = (user) => {
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
