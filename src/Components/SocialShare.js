// SocialShare is a component that renders social media buttons to share your results
// and also renders a QuestionToCandidates instance, which shows two questions to be asked
// to a candidate, through twitter, by pressing any of a pair of embedded tweet buttons

import React from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import {
    FacebookShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    FacebookIcon,
    TwitterIcon,
    WhatsappIcon,
  } from 'react-share';
import {QuestionsToCandidates} from './QuestionsToCandidates';

// shareUrl is required by the share buttons and is added at the end of each message
const shareUrl = "https://mivoto.surge.sh"
// The initial state of the message. As the user results are parsed from the parents state into the var results,
// title will be added to those results 
const title = "Estos son mis resultados de afinidad frente a candidatos:\n"
var results = ""
// A variable is initialized for each hashtag and question
var highestAffinityHashTag = '';
var lowestAffinityHashTag = '';
var highestAffinityQuestion = '';
var lowestAffinityQuestion = '';
// Each candidate has at least one question to be asked both if them has the highest or lowest affinity to the user
// among the candidates 
var candidatesSocialMediaInfo = {
    'Andres Manuel Lopez Obrador': {'hashtag':'lopezobrador_', 'questions': {'highestAffinity':['Usted, dependiendo del foro, suele decirle a su público lo que quiere oír, generando confusión. ¿Cómo podemos confiar en lo que dice si no sabemos lo que piensa realmente?','Usted ha dicho que respetará las decisiones del Congreso. ¿Lo hará incluso si ese Congreso, donde habrá actores que pertenecen a la “mafia del poder”, decide en contra de la cuarta gran transformación del país que usted promete?'],'lowestAffinity':['Usted lleva más de 40 años en la política, ha militado en tres partidos y está rodeado de personajes que representan los vicios del “sistema”. ¿Por qué habríamos de creer que usted es una verdadera alternativa?', 'Usted promete un cambio radical con respecto al estado actual de las cosas. ¿Qué nos garantiza que ese cambio no significaría un retroceso a modelos desastrosos que el país ya ha vivido?']}},
    'Ricardo Anaya': {'hashtag':'RicardoAnayaC', 'questions': {'highestAffinity':['En la competencia por su candidatura, su partido se dividió. ¿Puede asegurarnos que, durante su administración, no pasará lo mismo con su coalición, y se quedará sin la capacidad de gobernar efectivamente?','Usted, a su corta edad, ha vivido y estudiado en el extranjero y habla varios idiomas. ¿Qué le respondería a quienes dicen que le sobra mundo y le falta México?'],'lowestAffinity':['Mucha gente lo considera a usted una persona brillante y preparada, a la vez que maquiavélico y deshonesto. ¿Qué nos garantiza que gobernaría México el primero y no el segundo?']}},
    'Jose Antonio Meade': {'hashtag':'JoseAMeadeK', 'questions': {'highestAffinity':['Usted ha prometido combatir la corrupción. Además, usted es candidato de un partido que castiga la deslealtad antes que la corrupción. ¿Está dispuesto a mantener su promesa, pase lo que pase y cueste lo que cueste?','A veces, usted parece distanciarse del Presidente @EPN y, otras, representar la continuidad. No se pueden las dos. Si éste ha sido un buen sexenio en general, ¿por qué no se acepta como el candidato de la continuidad y ya?'],'lowestAffinity':['Usted representa algunas de las mejores prácticas de manejo de la economía y administración pública. ¿Por qué su gobierno no representaría también los resultados de profunda desigualdad y pobreza de ese modelo?']}},
    'Jaime Rodriguez': {'hashtag':'JaimeRdzNL', 'questions': {'highestAffinity':['Usted, como candidato independiente, no tiene el apoyo de ningún partido. ¿Cómo podría gobernar como independiente, es decir, sin la estructura de ningún partido apoyo?'],'lowestAffinity':['Usted ha demostrado tener una fuerte personalidad y carácter pintoresco, pero no queda claro qué más tiene que ofrecer. ¿Por qué los votantes habríamos de tomarlo en serio?']}},
  }

export class SocialShare extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: '',
            highestAffinityHashTag: '',
            lowestAffinityHashTag: '',
            highestAffinityQuestion: '',
            lowestAffinityQuestion: '',
        }; 
    }

    // Before the component render function is called, the results are computed using the parents passed down prop vAnalysis
    componentWillMount () {
        var that=this;
        results = ""
        this.props.vAnalysis.forEach(function(candidate,index) {
            // If it's the first or last candidate (indices 0 or 3), the hashtag's and questions are parsed into their
            // corresponding variables
            if (index === 0) {highestAffinityHashTag = candidatesSocialMediaInfo[candidate[0]]['hashtag']; highestAffinityQuestion = candidatesSocialMediaInfo[candidate[0]]['questions']['highestAffinity'][0]}
            if (index === 3) {lowestAffinityHashTag = candidatesSocialMediaInfo[candidate[0]]['hashtag']; lowestAffinityQuestion = candidatesSocialMediaInfo[candidate[0]]['questions']['lowestAffinity'][0]} 
            results += candidate[1][1]+': '+(Math.floor((candidate[1][0]+that.props.rux)*100)/100).toString()+'%\n'
        })
        // Then the state is set for the hashtags and questions
        this.setState({
            results:title+results+'\n',
            highestAffinityHashTag: highestAffinityHashTag,
            lowestAffinityHashTag: lowestAffinityHashTag,
            highestAffinityQuestion: highestAffinityQuestion,
            lowestAffinityQuestion: lowestAffinityQuestion,
        })
    }
    
    render () {
        return (
            <div>
            {/* Questions and hashtags are passed down to the QuestionsToCandidates instance as props */}
            <QuestionsToCandidates
                lowestAffinityHashTag={this.state.lowestAffinityHashTag}
                lowestAffinityQuestion={this.state.lowestAffinityQuestion} 
                highestAffinityHashTag={this.state.highestAffinityHashTag}
                highestAffinityQuestion={this.state.highestAffinityQuestion}
                />
            
            {/* Social media buttons are shown for the user to share their results */}
            <h3>Comparte tus resultados en:</h3>
            <Grid>
                <Row className="shareButtonsContainer">
                    <Col xs={4} sm={4} md={4} >
                        <FacebookShareButton
                            url={shareUrl}
                            quote={this.state.results}
                            className="shareButton grow">
                            <FacebookIcon
                            size={48}
                            round />
                        </FacebookShareButton>
                    </Col>
                    <Col xs={4} sm={4} md={4} >
                        <TwitterShareButton
                            url={shareUrl}
                            title={this.state.results}
                            className="shareButton grow">
                            <TwitterIcon
                            size={48}
                            round />
                        </TwitterShareButton>
                    </Col>
                    <Col xs={4} sm={4} md={4} >
                        <WhatsappShareButton
                            url={shareUrl}
                            separator=''
                            title={this.state.results}
                            className="shareButton grow">
                            <WhatsappIcon
                            size={48}
                            round />
                        </WhatsappShareButton>
                    </Col>
                </Row>
          </Grid>
          </div>
        )
    }
}