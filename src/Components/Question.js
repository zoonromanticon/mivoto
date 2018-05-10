import React from 'react';
import ReactStars from 'react-stars'
import {ToggleButtonGroupControlled} from './ToggleButtonGroupControlled';
import { Grid, Col, Row } from 'react-bootstrap';

export class Question extends React.Component {
    constructor(props) {
        super(props);
        this.ratingChanged = this.ratingChanged.bind(this);
      }

    ratingChanged(e) {
        this.props.ratingHandlerFunction(e,this.props.id)
    }

    render() {
        return (
            <div className="question">
                <h4>{this.props.title}</h4>
                <ToggleButtonGroupControlled id={this.props.id} answerHandlerFunction={this.props.answerHandlerFunction}/>
                <div className="ratingContainer">
                    {/* TODO Place this on another component */}
                    <h4>¿Qué tanto te importa la pregunta?</h4>
                    <div>
                    {/* Extremely not OK. Correct this when there's time */}
                    <Grid>
                        <Row className="show-grid">
                            <Col xs={4} sm={5} md={5} >
                            </Col>
                            <Col xs={6} sm={6} md={7} >
                                <div>
                                <ReactStars
                                    value={this.props.rating}
                                    half={false}
                                    count={3}
                                    onChange={this.ratingChanged}
                                    size={48}
                                    color2={'#ffd700'}
                                />
                                </div>
                            </Col>
                     
                        </Row>
                    </Grid>
                    </div>
                </div>
            </div>
        )
    }
}