import React from 'react';
import {Question} from './Question';
import {AffinityQuestion} from './AffinityQuestion';

var questionIndex = 0

export class FormQuestions extends React.Component {
    render() {
        return (
            <div>
                {Object.keys(this.props.data).map((category, index) =>
                    (   
                        <div key={index}>
                        <h4 style={{textAlign:'left',  width:'99%', fontFamily:'monospace', fontWeight:'bold'}}>{category}</h4>
                        {this.props.data[category]['questions'].map((question, index) => 
                            (   <div key={questionIndex}>
                                    <Question id={questionIndex} key={questionIndex} title={question} answerHandlerFunction={this.props.answerHandlerFunction} ratingHandlerFunction={this.props.ratingHandlerFunction} ratings={this.props.ratings}/>
                                    <br/>
                                    <p style={{visibility: 'hidden'}}>{questionIndex++ && false}</p>
                                </div>
                            )
                        )}
                        </div>   
                    )
                )}
                {/* Next line is very important to reset the counter because the component refreshes each time the user chooses an answer. BTW, find a better solution */}
                <p style={{visibility: 'hidden'}}>{questionIndex=0}</p>
                {/* The last question is different so another component is used */}
                <AffinityQuestion affinityQuestionHandlerFunction={this.props.affinityQuestionHandlerFunction}/>
            </div>
            )
    }
}