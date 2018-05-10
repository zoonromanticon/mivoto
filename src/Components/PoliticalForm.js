import React from 'react';
import { Get } from 'react-axios';
import {Results} from './Results';
import {FormQuestions} from './FormQuestions';
import { Button } from 'react-bootstrap';
const Loading = require('react-loading-animation');

const algorithmData = {
	"Economía Familiar y General": {
        "ratingsMeanings": [0,0.0045,0.0091,0.0137],
        "questionsValues" : [1.1025, 0.5512, 0, -0.5512, -1.1025],
		"questions" : ["Salario Mínimo General", "Reducción de impuestos", "Programas Sociales", "IVA en alimentos y bebidas", "Precios de garantía y tipo de cambio", "Apoyos a Pymes, emprendedores y autoempleo", "Nueva Reforma Laboral", "Economía abierta o cerrada"]},
            
    "Seguridad": {
        "ratingsMeanings": [0,0.0052,0.0104,0.0157],
        "questionsValues" : [1.2314, 0.6157, 0, -0.6157, -1.2314],
        "questions" : ["Policía", "Ejército en la calle", "Legalización de las drogas", "Penas físicas", "Secretaría de Seguridad independiente de Segob", "Amnistía a criminales", "Pobreza y desigualdad son causas de la violencia"]},
                
    "Gobernanza, Corrupción e Impunidad": {
        "ratingsMeanings": [0,0.0052,0.0104,0.0157],
        "questionsValues" : [1.2228, 0.6114, 0, -0.6114, -1.2228],
        "questions" : ["Fiscalía Autónoma ciudadana", "Amnistía a corruptos", "Aumentar presupuesto para infraestructura", "Sistema Nacional Anticorrupción", "Reforma al Sistema Penal", "Propiedad personal", "Política de Gasto/Deuda/Inversión pública"]},
        
    "Salud y Seguridad Social": {
        "ratingsMeanings": [0,0.0733,0.0146,0.022],
        "questionsValues" : [1.7040, 0.852, 0, -0.852, -1.7040],
        "questions" : ["Gasto público para Salud", "Extender la licencia de maternidad/paternidad", "Simplificación de trámites", "Sistema de Seguridad Social Universal", "Pensiones, Ancianos e Ingreso Básico Universal"]},
        
    "Educación": {
        "ratingsMeanings": [0,0.0733,0.0146,0.022],
        "questionsValues" : [1.7040, 0.852, 0, -0.852, -1.7040],
        "questions" : ["Elementos de la Reforma Educativa", "Garantizar acceso universal a educación media y media superior", "Asociaciones Universidades+Gobierno+IP para I&D", "Aumentar el presupuesto público para educación, cultura e investigación", "Quitar impuestos a la educación y la cultura"]}, 
        
    "México y el mundo": {
        "ratingsMeanings": [0,0.0091,0.0183,0.027],
        "questionsValues" : [2.085, 1.0425, 0, -1.0425, -2.085],
        "questions" : ["Mejorar condiciones para atraer más Inversión Extranjera Directa", "TLCAN", "Exportaciones", "Nacionalismo vs Internacionalismo"]},
          
    "Miscelaneo": {
        "ratingsMeanings": [0,0.0091,0.0183,0.027],
        "questionsValues" : [2.0425, 1.0212, 0, -1.0212, -2.0425],
        "questions" : ["Revocación de mandato, Consulta Ciudadana y Referendum", "DDHH", "Valores tradicionales", "Medio Ambiente y Energía"]},   
}

// var question_index = 0

