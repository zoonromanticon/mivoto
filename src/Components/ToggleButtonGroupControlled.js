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
          <ToggleButton className="grow" bsSize="large" style={{fontFamily:'monospace', fontSize:'160%'}} bsStyle="info" value={1}> Totalmente de acuerdo</ToggleButton>
          <ToggleButton className="grow" bsSize="large" style={{fontFamily:'monospace', fontSize:'160%'}} bsStyle="primary" value={2}> De acuerdo</ToggleButton>
          <ToggleButton className="grow" bsSize="large" style={{backgroundColor:'darkcyan', color:'white', fontFamily:'monospace', fontSize:'160%'}} bsStyle="default" value={3}> Neutral</ToggleButton>
          <ToggleButton className="grow" bsSize="large" style={{fontFamily:'monospace', fontSize:'160%'}} bsStyle="success" value={4}> En desacuerdo</ToggleButton>
          <ToggleButton className="grow" bsSize="large" style={{fontFamily:'monospace', fontSize:'160%'}} bsStyle="danger" value={5}> Totalmente en desacuerdo</ToggleButton>
          {/* <h3>{this.state.value}</h3> */}
        </ToggleButtonGroup>
      );
    }
  }