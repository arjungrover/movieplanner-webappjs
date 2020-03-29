import React, { useState , useEffect} from 'react';
import TimePicker from 'react-time-picker';
import { Multiselect } from 'multiselect-react-dropdown';
import { Link, withRouter } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import { addmovie , clearError} from 'actions/addmoviesaction';
import Moment from 'react-moment';
import {ADDSHOW} from 'constants/index';

import 'components/addmoviescomponent/addmovies.css';

function Addmovies(props) {
    useEffect(() => {
       props.clearError();
    }, [])
    const loggedinError = useSelector(state=> state.user.error);
    const loggeduser = useSelector(state=>state.user.user);
    const create_error = useSelector(state => state.addmovie.error);
    const error_val = useSelector(state => state.addmovie.user);
    const[error, seterror] = useState("");
    const [create_success, setcreatesuccess] = useState(false);
    const [state, setState] = useState({
        name: "",
        description: "",
    });
    const [timestate, settimestate] = useState(new Moment("00:00"));
    const [bufferstate, setbufferstate] = useState("00:00");
    const options = [

        { value: 1, label: 'Action'},
        { value: 2, label: 'Adventure'},
        { value: 3, label: 'Comedy'},
        { value: 4, label: 'Crime'},
        { value: 5, label: 'Drama'},
        { value: 6, label: 'Historical'}

    ]
    let genreList = [];
    const onSelectOption = (selectedlist, selecteditem) => {
        genreList.push(selecteditem.value);
    }
    const onRemoveOption = (selectedlist, removeitem) => {
        let ind = genreList.indexOf(removeitem.value);
        genreList.splice(ind, 1);
    }

    const handleChange = time => {
        settimestate({time});
    }
    const bufferChange = time => {
        setbufferstate({ time })
    }
    const onInputChange = event => {
        event.persist();
        setState(state => ({
            ...state,
            [event.target.name]: event.target.value
        }))
    };
    const AddSubmit = (e) => {
        e.preventDefault();
        const user = {
            name: state.name,
            description: state.description,
            run_time: timestate['time'],
            buffer: bufferstate['time'],
            genre: genreList
        };
        if(user.name.length===0){
            seterror("Please enter Movie Name");
        }else if(user.description.length===0){
            seterror("Please enter Movie Description");
        }else if(typeof(user.run_time)=='undefined'){
            seterror("Please enter Duration");
        }else if(typeof(user.buffer)=='undefined'){
            seterror("Please enter Buffer");
        }else if(user.genre.length==0){
                seterror("Please enter Genres");}
        else{
            
            seterror("");
            props.addmovie(user);
        }
      
    };
    
    if(create_error===false && !create_success){
        setcreatesuccess(true);
        props.clearError();
        props.history.push(ADDSHOW);
    }

    return (
    <div className="form-component">
       {loggedinError==false && loggeduser['is_admin'] && <form className="addmovies-form" onSubmit={AddSubmit}>
            <label className="label">Movie Name:</label>
            <input
                type='text'
                name='name'
                placeholder='Name'
                value={state.name}
                onChange={onInputChange}
            />
            <label className="label">Description:</label>
            <input
                type='text'
                name='description'
                placeholder='Description'
                value={state.description}
                onChange={onInputChange}
            />
            <label className="label">Duration:</label>
            <TimePicker
                name="timestate"
                onChange={handleChange}
                disableClock
            />
            <label className="label">Buffer Time:</label>
            <TimePicker
                name="bufferstate"
                onChange={bufferChange}
                disableClock
            />
            <label className="label">Genres:</label>
            <Multiselect
                options={options}
                onSelect={onSelectOption}
                onRemove={onRemoveOption}
                placeholder="Select Genres"
                displayValue="label"
            />
            <input className="button"
                type="submit"
                value="ADD"
            />
            {error_val}
            {error}
        </form>
}
{    
     loggedinError==true && <p>Please LOGIN AS ADMIN   -_-</p>

}    
    </div>
    
    );
}

export default connect(null, { addmovie, clearError })(withRouter(Addmovies));
