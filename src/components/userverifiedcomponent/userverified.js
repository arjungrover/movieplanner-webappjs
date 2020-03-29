import React, { useEffect } from 'react'
import { connect, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { verifyToken } from 'actions/verifytoken';
import {DASHBOARD, SIGNUP} from 'constants/index';


export function UserVerified(props) {

    const userVerified = useSelector(state => state.verified.user);
    const userNotVerified = useSelector(state => state.verified.error);

    useEffect(() => {
        props.verifyToken(props.match.params.token);
    }, [])

    let message = "Verifying the user...";

    let description = "";

    if (userVerified) {
        message = userVerified.message;
        description = (
            <Link to={DASHBOARD}>HOME</Link>
        )
    }

    if (userNotVerified) {
        message = userNotVerified.error;
        description = (
            <div >
                Please enter correct link or <Link to={SIGNUP}>Signup</Link>
            </div>
        );
    }
    return (
        <div>
           {message}
            {description}
        </div>
       
    )
}

export default connect(null, { verifyToken })(withRouter(UserVerified));