export class PoliticalForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ruxTotal: 0,  
            showErrorMessage: false,
            readyToComputeResults: false,
            answers: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            ratings: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            rating: 0, //For debugging purposes
        };
        this.addAnswer = this.addAnswer.bind(this);
        this.onSubmit = this.onSubmit.bind(this); 
        this.computeResults = this.computeResults.bind(this);
        this.fillVector = this.fillVector.bind(this);
        this.addRating = this.addRating.bind(this);
      }

    fillVector () {
        this.setState({answers: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,]})
    }
    
    computeResults () {
        // console.log(this.state.answers);
        let ruxCat1 = 0
        let ruxCat2 = 0
        let ruxCat3 = 0
        let ruxCat4 = 0
        let ruxCat5 = 0
        let ruxCat6 = 0
        let ruxCat7 = 0
        var that = this;
        
        function computeRux (categoryName,value,index) {
            let questionData = algorithmData[categoryName]
            let questionValue = questionData["questionsValues"][value-1]
            let ratingValue = questionData["ratingsMeanings"][that.state.ratings[index]]
            let ruxCat = 0
            if (questionValue>0) {
                ruxCat+=questionValue+ratingValue;
            } else {
                ruxCat+=questionValue-ratingValue;
            }
            return ruxCat
        }
        this.state.answers.forEach(function (value,index) {
            if (1 <= index+1 && index+1 <= 8) {
                ruxCat1 += computeRux("Economía Familiar y General",value,index)
            } else if (9 <= index+1 && index+1 <=15) {
                ruxCat2 += computeRux("Seguridad",value,index)
            } else if (16 <= index+1 && index+1 <=22) {
                ruxCat3 += computeRux("Gobernanza, Corrupción e Impunidad",value,index)
            } else if (23 <= index+1 && index+1 <=27) {
                ruxCat4 += computeRux("Salud y Seguridad Social",value,index)
            } else if (26 <= index+1 && index+1 <=32) {
                ruxCat5 += computeRux("Educación",value,index)
            } else if (33 <= index+1 && index+1 <=36) {
                ruxCat6 += computeRux("México y el mundo",value,index)
            } else if (35 <= index+1 && index+1 <=40) {
                ruxCat7 += computeRux("Miscelaneo",value,index)
            }
          });
        console.log(ruxCat1,ruxCat2,ruxCat3,ruxCat4,ruxCat5,ruxCat6,ruxCat7);
        this.setState({ruxTotal: ruxCat1+ruxCat2+ruxCat3+ruxCat4+ruxCat5+ruxCat6+ruxCat7}, () => {
        });   
        this.setState({readyToComputeResults: true, showErrorMessage: false});
    }

    onSubmit (e) {
        e.preventDefault();
        if (this.state.answers.find(x => x === 0) === undefined) {
            this.computeResults();
            // this.setState({readyToComputeResults: true, showErrorMessage: false});
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

    addRating (e, index) {
        // this.state.ratings[index] = e;
        //WO. Horrible solution but no time to ponder. Come back later
        this.setState(prevState => {
            prevState.ratings[index] = e;
            return ({ratings: prevState.ratings, rating:e})
        });
    } 

    render() {
        return (
            <div className="form">
                <h3>Elige la opción que más represente tu punto de vista para cada pregunta:</h3>
                <br/>
                <br/>
                <FormQuestions data={algorithmData}  answerHandlerFunction={this.addAnswer} ratingHandlerFunction={this.addRating} rating={this.props.rating}/>

                <Button className="submit grow" onClick={this.onSubmit} bsSize="large" bsStyle="primary">Generar Resultados</Button>
                <br/>
                <br/>
                {/* {this.state.readyToComputeResults && <Results/>} */}
                {this.state.showErrorMessage && (
                                    <div className="alert alert-dismissible-lg alert-danger">
                                    <button type="button" className="close" data-dismiss="alert">&times;</button>
                                    <strong>¡Todavía no has terminado!</strong> <a href="#" className="alert-link">Te falta seleccionar una respuesta en al menos una categoría</a> Cuando estés listo, vuelve a apretar el botón para Generar Resultados
                                  </div>
                )}
                
                <Get 
                url="https://oxms1xapuk.execute-api.us-west-1.amazonaws.com/dev/" 
                params={{answers: this.state.answers.toString()}}
                isReady={this.state.readyToComputeResults}>
                    {(error, response, isLoading, onReload) => {
                    if(error) {
                        return (<div>Ups... hubo un error: {error.message}  <button onClick={() => onReload({ params: {answers: this.state.answers.toString()} })}>Intenta de nuevo</button> </div>)
                    }
                    else if(isLoading) {
                        return (<div><Loading /></div>)
                    }
                    else if(response !== null) {
                        return (<div><Results vAnalysis={response.data.results} rux={this.state.ruxTotal} answers={this.state.answers.toString()}/></div>)
                    }
                    return (<div></div>)
                    }}
                </Get>

                <Button className="submit grow" onClick={this.fillVector} bsSize="large" bsStyle="danger">Trampa</Button>
                </div>
        )
    }
}