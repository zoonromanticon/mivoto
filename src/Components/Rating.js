import React from 'react';
import ReactStars from 'react-stars'
import { Grid, Col, Row } from 'react-bootstrap';

export class Rating extends React.Component {
    constructor(props) {
        super(props);
        this.ratingChanged = this.ratingChanged.bind(this);
      }

    ratingChanged(e) {
        this.props.ratingHandlerFunction(e,this.props.id)
    }

    render() {
        return (
                    <Grid>
                        <Row className="show-grid">
                            <Col xs={3} sm={5} md={5} >
                            </Col>
                            <Col xs={6} sm={6} md={7} >
                                <div>
                                <ReactStars
                                    value={this.props.value}
                                    half={false}
                                    count={3}
                                    onChange={this.ratingChanged}
                                    size={48}
                                    color2={'#ffd700'}
                                />
                                </div>
                            </Col>
                        </Row>
                    </Grid>
        )
    }
}