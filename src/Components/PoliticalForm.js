// PoliticalForm is one of the principal stateful components of the project. It serves as the single
// source of truth for many child components and is where the Rux metric is computed and the 8v
// metric is requested from the Python back-end.
import React from 'react';
import { Get } from 'react-axios';
import {Results} from './Results';
import {FormQuestions} from './FormQuestions';
import { Navbar, Button } from 'react-bootstrap';
const Loading = require('react-loading-animation');

const algorithmData = {
	"Economía Familiar y General": {
        "ratingsMeanings": [0,0.0045,0.0091,0.0137],
        "questionsValues" : [1.1025, 0.5512, 0, -0.5512, -1.1025],
		"questions" : [
            '1. El Estado debería garantizar que el salario mínimo alcance, al menos, para cubrir las necesidades básicas.',
            '2. Los impuestos son muchos y muy altos. Por lo tanto, deben reducirse.',
            '3. Es preferible que el Estado le entregue dinero a la gente a que realice programas sociales específicos.',
            '4. Es más justo cobrar impuestos a los ingresos de cada persona que cobrar por el consumo de bienes y servicios.',
            '5. Los precios de la gasolina y los alimentos deben de ser determinados por el Estado.',
            '6. Salvo para las grandes empresas, en México es muy difícil conseguir un crédito y emprender un negocio.',
            '7. Los malos salarios son la causa del desarrollo económico desigual del país.',
            '8. México debería producir todo lo que consume y no importar nada del extranjero.',]},
            
    "Seguridad": {
        "ratingsMeanings": [0,0.0052,0.0104,0.0157],
        "questionsValues" : [1.2314, 0.6157, 0, -0.6157, -1.2314],
        "questions" : [
            '9. Me da más confianza el Ejército que la policía.',
            '10. La enorme violencia en México fue provocada por la intervención ineficaz de las Fuerzas Armadas contra el crimen organizado.',
            '11. El uso recreativo de ciertas drogas debería ser legal.',
            '12. Entre los castigos a ladrones, violadores y asesinos deberían incluirse penas más severas, como la mutilación, la castración o la pena de muerte.',
            '13. Para combatir la violencia y el crimen organizado, es necesario crear un nuevo organismo que coordine a todas las fuerzas del Estado.',
            '14. El Estado mexicano debería de llegar a algún tipo de acuerdo con grupos criminales para disminuir la violencia y la inseguridad.',
            '15. La pobreza y la desigualdad son las principales causas de que haya aumentado el crimen.',
        ]},
                
    "Gobernanza, Corrupción e Impunidad": {
        "ratingsMeanings": [0,0.0052,0.0104,0.0157],
        "questionsValues" : [1.2228, 0.6114, 0, -0.6114, -1.2228],
        "questions" : [
            '16. El encargado de perseguir a los corruptos NO debería ser propuesto por el Presidente de la República.',
            '17. El principal problema del país es que 97 de cada 100 delitos no se castigan (impunidad).',
            '18. Es más democrático que los votantes decidan directamente sobre temas de interés nacional en lugar de aceptar las decisiones de sus representantes políticos.',
            '19. El Sistema Nacional Anticorrupción es una mera simulación, y debería desaparecer.',
            '20. Bajo el actual sistema de justicia, los castigos para los corruptos son adecuados.',
            '21. Entre más complicados son los trámites gubernamentales, más oportunidades hay de corrupción.',
            '22. El Estado debería endeudarse para impulsar proyectos que mejoren la calidad de vida de los ciudadanos.',
        ]},
        
    "Salud y Seguridad Social": {
        "ratingsMeanings": [0,0.0733,0.0146,0.022],
        "questionsValues" : [1.7040, 0.852, 0, -0.852, -1.7040],
        "questions" : [
            '23. El presupuesto de salud es suficiente. Lo que hace falta para que las clínicas y hospitales públicos funcionen mejor es administrarlo mejor.',
            '24. La seguridad financiera de los adultos mayores es responsabilidad de ellos y sus familias. El Estado debe gastar en este rubro lo menos posible.',
            '25. Es mejor permitir que empresas privadas (nacionales y extranjeras) exploten los recursos naturales del país que dejarlos sin aprovechar.',
            '26. Es mejor que el gobierno tenga un solo programa social centralizado a muchos programas diferentes.',
            '27. Por el solo hecho de ser mexicanos, todos deberíamos recibir una cantidad igual de dinero por parte del Estado, sin importar si tenemos trabajo o no.',
        ]},
        
    "Educación": {
        "ratingsMeanings": [0,0.0733,0.0146,0.022],
        "questionsValues" : [1.7040, 0.852, 0, -0.852, -1.7040],
        "questions" : [
            '28. Para mejorar la calidad de la educación de nuestros niños y jóvenes, es necesario que el Estado garantice el buen desempeño de los maestros.',
            '29. No todas las personas deberían ir a la universidad.',
            '30. El Estado mexicano requiere del apoyo de la industria privada para mejorar la investigación científica y la innovación.',
            '31. La investigación en ciencia y tecnología es más importante para el desarrollo del país que las humanidades y las artes.',
            '32. El Estado no tendría por qué gastar el dinero de los contribuyentes en museos que nadie visita.',
        ]}, 
        
    "México y el mundo": {
        "ratingsMeanings": [0,0.0091,0.0183,0.027],
        "questionsValues" : [2.085, 1.0425, 0, -1.0425, -2.085],
        "questions" : [
            '33. La inversión extranjera es buena y necesaria para el desarrollo de México.',
            '34. Los efectos del Tratado de Libre Comercio de América del Norte (TLC) han sido muy positivos para México.',
            '35. El crecimiento económico de México debería basarse más en la economía interna que en nuestra participación mundial con importaciones y exportaciones.',
            '36. Un gran riesgo para la soberanía de México es la intervención de los intereses extranjeros, tanto políticos como económicos.',
        ]},
          
    "Misceláneo": {
        "ratingsMeanings": [0,0.0091,0.0183,0.027],
        "questionsValues" : [2.0425, 1.0212, 0, -1.0212, -2.0425],
        "questions" : [
            '37. El Estado debería invertir en crear infraestructura (puertos, carreteras, hospitales, etc.) de alto impacto para el crecimiento económico de México.',
            '38. La interrupción del embarazo debería ser ilegal en todas las circunstancias.',
            '39. El matrimonio es exclusivamente entre un varón y una mujer.',
            '40. Para tener un buen gobierno y combatir la corrupción, es más importante la honestidad personal de los gobernantes que la creación de leyes e instituciones.',
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
            favoriteCandidate: null,
        };
        this.addAnswer = this.addAnswer.bind(this);
        this.onSubmit = this.onSubmit.bind(this); 
        this.computeResults = this.computeResults.bind(this);
        this.fillVector = this.fillVector.bind(this);
        this.addRating = this.addRating.bind(this);
        this.changeFavoriteCandidate = this.changeFavoriteCandidate.bind(this);
      }

    fillVector () {
        // An aid to quickly fill up the answers
        console.log('You ROGUE!');
        this.setState({answers: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,]})
    }
    
    computeResults () {
        // computeResults() calculates the Rux metric and sets the stage for the 8v Analysis request
        // to the Python back-end
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
            // Given that thi individual Rux value is to be computed for each
            // category, a function is abstracted for reusability
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
            // Because each element in answers corresponds to an index of algorithmData,
            // we can lookup their associated numerical value for a given question.
            // There are 40 questions total, and 40 answers.
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
        // The state is set to account for the total Rux and to set the stage for the back-end request
        // by changing readyToComputeResults to true
        this.setState({ruxTotal: ruxCat1+ruxCat2+ruxCat3+ruxCat4+ruxCat5+ruxCat6+ruxCat7}, () => {
        });   
        this.setState({readyToComputeResults: true, showErrorMessage: false});
    }

    onSubmit (e) {
        // onSubmit() is triggered when the user presses the Generar Resultados button
        e.preventDefault();
        // If answers contains no 0s, the compute the results.
        // Else, show the error message
        if (this.state.answers.find(answer => answer === 0) === undefined && this.state.favoriteCandidate!==0) {
            this.computeResults();
        } else {
            this.setState({showErrorMessage: true, readyToComputeResults: false});
        }
    }

    addAnswer (e, index) {
        // Each time the user chooses an answer, the state is set to change the corresponding
        // element in the answers state
        this.setState(prevState => {
            prevState.answers[index] = e;
            return ({answers: prevState.answers})
        });
    } 

    addRating (e, index) {
        // Each time the user chooses a rating for a question, the state is set to change the corresponding
        // element in the ratings state
        this.setState(prevState => {
            prevState.ratings[index] = e;
            return ({ratings: prevState.ratings, rating:e})
        });
    } 

    changeFavoriteCandidate (e) {
        // When the user chooses their favorite candidate, the state is set to change the favoriteCandidate key
        console.log(e)
        const candidatesList = [null, 'Andres Manuel Lopez Obrador', 'Jaime Rodriguez', 'Jose Antonio Meade', 'Margarita Zavala', 'Ricardo Anaya',]
        this.setState(prevState => {
            return ({favoriteCandidate: candidatesList[e]})
        });
    } 

    render() {
        return (
            <div className="form">
                <h3>Elige la opción que más represente tu punto de vista para cada pregunta:</h3>
                <br/>
                <br/>
                {/* FormQuestions renders all the questions with their corresponding possible answers and ratings */}
                <FormQuestions data={algorithmData}  answerHandlerFunction={this.addAnswer} ratingHandlerFunction={this.addRating} affinityQuestionHandlerFunction={this.changeFavoriteCandidate} ratings={this.state.ratings}/>

                {/* To be pressed when every question has a correspoding answer */}
                <Button className="submit grow" onClick={this.onSubmit} bsSize="large" bsStyle="primary">Generar Resultados</Button>
                <br/>
                <br/>

                {/* A conditional statement to render the error message if the user tries to submit the form */}
                {/* before asnwering all questions */}
                {this.state.showErrorMessage && (
                                    // Here goes the error message
                                    <div className="alert alert-dismissible-lg alert-danger">
                                    <button type="button" className="close" data-dismiss="alert">&times;</button>
                                    <strong>¡Todavía no has terminado!</strong> <a href="#" className="alert-link">Te falta seleccionar una respuesta en al menos una categoría</a> Cuando estés listo, vuelve a apretar el botón para Generar Resultados
                                  </div>
                )}
                
                {/* The GET request is triggered automatically after the Rux analysis is over */}
                <Get 
                url="https://oxms1xapuk.execute-api.us-west-1.amazonaws.com/dev/" 
                params={{answers: this.state.answers.toString(), favorite: this.state.favoriteCandidate}}
                isReady={this.state.readyToComputeResults}>
                    {(error, response, isLoading, onReload) => {
                    if(error) {
                        return (<div>Ups... hubo un error: {error.message}  <button onClick={() => onReload({ params: {answers: this.state.answers.toString(), favorite: this.state.favoriteCandidate} })}>Intenta de nuevo</button> </div>)
                    }
                    else if(isLoading) {
                        return (<div><Loading /></div>)
                    }
                    else if(response !== null) {
                        // If the request was succesful, the Results element is rendered and the appropiate props passed on
                        return (<div><Results vAnalysis={response.data.results} rux={this.state.ruxTotal} answers={this.state.answers.toString()}/></div>)
                    }
                    // This is the default message before the request is made. It has been left empty on purpose
                    return (<div></div>)
                    }}
                </Get>
                
                {/* A very useful button when testing the app. Press to fill up the answers vector */}
                {/* <Button className="submit grow" onClick={this.fillVector} bsSize="large" bsStyle="danger">Trampa</Button> */}

                {/* Gee. No time for finding the footer! Come back here when you have enough time!!! */}
                <Navbar style={{color:'white', padding:'0% !important'}} inverse >
                <Navbar.Header>
                    mivoto.io versión alfa 1.0.2 ‘MVP release’. mivoto.io no tiene ninguna afiliación política y está desarrollado por ciudadanos mexicanos y por capital privado. Queremos conocer cualquier feedback o aclaración, escríbenos a: mivoto.feedback@gmail.com
                </Navbar.Header>
                </Navbar>
                </div>
        )
    }
}