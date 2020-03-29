const BASE_URL = 'http://127.0.0.1:8000/'
export const SIGNUP_URL = `${BASE_URL}signup/`;
export const LOGIN_URL = `${BASE_URL}login/`;
export const VERIFY_EMAIL = `${BASE_URL}verify/?token=`;
export const ADDMOVIE_URL = `${BASE_URL}add-movies/`;
export const GET_ALL_MOVIES_URL = `${BASE_URL}get-movies/`;
export const GET_SHOWS_URL = `${BASE_URL}get-shows/?id=`;
export const GET_USER_DETAILS_URL = `${BASE_URL}get-user/`;
export const ADDSHOW_URL = `${BASE_URL}add-shows/`;

export const GET_SHOW = '/getshows/';

export const VERIFY = `/verify/:token`;
export const GET_SHOWS = `/getshows/:id`;
export const LOGIN = '/login';
export const SIGNUP = '/signup';
export const ADD_MOVIES='/addmovies';
export const DASHBOARD='/';
export const ADDSHOW='/addshow';

export const SIGNUP_BAD_REQUEST = 'SIGNUP_BAD_REQUEST';
export const VERIFY_TOKEN = 'VERIFY_TOKEN';
export const SAVE_USER = 'SAVE_USER';
export const CLEAR_LOGIN_ERROR = 'CLEAR_LOGIN_ERROR';
export const CLEAR_SIGNUP_ERROR = 'CLEAR_SIGNUP_ERROR';
export const CLEAR_ADDMOVIE_ERROR = 'CLEAR_ADDMOVIE_ERROR';
export const BAD_REQUEST = 'BAD_REQUEST';
export const FETCH_USER = 'FETCH_USER';
export const CREATE_BAD_REQUEST = 'CREATE_BAD_REQUEST';
export const SAVE_MOVIE = 'SAVE_MOVIE';
export const VERIFY_BAD_REQUEST = 'VERIFY_BAD_REQUEST';
export const GET_MOVIE_DETAILS = 'GET_MOVIE_DETAILS';
export const GET_MOVIE_DETAILS_ERROR = 'GET_MOVIE_DETAILS_ERROR';
export const CLEAR_MOVIE_DETAILS_ERROR = 'CLEAR_MOVIE_DETAILS_ERROR';
export const GET_SHOW_DETAILS = 'GET_SHOW_DETAILS';
export const GET_SHOW_DETAILS_ERROR = 'GET_SHOW_DETAILS_ERROR';
export const CLEAR_SHOW_DETAILS_ERROR = 'CLEAR_SHOW_DETAILS_ERROR';
export const GET_USER_DETAILS = 'GET_USER_DETAILS';
export const GET_USER_DETAILS_ERROR = 'GET_USER_DETAILS_ERROR';
export const CLEAR_USER_DETAILS_ERROR = 'CLEAR_USER_DETAILS_ERROR';
export const SAVE_SHOW = 'SAVE_SHOW';
export const CLEAR_SAVESHOW_ERROR = 'CLEAR_SAVESHOW_ERROR';

export const MONDAY = 'MONDAY';
export const TUESDAY = 'TUESDAY';
export const WEDNESDAY = 'WEDNESDAY';
export const THURSDAY = 'THURSDAY';
export const FRIDAY = 'FRIDAY';
export const SATURDAY = 'SATURDAY';
export const SUNDAY = 'SUNDAY';

export const COOKIE_MAX_AGE = 60*60*24*2;
