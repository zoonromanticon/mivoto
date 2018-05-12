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
                <ToggleButtonGroupControlled id={this.props.id} answerHandlerFunction={this.props.answerHandlerFunction}/>
                <div className="ratingContainer">
                    <h4>¿Qué tanto te importa la pregunta?</h4>
                    <Rating id={this.props.id} value={this.props.ratings[this.props.id]} ratingHandlerFunction={this.props.ratingHandlerFunction} />
                </div>
            </div>
        )
    }
}