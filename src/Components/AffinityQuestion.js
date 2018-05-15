import React from 'react';
import {ToggleButton, ToggleButtonGroup } from 'react-bootstrap';

export class AffinityQuestion extends React.Component {
    constructor(props, context) {
        super(props, context);
    
        this.handleChange = this.handleChange.bind(this);
    
        this.state = {
          value: []
        };
      }
    
      handleChange(e) {
        this.props.affinityQuestionHandlerFunction(e);
        this.setState({ value: e });
      }
    
      render() {
        return (
          <div className="question">
            <h3>¿Con qué candidato te sientes más identificado?</h3>
            <ToggleButtonGroup
                vertical
                block
                type="radio" name="options"
                value={this.state.value}
                onChange={this.handleChange}
            >
                <ToggleButton className="grow" bsSize="large" style={{color:'white', fontFamily:'monospace', fontSize:'160%'}} bsStyle="info" value={1}> Andres Manuel López Obrador</ToggleButton>
                <ToggleButton className="grow" bsSize="large" style={{color:'white', fontFamily:'monospace', fontSize:'160%'}} bsStyle="warning" value={2}> Jaime Rodríguez "El Bronco"</ToggleButton>
                <ToggleButton className="grow" bsSize="large" style={{color:'white', fontFamily:'monospace', fontSize:'160%'}} bsStyle="primary" value={3}> José Antonio Meade</ToggleButton>
                <ToggleButton className="grow" bsSize="large" style={{color:'white', fontFamily:'monospace', fontSize:'160%'}} bsStyle="success" value={4}> Margarita Zavala</ToggleButton>
                <ToggleButton className="grow" bsSize="large" style={{color:'white', fontFamily:'monospace', fontSize:'160%'}} bsStyle="danger" value={5}> Ricardo Anaya</ToggleButton>
                {/* <h3>{this.state.value}</h3> */}
            </ToggleButtonGroup>
          </div>
        );
      }
    }