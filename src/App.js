import React, {useEffect} from 'react';
import { connect, useSelector } from 'react-redux';
import {BrowserRouter as Router,Switch,Route, Redirect} from 'react-router-dom';
import Signup from 'components/SignUpComponent/signup';
import login from 'components/logincomponent/login';
import Userverified from 'components/userverifiedcomponent/userverified';
import {VERIFY, LOGIN, SIGNUP, ADD_MOVIES, DASHBOARD, ADDSHOW} from 'constants/index';
import {GET_SHOWS} from 'constants/index';
import Addmovies from 'components/addmoviescomponent/addmovies';
import Dashboard from 'components/dashboardcomponent/dashboard';
import ShowDetail from 'components/showdetailcomponent/showdetail';
import NavbarComponent from 'components/navbarcomponent/navbar';
import PageNotFoundComponent from 'components/pagenotfoundcomponent/pagenotfound';
import Addshows from 'components/addshowcomponent/addshow';
import { getUserDetails } from 'actions/getUserDetails';

 
function App(props){
  
  useEffect(() => {
    props.getUserDetails();
  }, []);

  
  return(
    <Router>
      <NavbarComponent />
    <Switch>
    <Route exact path={SIGNUP} component = {Signup} />
    <Route exact path= {LOGIN} component = {login} />
    <Route exact path={VERIFY} component={Userverified} />
    <Route exact path={DASHBOARD} component ={Dashboard} />
    <Route exact path={ADD_MOVIES} component ={Addmovies} />
    <Route exact path={GET_SHOWS} component = {ShowDetail} />
    <Route exact path={ADDSHOW} component = {Addshows} /> 
    <Route component = {PageNotFoundComponent} />
    </Switch>
    </Router>
   
  );

}
export default  connect(null, { getUserDetails })(App);
