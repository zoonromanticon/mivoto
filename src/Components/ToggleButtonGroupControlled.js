// ToggleButtonGroupControlled exposes the five buttons the user selects from for each question
// The value of each instance is controlled directly from PoliticalForm, by means of handler function calls

import React from 'react';
import {ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import '../App.css';

export class ToggleButtonGroupControlled extends React.Component {
    constructor(props, context) {
      super(props, context);
      this.handleChange = this.handleChange.bind(this);
  
      this.state = {
        value: []
      };
    }
  
    handleChange(e) {
      this.props.answerHandlerFunction(e, this.props.id);
      this.setState({ value: e });
    }
  
    render() {
      return (
        <ToggleButtonGroup
          vertical
          block
          type="radio" name="options"
          value={this.state.value}
          onChange={this.handleChange}
        >
          <ToggleButton className="grow" bsSize="large" style={{backgroundColor:'#398e52', color:'white', fontFamily:'monospace', fontSize:'160%'}} bsStyle="info" value={1}> Totalmente de acuerdo</ToggleButton>
          <ToggleButton className="grow" bsSize="large" style={{backgroundColor:'#54b799', color:'white', fontFamily:'monospace', fontSize:'160%'}} bsStyle="info" value={2}> De acuerdo</ToggleButton>
          <ToggleButton className="grow" bsSize="large" style={{backgroundColor:'#484349', color:'white', fontFamily:'monospace', fontSize:'160%'}} bsStyle="default" value={3}> Neutral</ToggleButton>
          <ToggleButton className="grow" bsSize="large" style={{backgroundColor:'#e88d43', color:'white', fontFamily:'monospace', fontSize:'160%'}} bsStyle="success" value={4}> En desacuerdo</ToggleButton>
          <ToggleButton className="grow" bsSize="large" style={{backgroundColor:'#e25b46', color:'white', fontFamily:'monospace', fontSize:'160%'}} bsStyle="danger" value={5}> Totalmente en desacuerdo</ToggleButton>
          {/* <h3>{this.state.value}</h3> */}
        </ToggleButtonGroup>
      );
    }
  }