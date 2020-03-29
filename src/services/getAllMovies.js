import axios from "axios";
import { GET_ALL_MOVIES_URL } from "constants/index";

export const getAllMovies = (token) => {
    const url = GET_ALL_MOVIES_URL;
    return axios.get(
        url,
        {
        headers :{
            'Content-Type' : 'application/json',
        }
        }
    )
}
