import React, { useState, useEffect } from 'react';
import {  withRouter, Link } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import { login, clearError } from 'actions/loginaction';
import {SIGNUP, DASHBOARD, ADD_MOVIES} from 'constants/index';
import 'components/logincomponent/login.css';


function LoginComponent(props) {
    
    let loginerror = useSelector(state => state.login.error);
    const loginSuccess = useSelector(state => state.login.user);
   
    const [state, setState] = useState({
        email: "",
        password: "",
    });

    useEffect(() => {
        props.clearError();
    }, [])


    const onInputChange = event => {
        event.persist();
        setState(state => ({
            ...state,
            [event.target.name]: event.target.value
        }))
    };

    const loginSubmit = (e) => {
        e.preventDefault();
        const user =  {
            email: state.email,
            password: state.password
        };
        props.login(user);
    };

    const { email, password } = state;
    
    if(loginSuccess && loginerror === false) {
        if(loginSuccess['is_admin']){
            props.history.push(ADD_MOVIES);
        }else{
            props.history.push(DASHBOARD);
        }
       
    }
    
    return (
        
            <div className="form-component">
                <form className="login-form" onSubmit={loginSubmit}>
                    <label className="label">Email :</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={onInputChange}
                        placeholder="Email"
                        required
                    />
                    <label className="label">Password :</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={onInputChange}
                        placeholder="Password"
                        required
                    />
                    <input
                        type="submit"
                        value="Login"
                    />
                    {loginerror}
                </form>
                <Link className="Signup-Link" to={SIGNUP}>Signup as new user</Link>
                <Link className="home-Link" to={DASHBOARD}>Home</Link>
            </div>
        
    );
}

export default connect(null, { login, clearError })(withRouter(LoginComponent));
