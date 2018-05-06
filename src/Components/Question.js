import React from 'react';
// import { Jumbotron } from 'react-bootstrap';
import {ToggleButtonGroupControlled} from './ToggleButtonGroupControlled';

export class Question extends React.Component {
    render() {
        return (
            <div className="question">
                <h4>{this.props.title}</h4>
            <ToggleButtonGroupControlled id={this.props.id} handler={this.props.handler}/>
            </div>
        )
    }
}