import React from 'react';
import { Button, Modal } from 'react-bootstrap';

export class FAQ extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
  
      this.state = {
        show: false
      };
    }
  
    handleClose() {
      this.setState({ show: false });
    }
  
    handleShow() {
      this.setState({ show: true });
    }
  
    render() {
      return (
        <div style={{margin: '0 auto', textAlign:'center',display: 'table'}}>
          <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
            Más información
          </Button>
  
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Más información</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Una lógica distinta</h4>
              <p>
              MiVoto cambia la lógica de las campañas políticas: te ponemos a ti en el centro y te decimos qué tanto se alinea el candidato a tus prioridades y expectativas para el país. 
              </p>
  
              <hr />
  
              <h4>Preguntas Frecuentes</h4>
              
              <p>¿Cómo lo hicieron?</p>
              <p>
                La estructura de nuestro test privilegia las prioridades y posturas del usuario por sobre las del candidato: primero identificamos qué piensa el votante y qué considera importante y sólo después lo comparamos con lo que proponen los candidatos.
              </p>
             
              <p>¿En qué basaron su análisis?</p>
              <p>
                Para determinar qué proponen y piensan los candidatos consideramos diversas fuentes: las plataformas de los partidos registradas ante el INE, la encuesta Voto Informado 2018 realizada por la UNAM y las declaraciones públicas de los candidatos en diversos medios de comunicación.
              </p>

              <p>¿Cómo interpreto mis resultados?</p>
              <p>
                Los resultados se ordenan jerárquicamente, del candidato más afín al menos afín, mientras que los porcentajes reflejan la afinidad relativa con respecto a las posturas del usuario.
              </p>

              <p>¿Es ésta la última versión?</p>
              <p>
                No. De aquí al 1º de julio estaremos publicando mejoras a la herramienta, a tu experiencia de usuario y nuevas funciones. Después del 1º de julio, seguiremos avanzando para construir un instrumento para la democracia 
              </p>

              <p>¿Es gratuito el servicio?</p>
              <p>
                Sí. En serio.
              </p>

              <p>¿A dónde puedo mandar mis comentarios o preguntas?</p>
              <p>
                Escríbenos a mivoto.feedback@gmail.com
              </p>

              <p>¿Están afiliados a algún partido político?</p>
              <p>
                No. Somos ciudadanos comunes y corrientes que no militamos en ningún partido. Nuestro único interés es contribuir a la participación ciudadana y el debate democrático en México.
              </p>

            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleClose}>Cerrar</Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    }
  }
  