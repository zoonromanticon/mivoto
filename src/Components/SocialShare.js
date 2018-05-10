import React from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import {
    FacebookShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    FacebookIcon,
    TwitterIcon,
    WhatsappIcon,
  } from 'react-share';

const shareUrl = "mivoto.io/results?answers="
const title = "Share"

export class SocialShare extends React.Component {
    
    render () {
        return (
            <div>
            <h3>Comparte tus resultados en:</h3>
            <Grid>
                <Row className="shareButtonsContainer">
                    <Col md={4} >
                        <FacebookShareButton
                            url={shareUrl+this.props.answers}
                            quote={title}
                            className="shareButton grow">
                            <FacebookIcon
                            size={48}
                            round />
                        </FacebookShareButton>
                    </Col>
                    <Col md={4} >
                        <TwitterShareButton
                            url={shareUrl+this.props.answers}
                            quote={title}
                            className="shareButton grow">
                            <TwitterIcon
                            size={48}
                            round />
                        </TwitterShareButton>
                    </Col>
                    <Col md={4} >
                        <WhatsappShareButton
                            url={shareUrl+this.props.answers}
                            quote={title}
                            className="shareButton grow">
                            <WhatsappIcon
                            size={48}
                            round />
                        </WhatsappShareButton>
                    </Col>
                </Row>
          </Grid>
          </div>
        )
    }
}