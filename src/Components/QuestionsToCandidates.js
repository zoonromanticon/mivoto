// QuestionToCandidates renders the optional questions to the candidates, with corresponding
// tweet buttons. The via part of the tweet actually comes from shareUrl, which is automatically 
// postpended to the tweet

import React from 'react';
import {
    TwitterShareButton,
    TwitterIcon,
} from 'react-share';

const shareUrl = "mivoto.surge.sh" //Doesn't show up because it lacks the https:// NICE WAY TO HIDE THE URL FOR TWITTER! 

export class QuestionsToCandidates extends React.Component {
    
    render () {
        return (
        <div className="question">
            <h2>Presiona el ícono de la pregunta que quieras tweetear:</h2>
            <br/>
            <br/>
            <div className="tableContainer">
                <div style={{paddingBottom:'2%'}} className="left tableContainer">
                    <TwitterShareButton
                    style={{width: '60px', margin:'auto', paddingBottom:'2%'}}
                    url={shareUrl}
                    title={`.@${this.props.highestAffinityHashTag} ${this.props.highestAffinityQuestion} #DebatesCiudadanos via:`}
                    className="shareSquareButton">
                    <TwitterIcon
                    size={60}
                    logoFillColor='black'
                    />
                    </TwitterShareButton>
                    <p style={{fontSize:'130%', paddingLeft:'10px'}}><i>{this.props.highestAffinityQuestion} para <strong>@{this.props.highestAffinityHashTag}</strong></i></p>
                    
                </div>
                <div style={{paddingBottom:'2%'}} className="right tableContainer">
                    <TwitterShareButton
                    style={{width: '60px', margin:'auto', paddingBottom:'2%'}}
                    url={shareUrl}
                    title={`.@${this.props.lowestAffinityHashTag} ${this.props.lowestAffinityQuestion} #DebatesCiudadanos via:`}
                    className="shareSquareButton">
                    <TwitterIcon
                    size={60}
                    logoFillColor='black'
                    />
                    </TwitterShareButton>
                    <p style={{fontSize:'130%', paddingLeft:'10px'}}><i>{this.props.lowestAffinityQuestion} para <strong>@{this.props.lowestAffinityHashTag}</strong></i></p>
                </div>
            </div>
        </div>
        )
    }
}