import { combineReducers } from "redux";
import { signUp  } from "reducers/signUp";
import {login} from "reducers/login";
import {addmovie} from "reducers/addmovie";
import {verify} from "reducers/verify";
import {getAllMovies} from 'reducers/getmovies';
import {getShows} from 'reducers/getshows';
import {getUserDetails} from 'reducers/getUserdetails';
import {addshow} from 'reducers/addshow';

const AllReducers = combineReducers({
    auth: signUp , 
    login: login,
    addmovie: addmovie,
    verified: verify,
    moviesList: getAllMovies,
    showsList: getShows,
    user: getUserDetails,
    addshow: addshow,
    
});

export default AllReducers;
