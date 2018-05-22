import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import './App.css';
import {LandingPage} from './Components/LandingPage';
import ReactTooltip from 'react-tooltip'

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

            <Button
              data-tip data-for='global'
              bsStyle="primary"
              className="btn btn-outline-success btn-margin">
              Versiones
            </Button> 
            <ReactTooltip className="tooltip" id='global' place='bottom' type="warning">
              {/* <p>Versiones</p> */}
              <ul>
                <li>Versión alpha 0.1: “MVP Release”. 09/05/18. Cuestionario funcional, resultados porcentuales y compartir en redes sociales</li>
                <li>Update alpha 0.2: 13/05/18. Mejora a errores en el cuestionario, se corrigió un problema que no permitía registrarse a algunos usuarios</li>
                <li>Update alpha 0.3: 17/05/18. Se añadió landing page, se añadió resultado de mayor y menor afinidad por candidato</li>
                <li>Update alpha 0.4: 19/05/18. Se añadió la opción de preguntar a los candidatos preguntas recomendadas para el debate ciudadano el próximo 21 de junio; se corrigieron bugs</li>
              </ul>
            </ReactTooltip>
            </Navbar.Header>

        </Navbar>

        {!isAuthenticated() && <div><LandingPage auth={this.props.auth}/></div>}
      </div>
    );
  }
}

export default App;
