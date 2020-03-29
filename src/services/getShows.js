import axios from "axios";
import { GET_SHOWS_URL } from "constants/index";

export const getShows= (id) => {
    const url = GET_SHOWS_URL + id;
    return axios.get(
        url,
        {
        headers :{
            'Content-Type' : 'application/json',
        }
        }
    )
}
