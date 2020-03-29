import React , {useEffect, useState } from 'react';
import {getShowDetails, clearError} from '../../actions/getshowsaction';
import { connect, useSelector } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY }from 'constants/index';
import "components/showdetailcomponent/showdetail.css";


function ShowDetail(props) {
    
    useEffect(() => {
        props.getShowDetails(props.match.params.id);
    }, [])

    const showsList = useSelector(state => state.showsList.showsList);
    const entershow = (movie,show) => {
        props.history.push(`/bookshow/?movie=${movie}/?show=${show}`);
    }

    return (
         <div>
         {showsList &&  showsList.map(shows =>{
            let availabe_seats = shows.total_seats-shows.booked_seats;
            let status = (availabe_seats > 0) ? "AVAILABLE" : "HOUSEFULL";
            var dt = new Date(shows.showdate)
            var weekday = new Array(7);
            weekday[0] = "Sunday";
            weekday[1] = "Monday";
            weekday[2] = "Tuesday";
            weekday[3] = "Wednesday";
            weekday[4] = "Thursday";
            weekday[5] = "Friday";
            weekday[6] = "Saturday";
            let show_date = shows.showdate.replace("T"," ")
            show_date = show_date.replace("Z"," ")
             return(
                <div className="showinfo" key={shows.name} onClick={() => entershow(shows.movie,shows.id)} >
                    <h6>{status}</h6>
                    <p>Show Day: {weekday[dt.getDay()]}</p>
                    <p>Show Time: {show_date} </p>
                    <p>Total Seats: {shows.total_seats}</p>
                    <p>Available Seats: {availabe_seats}</p>
                </div>
            )
        })}
        </div>
    )
}
export default connect(null, {getShowDetails, clearError })(withRouter(ShowDetail));
