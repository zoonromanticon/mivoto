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
		"questions" : [
            'El Estado debería garantizar que el salario mínimo alcance, al menos, para cubrir las necesidades básicas.',
            'Los impuestos son muchos y muy altos. Por lo tanto, deben reducirse.',
            'Es preferible que el Estado le entregue dinero a la gente a que realice programas sociales específicos.',
            'Es más justo cobrar impuestos a los ingresos de cada persona que cobrar por el consumo de bienes y servicios.',
            'Los precios de la gasolina y los alimentos deben de ser determinados por el Estado.',
            'Salvo para las grandes empresas, en México es muy difícil conseguir un crédito y emprender un negocio.',
            'Los malos salarios son la causa del desarrollo económico desigual del país.',
            'México debería producir todo lo que consume y no importar nada del extranjero.',]},
            
    "Seguridad": {
        "ratingsMeanings": [0,0.0052,0.0104,0.0157],
        "questionsValues" : [1.2314, 0.6157, 0, -0.6157, -1.2314],
        "questions" : [
            'Me da más confianza el Ejército que la policía.',
            'La enorme violencia en México fue provocada por la intervención ineficaz de las Fuerzas Armadas contra el crimen organizado.',
            'El uso recreativo de ciertas drogas debería ser legal.',
            'Entre las castigos a ladrones, violadores y asesinos deberían incluirse penas más severas, como la mutilación, la castración o la pena de muerte.',
            'Para combatir la violencia y el crimen organizado, es necesario crear un nuevo organismo que coordine a todas las fuerzas del Estado.',
            'El Estado mexicano debería de llegar a algún tipo 2 con grupos criminales para disminuir la violencia y la inseguridad.',
            'La pobreza y la desigualdad son las principales causas de que haya aumentado el crimen.',
        ]},
                
    "Gobernanza, Corrupción e Impunidad": {
        "ratingsMeanings": [0,0.0052,0.0104,0.0157],
        "questionsValues" : [1.2228, 0.6114, 0, -0.6114, -1.2228],
        "questions" : [
            'El encargado de perseguir a los corruptos no debería ser propuesto por el Presidente de la República.',
            'El principal problema del país es que 97 de cada 100 delitos no se castigan (impunidad).',
            'Es más democrático que los votantes decidan directamente sobre temas de interés nacional en lugar de aceptar las decisiones de sus representantes políticos.',
            'El Sistema Nacional Anticorrupción es una mera simulación, y debería desaparecer.',
            'Bajo el actual sistema de justicia, el castigo para los corruptos son adecuadas.',
            'Entre más complicados son los trámites gubernamentales, más oportunidades hay de corrupción.',
            'El Estado debería endeudarse para impulsar proyectos que mejoren la calidad de vida de los ciudadanos.',
        ]},
        
    "Salud y Seguridad Social": {
        "ratingsMeanings": [0,0.0733,0.0146,0.022],
        "questionsValues" : [1.7040, 0.852, 0, -0.852, -1.7040],
        "questions" : [
            'El presupuesto de salud es suficiente. Lo que hace falta para que las clínicas y hospitales públicos funcionen mejor es administrarlo mejor.',
            'La seguridad financiera de los adultos mayores es responsabilidad de ellos y sus familias. El Estado debe gastar en este rubro lo menos posible.',
            'Es mejor permitir que empresas privadas (nacionales y extranjeras) exploten los recursos naturales del país que dejarlos sin aprovechar.',
            'Es mejor que el gobierno tenga un solo programa social centralizado a muchos programas diferentes.',
            'Por el solo hecho de ser mexicanos, todos deberíamos recibir una cantidad igual de dinero por parte del Estado, sin importar si tenemos trabajo o no.',
        ]},
        
    "Educación": {
        "ratingsMeanings": [0,0.0733,0.0146,0.022],
        "questionsValues" : [1.7040, 0.852, 0, -0.852, -1.7040],
        "questions" : [
            'Para mejorar la calidad de la educación de nuestros niños y jóvenes, es necesario que el Estado garantice el buen desempeño de los maestros.',
            'No todas las personas deberían ir a la universidad.',
            'El Estado mexicano requiere del apoyo de la industria privada para mejorar la investigación científica y la innovación.',
            'La investigación en ciencia y tecnología es más importante para el desarrollo del país que las humanidades y las artes.',
            'El Estado no tendría por qué gastar el dinero de los contribuyentes en museos que nadie visita.',
        ]}, 
        
    "México y el mundo": {
        "ratingsMeanings": [0,0.0091,0.0183,0.027],
        "questionsValues" : [2.085, 1.0425, 0, -1.0425, -2.085],
        "questions" : [
            'La inversión extranjera es buena y necesaria para el desarrollo de México.',
            'Los efectos del Tratado de Libre Comercio de América del Norte (TLC) han sido muy positivos para México.',
            'El crecimiento económico de México debería basarse más en la economía interna que en nuestra participación mundial con importaciones y exportaciones.',
            'Un gran riesgo para la soberanía de México es la intervención de los intereses extranjeros, tanto políticos como económicos.',
        ]},
          
    "Misceláneo": {
        "ratingsMeanings": [0,0.0091,0.0183,0.027],
        "questionsValues" : [2.0425, 1.0212, 0, -1.0212, -2.0425],
        "questions" : [
            'El Estado debería invertir en crear infraestructura (puertos, carreteras, hospitales, etcétera) de alto impacto para el crecimiento económico de México.',
            'La interrupción del embarazo debería ser ilegal en todas las circunstancias.',
            'El matrimonio es exclusivamente entre un varón y una mujer.',
            'Para tener un buen gobierno y combatir la corrupción, es más importante la honestidad personal de los gobernantes que la creación de leyes e instituciones.',
        ]},   
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
        console.log('You ROGUE!');
        this.setState({answers: [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,]})
    }
    
    computeResults () {
        console.log('Answers:',this.state.answers);
        console.log('Ratings:',this.state.ratings)
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
                ruxCat7 += computeRux("Misceláneo",value,index)
            }
          });
        console.log('Rux values:',ruxCat1,ruxCat2,ruxCat3,ruxCat4,ruxCat5,ruxCat6,ruxCat7);
        this.setState({ruxTotal: ruxCat1+ruxCat2+ruxCat3+ruxCat4+ruxCat5+ruxCat6+ruxCat7}, () => {
        });   
        this.setState({readyToComputeResults: true, showErrorMessage: false});
    }

    onSubmit (e) {
        e.preventDefault();
        if (this.state.answers.find(x => x === 0) === undefined) {
            this.computeResults();
        } else {
            this.setState({showErrorMessage: true, readyToComputeResults: false});
        }
    }

    addAnswer (e, index) {
        this.setState(prevState => {
            prevState.answers[index] = e;
            // console.log(prevState.answers);
            return ({answers: prevState.answers})
        });
    } 

    addRating (e, index) {
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
                <FormQuestions data={algorithmData}  answerHandlerFunction={this.addAnswer} ratingHandlerFunction={this.addRating} ratings={this.state.ratings}/>

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