import React, { useState , useEffect} from 'react'
import { Link, withRouter } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import { signup, clearError } from 'actions/signup/signup';
import Select from 'react-select';
import {LOGIN, DASHBOARD} from 'constants/index';
import 'components/SignUpComponent/signup.css';


function Signup(props) {
    
    let signupError = useSelector(state => state.auth.error);

    const [confirm_password, setConfirmPassword] = useState("");
    const [password_error, setPasswordError] = useState("");
    const [signup_success, setSignUpSuccess] = useState(false);
    const [selectedOption, setSelectedOption] = useState({ value: 1, label: 'Male'});
    const [state, setState] = useState({
        email: "",
        password: "",
        first_name: "",
        last_name: ""
    });
    const options = [

        { value: 1, label: 'Male' },
        { value: 2, label: 'Female' }

    ]
    const handleChange = event => {
        setSelectedOption({
            value: event.value,
            label: event.label
        })
    };
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
    const confirmPasswordInput = (e) => {
        setConfirmPassword(e.target.value);
        if (state.password !== e.target.value) {
            setPasswordError("Passwords not matching");
        }
        else {
            setPasswordError("");
        }
    };
    const signupSubmit = (e) => {
        e.preventDefault();
        if (password_error === "") {
            const user = {
                email: state.email,
                first_name: state.first_name,
                last_name: state.last_name,
                password: state.password,
                gender :selectedOption.value
            };
            props.signup(user);
        }
    };
    if((signupError===false) && !signup_success) {
        setSignUpSuccess(true);
        props.clearError();
    }


    return (
        <div className="signup-component" >
            <div className="form-component" >
            { !signup_success &&
            <form className="signup-form" onSubmit={signupSubmit}>
                <label className="label">First Name:</label>
                <input
                    type="text"
                    name="first_name"
                    value={state.first_name}
                    onChange={onInputChange}
                    placeholder="First Name"
                    required
                />
                 <label className="label">Last Name:</label>
                <input
                    type="text"
                    name="last_name"
                    value={state.last_name}
                    onChange={onInputChange}
                    placeholder="Last Name"
                    required
                />
                <label className="label">Email:</label>
                <input
                    type="email"
                    name="email"
                    value={state.email}
                    onChange={onInputChange}
                    placeholder="Email"
                    required
                />
                <label className="label">Gender:</label>
                <Select
                    name="Gender"
                    placeholder="Gender"
                    searchable={false}
                    value={selectedOption}
                    onChange={handleChange}
                    options={options}
                />
                <label className="label">Password:</label>
                <input
                    input="password"
                    name="password"
                    value={state.password}
                    onChange={onInputChange}
                    placeholder="Password"
                />
                <label className="label">Confirm Password:</label>
                <input
                    type="password"
                    name="confirm_password"
                    value={confirm_password}
                    onChange={confirmPasswordInput}
                    placeholder="Confirm password"
                    required
                />
                {password_error}
                {signupError}
                <input className="button"
                    type="submit"
                    value="Sign Up"

                />
            </form>
            
}
{ signup_success &&
   <div>
   <p>We've sent a verification link to your email id.</p>
   <p>click the link to verify</p>
   </div>

}
<Link className="Login-Link" to={LOGIN}>Login as Existing user</Link>
<Link className="home-Link" to={DASHBOARD}>HOME</Link>
            </div>
  </div>


    )
}

export default connect(null, { signup, clearError })(withRouter(Signup));
