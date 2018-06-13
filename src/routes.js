// routes.js defines a component that acts as the app's router. It handles auth's callback redirect.
// On '/' a route is defined to trigger a view composed of PageHeader, LogInButton (which acts as the body of the app)
// and Footer.

// TODO: Given how the template project from Auth0's website was structured, several changes were made to adapt
// it to our needs. Unfortunately this meant that some questionable design choices were made due to time constrains.
// Two stand out: A) PageHeader acts as the header, but also renders the landing page if the user hasn't been 
// authenticated and B) LogInButton exposes a log in button but if the user has authenticated, it renders the poll.

import React from 'react';
import { Route, Router } from 'react-router-dom';
import PageHeader from './PageHeader';
import LogInButton from './Components/LogInButton';
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
          <Route path="/" render={(props) => <div ><PageHeader auth={auth} {...props} /><LogInButton auth={auth} {...props} /><br/><Footer/></div>} />
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} /> 
          }}/>
        </div>
      </Router>
  );
}
