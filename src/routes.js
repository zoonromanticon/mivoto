// routes.js defines a component that acts as the app's router. It handles auth's callback redirect.
// On '/' a route is defined to trigger a view composed of App, Home (which acts as the body of the app)
// and Footer

import React from 'react';
import { Route, Router } from 'react-router-dom';
import App from './App';
import Home from './Home/Home';
import Callback from './Callback/Callback';
import Auth from './Auth/Auth';
import history from './history';
import { Footer } from './Components/Footer'

const auth = new Auth();


const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {
  return (
      <Router history={history}>
        <div>
          <Route path="/" render={(props) => <div ><App auth={auth} {...props} /><Home auth={auth} {...props} /><br/><Footer/></div>} />
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} /> 
          }}/>
        </div>
      </Router>
  );
}
