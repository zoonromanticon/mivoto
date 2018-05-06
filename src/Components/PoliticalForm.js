import React from 'react';
import {Question} from './Question';
import {Results} from './Results';
import { Button } from 'react-bootstrap';

const questions = [
    'El estado debe establecer los precios de productos clave como: gasolinas y granos para agricultores',
    'Pregunta 2',

]

export class PoliticalForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showErrorMessage: false,
            readyToComputeResults: false,
            answers: [0,0]
        };
        this.addAnswer = this.addAnswer.bind(this);
        this.onSubmit = this.onSubmit.bind(this); 
      }
    
    onSubmit (e) {
        e.preventDefault();
        if (this.state.answers.find(x => x === 0) === undefined) {
            this.setState({readyToComputeResults: true, showErrorMessage: false});
        } else {
            this.setState({showErrorMessage: true, readyToComputeResults: false});
        }
    }

    addAnswer (e, index) {
        this.setState(prevState => {
            prevState.answers[index] = e;
            console.log(prevState.answers);
            return ({answers: prevState.answers})
        });
    } 

    render() {
        return (
            <div>
                <h3>Elige la opción que más represente tu punto de vista para cada pregunta:</h3>
                <br/>
                <br/>
                {questions.map((question, index) => 
                    (   <div>
                            <Question id={index} key={index} title={question} handler={this.addAnswer}/>
                            <br/>
                        </div>
                    )
                )}
                <Button className="submit" onClick={this.onSubmit} bsSize="large" bsStyle="primary">Generar Resultados</Button>
                <br/>
                <br/>
                {this.state.readyToComputeResults && <Results/>}
                {this.state.showErrorMessage && (
                                    <div className="alert alert-dismissible-lg alert-danger">
                                    <button type="button" className="close" data-dismiss="alert">&times;</button>
                                    <strong>¡Todavía no has terminado!</strong> <a href="#" className="alert-link">Te falta seleccionar una respuesta en al menos una categoría</a> Cuando estés listo, vuelve a apretar el botón para Generar Resultados
                                  </div>
                )}

            </div>
        )
    }
}