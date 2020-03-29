import Axios from "axios";
import { VERIFY_EMAIL } from "constants/index";

export const verifyTokenAPI = (token) => {

    const url = VERIFY_EMAIL + token

    return Axios.get(
        url,
    )
}
