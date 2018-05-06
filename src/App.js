import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import './App.css';

class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div>
        <Navbar fluid>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">mivoto.io</a>
            </Navbar.Brand>
            <Button
              bsStyle="success"
              className="btn btn-outline-success btn-margin"
              onClick={this.goTo.bind(this, 'home')}
            >
              
              Formulario
            </Button>
            {
              !isAuthenticated() && (
                  <Button
                    id="qsLoginBtn"
                    bsStyle="info"
                    className="btn btn-outline-info btn-margin"
                    onClick={this.login.bind(this)}
                  >
                    Iniciar Sesión
                  </Button>
                )
            }
            {
              isAuthenticated() && (
                  <Button
                    id="qsLogoutBtn"
                    bsStyle="danger"
                    className="btn btn-outline-danger btn-margin"
                    onClick={this.logout.bind(this)}
                  >
                    Salir
                  </Button>
                )
            }
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}

export default App;
