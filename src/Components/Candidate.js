// The Candidate component is used to render the result relative to each of the four candidates

import React from 'react';
import { Grid, Col, Row, ResponsiveEmbed } from 'react-bootstrap';

export class Candidate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tst: false,
        };
      }
    
    render () {
        return (
            <Grid className="growDark">
            <br/>
            <Row className="show-grid" style={{verticalAlign: 'center !important'}}>
                <Col md={4} >
                    <div style={{height: 'auto', width: 'auto' }}>
                        {/* A picture of the candidate, passed down as a prop */}
                        <ResponsiveEmbed a4by3 className="picture">
                            <embed type="image/jpg" src={this.props.pic} />
                        </ResponsiveEmbed>
                    </div>
                </Col>
                <Col md={2} >
                    <div style={{
                      textAlign: 'center !important',
                      display: 'flex !important',
                      alignItems: 'center !important',
                      backgroundColor: 'blue !important',
                }}>     
                        {/* The affinity level is computed using props. The same logic explained in the PoliticalForm component is followed */}
                        <h1>{Math.floor( (this.props.affinity+this.props.rux) * 100) / 100}%</h1>
                    </div>
                </Col>
                <Col md={6}>
                    <div className="description" style={{height: 'auto', width: 'auto' }}>
                        {/* Relevant information is shown to the user */}
                        <h3>{this.props.name}</h3>
                        <h4>{this.props.party}</h4>
                        <h4>Tu mayor afinidad es: </h4><h4 style={{fontWeight: 'bold'}}>{this.props.categoryOfMaxAffinity}</h4>
                        <h4>Tu menor afinidad es: </h4><h4 style={{fontWeight: 'bold'}}>{this.props.categoryOfMinAffinity}</h4>
                    </div>
                </Col>
            </Row>
            <br/>
            </Grid>
        )
    }
}