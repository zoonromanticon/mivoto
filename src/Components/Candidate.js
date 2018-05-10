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
            <Grid>
            <Row className="show-grid">
                <Col md={3} >
                    <div style={{height: 'auto', width: 'auto' }}>
                        <ResponsiveEmbed a4by3 className="picture grow">
                            <embed type="image/jpg" src={this.props.pic} />
                        </ResponsiveEmbed>
                    </div>
                </Col>
                <Col md={1} >
                    <div style={{height: 'auto', width: 'auto' }}>
                        <h1>{Math.floor( (this.props.affinity+this.props.rux) * 100) / 100}</h1>
                    </div>
                </Col>
                <Col md={6}>
                    <div className="description" style={{height: 'auto', width: 'auto' }}>
                        <h4>{this.props.name}</h4>
                        <h5>{this.props.party}</h5>
                        <h5>Tu mayor afinidad es: {this.props.common}</h5>
                    </div>
                </Col>
                <Col md={2}>
                    ELECCIÓN
                </Col>
            </Row>
            </Grid>
        )
    }
}