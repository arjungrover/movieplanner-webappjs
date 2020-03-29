import React , {useEffect} from 'react';
import { Link, withRouter } from 'react-router-dom';
import { DASHBOARD, LOGIN, SIGNUP, ADDSHOW, ADD_MOVIES } from 'constants/index';
import { connect, useSelector } from 'react-redux';
import { logout, clearError } from 'actions/logout';
import { getUserDetails } from 'actions/getUserDetails';
import "components/navbarcomponent/navbar.css";

function NavbarComponent(props) {
    
    useEffect(() => {
       props.clearError();
       props.getUserDetails();
        
    }, [])
    
    let loggedInError = useSelector(state => state.user.error);
    
    const logout = () => {
        props.logout();
    }

    return (
        <div className="navbar-component">
            <div className="navbar-elements">
                <div>
                    {loggedInError===false &&
                        <div className="navigation-items">
                            <span onClick={logout}>LOGOUT</span>
                            <Link className="home" to={DASHBOARD}>HOME</Link>
                            <Link className="addmovie" to={ADD_MOVIES}>ADDMOVIES</Link>
                            <Link className="addshow" to={ADDSHOW}>ADDSHOW</Link>
                        </div>
                    }
                    {loggedInError===true &&
                        <div className="navigation-items">
                            <Link to={SIGNUP}><span className="nav-signup nav-items">SIGN UP</span></Link>
                            <Link to={LOGIN}><span className="nav-login nav-items">LOGIN</span></Link>
                        </div>
                    }
                </div>

            </div>
        </div>
    )
}

export default connect(null, { logout, clearError, getUserDetails })(withRouter(NavbarComponent));
