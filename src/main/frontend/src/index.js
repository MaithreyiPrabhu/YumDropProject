import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LoginPage from "./LoginPage";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { Route, BrowserRouter as Router} from 'react-router-dom';
import LoginDashBoard from "./LoginDashboard";
import OTPpage from "./OTPpage";
import errorPageForRegistration from "./errorPageForRegistration";
import MySettingsPage from "./MySettingsPage";
import OTPResetPassword from "./OTPResetPassword";
import ResetPassword from "./ResetPassword";
import loginErrorPAge from "./loginErrorPAge";
import SuccessfulRegistration from './SuccessfulRegistration';
import Home from './Home';
import MyCurrentLocation from "./MyCurrentLocation";
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

const initialState = {
    latitude: null,
    longitude: null
}

const reducer = (state=initialState, action) => {

    if(action.type==="setLocation"){
        return {latitude: action.newLatitude, longitude: action.newLongitude}
    }

    return state;
}

const store = createStore(reducer)

const routing = (

    <Provider store={store}>
        <Router>
            <div>
                <Route exact path="/Home" component={Home} />
                <Route path="/LoginPage" component={LoginPage} />
                <Route path="/LoginForm" component={LoginForm} />
                <Route path="/RegisterForm" component={RegisterForm}/>
                <Route path="/LoginDashBoard" component={LoginDashBoard}/>
                <Route path="/OTPpage" component={OTPpage}/>
                <Route path="/errorPageForRegistration" component={errorPageForRegistration} />
                <Route path="/MySettingsPage" component={MySettingsPage}/>
                <Route path="/OTPResetPassword" component={OTPResetPassword}/>
                <Route path="/ResetPassword" component={ResetPassword}/>
                <Route path="/loginErrorPAge" component={loginErrorPAge} />
                <Route path="/SuccessfulRegistration" component={SuccessfulRegistration} />
                <Route path="/" component={MyCurrentLocation}/>
            </div>
        </Router>
    </Provider>

)

ReactDOM.render(routing, document.getElementById('root'));