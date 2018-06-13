// The Question component is rendered for each of the 40 questions. Each instance is composed
// of both the title of the question, the controlled button group to select an answer and
// a Rating component for the user to rate the importance of the question 

import React from 'react';
import {Rating} from './Rating';
import {ToggleButtonGroupControlled} from './ToggleButtonGroupControlled';

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
                <h3>{this.props.title}</h3>
                {/* The way the selected answer and the rating are stored for each question */}
                {/* is by calling handler functions to set PoliticalForm's state */}
                <ToggleButtonGroupControlled id={this.props.id} answerHandlerFunction={this.props.answerHandlerFunction}/>
                <div className="ratingContainer">
                    <h4>¿Qué tanto te importa la pregunta?</h4>
                    <Rating id={this.props.id} value={this.props.ratings[this.props.id]} ratingHandlerFunction={this.props.ratingHandlerFunction} />
                </div>
            </div>
        )
    }
}