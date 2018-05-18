import React from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import {Home} from '../Home/Home';
import { Image } from 'react-bootstrap';
import idea from '../assets/idea.svg';
import share from '../assets/share.svg';
import talk from '../assets/talk.svg';


export class LandingPage extends React.Component {
    render () {
        return (
                    <Grid>
                        <Row className="show-grid">
                            <Col xs={0} sm={0} md={1} lg={0}> </Col>
                            <Col xs={12} sm={12} md={10} lg={12}>
                                <div style={{wordWrap: 'break-word', textAlign:'left'}}>
                                    <h1 className='pinkish'>Lo que quieres para México, ¿coincide con lo que ofrecen los candidatos?</h1>

                                    <h2 style={{fontSize:'200%'}} className='bluesh'>Descúbrelo, compártelo con tus amigos y exígele a tu candidato: todo en un mismo lugar.</h2>

                                    <br/>

                                    <h1 className='pinkish'>¡Bienvenido a mivoto.io!</h1>

                                    <span style={{fontSize:'140%'}}>
                                        Sabemos que <span style={{fontWeight:'bold'}}>es casi imposible saber si lo que 
                                        ofrecen los candidatos construirá el México que queremos</span> cada uno de nosotros. 
                                        También sabemos que, tristemente, <span  style={{fontWeight:'bold'}}>la confianza en la
                                            democracia mexicana está dañada</span>. Y eso enturbia nuestra relación entre amigos y familiares.
                                    </span> 

                                    <br/>
                                    <br/>

                                    <h2 className='pinkish'>¡Tenemos que cambiar esto!</h2>

                                    <span style={{fontSize:'140%'}}>
                                        La buena noticia: hoy tenemos la herramienta para ver transparenta las intenciones y razones políticas de los votantes.
                                    </span>

                                    <br/>
                                    <br/>

                                    <Home auth={this.props.auth} />

                                    <hr style={{borderColor:'black'}}/>

                                    <h2 style={{textAlign:'center'}} className='bluesh'>¿Cómo funciona?</h2>

                                    <br/>
                                   
                                    <div className="tableContainer">
                                        <div className="left">
                                            <h2 style={{textAlign:'center', fontSize:'150%', fontWeight:'bold'}}>Descubre</h2>
                                            <Image  style={{ width: '100%', objectFit:'contain', paddingLeft:'20%', paddingRight:'20%'}} src={idea} responsive />
                                            <p style={{textAlign:'center', padding:'2%', fontSize:'120%'}}>Obtén la certeza de qué candidato a la Presidencia de la República se alinea mejor a tus intereses y/o deseos para México</p>
                                        </div>
                                        <div className="middle">
                                            <h2 style={{textAlign:'center', fontSize:'150%', fontWeight:'bold'}}>Dialoga</h2>
                                            <Image  style={{ width: '100%', objectFit:'contain', paddingLeft:'20%', paddingRight:'20%' }} src={talk} responsive />
                                            <p style={{textAlign:'center', padding:'2%', fontSize:'120%'}}>Comparte tus resultados en redes sociales y dialoga con tus amigos. Construye una cultura democrática donde todos podamos consentir o disentir con respeto y con razones, no solamente emociones</p>
                                        </div>
                                        <div className="right">
                                            <h2 style={{textAlign:'center', fontSize:'150%', fontWeight:'bold'}}>Pregunta</h2>
                                            <Image  style={{ width: '100%', objectFit:'contain', paddingLeft:'20%', paddingRight:'20%' }} src={share} responsive />
                                            <p style={{textAlign:'center', padding:'2%', fontSize:'120%'}}>Envía una o más preguntas a los candidatos. mivoto.io te recomendará las mejores opciones de pregunta para que participes en el Debate Ciudadano del próximo 21 de junio</p>
                                        </div>
                                    </div>

                                    <hr style={{borderColor:'black'}}/>

                                    <Home auth={this.props.auth} />

                                    <br/>

                                    <span style={{fontSize:'140%'}}>
                                        <span style={{fontWeight:'bold'}}>La pregunta del millón: ¿por qué piden que me registre? </span>
                                        La respuesta: mivoto.io es más que un cuestionario. Queremos que sea tu espacio. El registro nos ayuda a darte la mejor experiencia, a reducir el riesgo de bots y cosas peores y, lo más importante, a construir contigo el futuro del análisis y la participación democrática del país. No te preocupes: <span  style={{fontWeight:'bold'}}>sabemos que odias el spam y a los
                                        chismosos de tu intimidad. Nosotros también los odiamos</span>. A
                                        muerte. Prometemos portarnos bien y avisarte qué datos tenemos,
                                        de todo lo que estaremos haciendo con ellos y darte tu lugar como el
                                        dueño de ellos.
                                    </span> 
                                    
                                </div>
                            </Col>
                            <Col xs={0} sm={0} md={1} lg={0}> </Col>
                        </Row>
                    </Grid>
        )
    }
}