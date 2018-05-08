import React from 'react';
import ReactStars from 'react-stars'
import {ToggleButtonGroupControlled} from './ToggleButtonGroupControlled';

export class Question extends React.Component {

    ratingChanged(e) {
        console.log(e)
    }

    render() {
        return (
            <div className="question">
                <h4>{this.props.title}</h4>
                <ToggleButtonGroupControlled id={this.props.id} handler={this.props.handler}/>
                <div className=".ratingContainer">
                    {/* TODO Place this on another component */}
                    <h4>¿Qué tanto te importa la pregunta?</h4>
                    <ReactStars
                        half={false}
                        count={3}
                        onChange={this.ratingChanged}
                        size={24}
                        color2={'#ffd700'}
                    />
                </div>
            </div>
        )
    }
}