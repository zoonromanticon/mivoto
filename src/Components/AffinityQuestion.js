// The AffinityQuestion component is used to render a button group from which the user may choose
// a candidate of preference, this adds a bias to the results for that particular candidate. The
// computation of the bias is done in the Python Backend, but the signal about which candidate was
// chosen is sent inside the HTTP request. This component behaves in a very similar fashion to
// ToggleButtonGroupControlled, but its management is simpler because only one component is created,
// so its more easly controlled by the parent PoliticalForm component

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
              <ToggleButton className="grow" bsSize="large" style={{backgroundColor:'rgba(176,35,42,1)', color:'white', fontFamily:'monospace', fontSize:'130%'}} bsStyle="info" value={1}> Andres Manuel López Obrador</ToggleButton>
              <ToggleButton className="grow" bsSize="large" style={{color:'white', fontFamily:'monospace', fontSize:'130%'}} bsStyle="info" value={2}> Jaime Rodríguez "El Bronco"</ToggleButton>
              <ToggleButton className="grow" bsSize="large" style={{color:'white', fontFamily:'monospace', fontSize:'130%'}} bsStyle="danger" value={3}> José Antonio Meade</ToggleButton>
              <ToggleButton className="grow" bsSize="large" style={{color:'white', fontFamily:'monospace', fontSize:'130%'}} bsStyle="primary" value={4}> Ricardo Anaya</ToggleButton>
              {/* <h3>{this.state.value}</h3> */}
          </ToggleButtonGroup>
        </div>
      );
    }
  }