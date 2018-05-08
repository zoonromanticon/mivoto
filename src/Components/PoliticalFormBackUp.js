import React from 'react';
import {Question} from './Question';
import {Results} from './Results';
import {FormQuestions} from './FormQuestions';
import { Button } from 'react-bootstrap';

const algorithmData = {
	"Economía Familiar y General": {"questionsValues" : [1.1025, 0.5512, 0, -0.5512, -1.1025],
		"questions" : ["Salario Mínimo General", "Reducción de impuestos", "Programas Sociales", "IVA en alimentos y bebidas", "Precios de garantía y tipo de cambio", "Apoyos a Pymes, emprendedores y autoempleo", "Nueva Reforma Laboral", "Economía abierta o cerrada"]},

			
"Seguridad": {"questionsValues" : [1.2314, 0.6157, 0, -0.6157, -1.2314],
		"questions" : ["Policía", "Ejército en la calle", "Legalización de las drogas", "Penas físicas", "Secretaría de Seguridad independiente de Segob", "Amnistía a criminales", "Pobreza y desigualdad son causas de la violencia"]},
	
			
"Gobernanza, Corrupción e Impunidad": {"questionsValues" : [1.2228, 0.6114, 0, -0.6114, -1.2228],
		"questions" : ["Fiscalía Autónoma ciudadana", "Amnistía a corruptos", "Aumentar presupuesto para infraestructura", "Sistema Nacional Anticorrupción", "Reforma al Sistema Penal", "Propiedad personal", "Política de Gasto/Deuda/Inversión pública"]},
	
	
"Salud y Seguridad Social": {"questionsValues" : [1.7040, 0.852, 0, -0.852, -1.7040],
		"questions" : ["Gasto público para Salud", "Extender la licencia de maternidad/paternidad", "Simplificación de trámites", "Sistema de Seguridad Social Universal", "Pensiones, Ancianos e Ingreso Básico Universal"]},
	
	
"Educación": {"questionsValues" : [1.7040, 0.852, 0, -0.852, -1.7040],
		"questions" : ["Elementos de la Reforma Educativa", "Garantizar acceso universal a educación media y media superior", "Asociaciones Universidades+Gobierno+IP para I&D", "Aumentar el presupuesto público para educación, cultura e investigación", "Quitar impuestos a la educación y la cultura"]},
	
	
"México y el mundo": {"questionsValues" : [2.085, 1.0425, 0, -1.0425, -2.085],
		"questions" : ["Mejorar condiciones para atraer más Inversión Extranjera Directa", "TLCAN", "Exportaciones", "Nacionalismo vs Internacionalismo"]},
	
	
"Miscelaneo": {"questionsValues" : [2.0425, 1.0212, 0, -1.0212, -2.0425],
		"questions" : ["Revocación de mandato, Consulta Ciudadana y Referendum", "DDHH", "Valores tradicionales", "Medio Ambiente y Energía"]},
			
}

var questionIndex = 0

export class PoliticalForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ruxTotal: 0,  
            showErrorMessage: false,
            readyToComputeResults: false,
            answers: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,]
            // ratings: 
        };
        this.addAnswer = this.addAnswer.bind(this);
        this.onSubmit = this.onSubmit.bind(this); 
        this.computeResults = this.computeResults.bind(this);
        this.fillVector = this.fillVector.bind(this);  
      }

    fillVector () {
        this.setState({answers: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,]})
    }
    
    computeResults () {
        console.log(this.state.answers);
        let ruxCat1 = 0
        let ruxCat2 = 0
        let ruxCat3 = 0
        let ruxCat4 = 0
        let ruxCat5 = 0
        let ruxCat6 = 0
        let ruxCat7 = 0
        this.state.answers.forEach(function (value,index) {
            if (1 <= index+1 && index+1 <= 8) {
                ruxCat1+=algorithmData["Economía Familiar y General"]["questionsValues"][value-1]
            } else if (9 <= index+1 && index+1 <=15) {
                ruxCat2+=algorithmData["Seguridad"]["questionsValues"][value-1]
            } else if (16 <= index+1 && index+1 <=22) {
                ruxCat3+=algorithmData["Gobernanza, Corrupción e Impunidad"]["questionsValues"][value-1]
            } else if (23 <= index+1 && index+1 <=27) {
                ruxCat4+=algorithmData["Salud y Seguridad Social"]["questionsValues"][value-1]
            } else if (26 <= index+1 && index+1 <=32) {
                ruxCat5+=algorithmData["Educación"]["questionsValues"][value-1]
            } else if (33 <= index+1 && index+1 <=36) {
                ruxCat6+=algorithmData["México y el mundo"]["questionsValues"][value-1]
            } else if (35 <= index+1 && index+1 <=40) {
                ruxCat7+=algorithmData["Miscelaneo"]["questionsValues"][value-1]
            }
          });
        console.log(ruxCat1,ruxCat2,ruxCat3,ruxCat4,ruxCat5,ruxCat6,ruxCat7);
        this.setState({ruxTotal: ruxCat1+ruxCat2+ruxCat3+ruxCat4+ruxCat5+ruxCat6+ruxCat7});
        console.log(this.state.ruxTotal);
    }

    onSubmit (e) {
        e.preventDefault();
        if (this.state.answers.find(x => x === 0) === undefined) {
            this.computeResults();
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
            <div className="form">
                <h3>Elige la opción que más represente tu punto de vista para cada pregunta:</h3>
                <br/>
                <br/>
                {Object.keys(algorithmData).map((category, index) =>
                    (   
                        <div>
                        <h1>{category}</h1>
                        {algorithmData[category]['questions'].map((question, index) => 
                            (   <div>
                                    <Question id={questionIndex} key={questionIndex} title={question} handler={this.addAnswer}/>
                                    <br/>
                                    {questionIndex++ && false}
                                </div>
                            )
                        )}
                        </div>   
                    )
                )}
                {/* Next line is important to reset the counter because the component refreshes each time the user chooses an answer. BTW, find a better solution */}
                <p style={{visibility: 'hidden'}}>{questionIndex=0}</p>

                <Button className="submit grow" onClick={this.onSubmit} bsSize="large" bsStyle="primary">Generar Resultados</Button>
                <br/>
                <br/>
                {this.state.readyToComputeResults && <Results/>}
                {this.state.showErrorMessage && (
                                    <div className="alert alert-dismissible-lg alert-danger">
                                    <button type="button" className="close" data-dismiss="alert">&times;</button>
                                    <strong>¡Todavía no has terminado!</strong> <a href="#" className="alert-link">Te falta seleccionar una respuesta en al menos una categoría</a> Cuando estés listo, vuelve a apretar el botón para Generar Resultados
                                  </div>
                )}
            
            <Button className="submit grow" onClick={this.fillVector} bsSize="large" bsStyle="danger">Trampa</Button>
            </div>
        )
    }
}