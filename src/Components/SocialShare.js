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

const shareUrl = "https://mivoto.surge.sh"
const title = "Estos son mis resultados de afinidad frente a candidatos:\n"
var results = ""

export class SocialShare extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: '',
        }; 
    }

    componentWillMount () {
        var that=this;
        results = ""
        this.props.vAnalysis.forEach(function(candidate,index) { 
            results += candidate[1][1]+': '+(Math.floor((candidate[1][0]+that.props.rux)*100)/100).toString()+'%\n'
        })
        this.setState({results:title+results+'\n'})
    }
    
    render () {
        return (
            <div>
            <h3>Comparte tus resultados en:</h3>
            <Grid>
                <Row className="shareButtonsContainer">
                    <Col md={4} >
                        <FacebookShareButton
                            url={shareUrl}
                            quote={this.state.results}
                            className="shareButton grow">
                            <FacebookIcon
                            size={48}
                            round />
                        </FacebookShareButton>
                    </Col>
                    <Col md={4} >
                        <TwitterShareButton
                            url={shareUrl}
                            title={this.state.results}
                            className="shareButton grow">
                            <TwitterIcon
                            size={48}
                            round />
                        </TwitterShareButton>
                    </Col>
                    <Col md={4} >
                        <WhatsappShareButton
                            url={shareUrl}
                            separator=''
                            title={this.state.results}
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