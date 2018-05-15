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
            <Row className="show-grid">
                <Col md={4} >
                    <div style={{height: 'auto', width: 'auto' }}>
                        <ResponsiveEmbed a4by3 className="picture grow">
                            <embed type="image/jpg" src={this.props.pic} />
                        </ResponsiveEmbed>
                    </div>
                </Col>
                <Col md={1} >
                    <div style={{
                      display: 'flex !important',
                      alignItems: 'center !important',
                      backgroundColor: 'blue !important',
                }}>
                        <h1>{Math.floor( (this.props.affinity+this.props.rux) * 100) / 100}%</h1>
                    </div>
                </Col>
                <Col md={5}>
                    <div className="description" style={{height: 'auto', width: 'auto' }}>
                        <h4>{this.props.name}</h4>
                        <h5>{this.props.party}</h5>
                        <h5>Tu mayor afinidad es: </h5><h5 style={{fontWeight: 'bold'}}>{this.props.categoryOfMaxAffinity}</h5>
                        <h5>Tu menor afinidad es: </h5><h5 style={{fontWeight: 'bold'}}>{this.props.categoryOfMinAffinity}</h5>
                    </div>
                </Col>
                <Col md={2}>
                    ELECCIÓN
                </Col>
            </Row>
            <br/>
            </Grid>
        )
    }
}