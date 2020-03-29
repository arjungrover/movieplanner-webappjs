import React , {useEffect, useState } from 'react';
import {getMovieDetails, clearError} from 'actions/getmoviesaction';
import { connect, useSelector } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import 'components/dashboardcomponent/dashboard.css';
import {GET_SHOW} from 'constants/index';


function Dashboard(props) {
    
    useEffect(() => {
        props.getMovieDetails();

    }, [])
    const moviesList = useSelector(state => state.moviesList.moviesList);
    const entermovie = (id) => {
        props.history.push(`${GET_SHOW}${id}`);
    }

    return (
         <div>
         {moviesList &&  moviesList.map(movies =>{
            return(
          
                <div className="movieinfo" key={movies.name} onClick={() => entermovie(movies.id)} >
                    <p>Movie Name: {movies.name}</p>
                    <p>Story Line : {movies.description}</p>
                    <p>Duration : {movies.run_time}</p>
                    <p>Buffer : {movies.buffer}</p>
                </div>
            )
        })}
        </div>

    )
}
export default connect(null, { getMovieDetails, clearError })(withRouter(Dashboard));
