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
                        <ResponsiveEmbed a16by9>
                            <embed type="image/jpg" src={this.props.pic} />
                        </ResponsiveEmbed>
                    </div>;
                </Col>
                <Col md={9} mdPull={6}>
                    <h4>{this.props.name}</h4>
                    <h5>{this.props.party}</h5>
                    <h6>TU MAYOR AFINIDAD CON ÉL ES EN: {this.props.common}</h6>
                </Col>
            </Row>
            </Grid>
        )
    }
}