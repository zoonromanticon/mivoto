// LogInButton if the user hasn't authenticated, renders a button that if clicked calls the login auth0 function.
// If authenticated, PoliticalForm is rendered, which is very much the backbone of the whole project's data flow 

import React, { Component } from 'react';
import {PoliticalForm} from '../Components/PoliticalForm';
import { Button } from 'react-bootstrap';

export class LogInButton extends Component {
  login() {
    this.props.auth.login();
  }
  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div style={{padding:'0%',}} className="container">
        {
          isAuthenticated() && (
              <PoliticalForm auth={this.props.auth}/>
          )
        }
        {
          !isAuthenticated() && (
            <div style={{textAlign:'center'}}>
              <h3>
                {/* ¡No has iniciado sesión! Por favor,{' '} */}
                <Button
                  bsStyle="info"
                  bsSize="large"
                  // className="btn btn-outline-danger btn-margin"
                  style={{ cursor: 'pointer', textDecoration: 'underline' }}
                  onClick={this.login.bind(this)}
                >
                  Inicia sesión
                </Button>
              </h3>
            </div>
          )
        }
      </div>
    );
  }
}

export default LogInButton;
