import React, { Component } from 'react';
import {PoliticalForm} from '../Components/PoliticalForm';

class Home extends Component {
  login() {
    this.props.auth.login();
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    // console.log(this.props);
    //PlwO340192834
    return (
      <div style={{padding:'0%'}} className="container">
        {
          isAuthenticated() && (
              <PoliticalForm/>
            )
        }
        {
          !isAuthenticated() && (
              <h4>
                ¡No has iniciado sesión! Por favor,{' '}
                <a
                  style={{ cursor: 'pointer', textDecoration: 'underline' }}
                  onClick={this.login.bind(this)}
                >
                  Inicia sesión
                </a>
                {' '}para continuar.
              </h4>
            )
        }
      </div>
    );
  }
}

export default Home;
