import React, { useState , useEffect} from 'react';
import Select from 'react-select'
import { withRouter } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import { addshow , clearError} from 'actions/addshowaction';
import {getMovieDetails} from 'actions/getmoviesaction';
import DateTimePicker from 'react-datetime-picker';
import {DASHBOARD} from 'constants/index';
import "components/addshowcomponent/addshow.css";

function Addshows(props) {
    useEffect(() => {
       props.clearError();
    }, [])
    
    const isloggedinError = useSelector(state=> state.user.error);
    const loggeduser = useSelector(state=>state.user.user);
    let movieslist = useSelector(state => state.moviesList.moviesList);
    let createError = useSelector(state => state.addshow.user);
    const [ moviesName, setMoviesName ] = useState([]);
    const [selectedOption, setSelectedOption] = useState({value:"", label:""});
    const [seatState, setSeatState] = useState("0");
    const [error, seterror] = useState("");
    const [success, setSuccess] = useState(false);
    
    useEffect(()=>{
        if(!movieslist){
         props.getMovieDetails();
        }
    },[movieslist])
    
    useEffect(()=>{
        if(movieslist){
            let movies = []
        for(let i=0;i<movieslist.length;i++){
            movies.push({label :  movieslist[i].name, value: movieslist[i].id})    
        }
        setMoviesName(movies);
    }
    },[movieslist])

    const [dateState, setDateState] = useState(new Date());

    const inputChange = (e) => {
        e.persist();
        setSeatState(e.target.value);
    }
    
    const handleChange = (selecteditem) =>{
       setSelectedOption({
        value: selecteditem.value,
        label: selecteditem.label
    })

    }
    
    let timeval = "";
    const onChange = date => {
        setDateState(date);
    }

    const AddSubmit = (e) => {
        e.preventDefault();
        var str = dateState.toLocaleString();
        var arr = str.split(",");
        var str1 = arr[0];
        var ar = str1.split("/");
        var da = ar[2]+"-"+ar[1]+"-"+ar[0];
        var timearr = arr[1].split(":")
        timeval = timearr[0]+":"+timearr[1]
        const user = {
            movie: selectedOption.value,
            showdate: da+""+timeval,
            total_seats: seatState
           
        };
        if(user.movie.length==0){
         seterror("Please select Movie")
        }else {
        seterror("");
        props.clearError();
        props.addshow(user);
        }
    };
    
    return (
    <div className="form-component">
       {isloggedinError===false && loggeduser['is_admin'] && <form className="showmovies-form" onSubmit={AddSubmit}>
       <label className="label"> movie name:</label>
       <Select
        options={moviesName}
        onChange={handleChange}
        placeholder = "select movie" 
        displayValue="label"
        />
        <label className="label">DateTime:</label>
        <DateTimePicker
        onChange={onChange}
        value={dateState}
        disableClock
        minDate={new Date()}
        />
       <label className="label">Total Seats:</label>
       <input
        type="number"
        value={seatState}
        onChange={inputChange}
        />
        <input
         className="button"
         type="submit"
         value="Create"
         />
                  
        </form>
        
    }
    {createError}
    {error}
    
    {
         
     isloggedinError===true  && <p>Please LOGIN AS ADMIN   -_-</p>
    }  
    </div>
    
    );
}

export default connect(null, { addshow , clearError, getMovieDetails})(withRouter(Addshows));
