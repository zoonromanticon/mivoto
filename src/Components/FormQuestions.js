// FormQuestions is a component that renders all 40 statements (each statement rendered by a Question component call),
// including a title for each category introduced. Also, it renders the affinity question afterwards

import React from 'react';
import {Question} from './Question';
import {AffinityQuestion} from './AffinityQuestion';

var questionIndex = 0

export class FormQuestions extends React.Component {
    render() {
        return (
            <div>
                {/* By iterating over the keys of the data prop, we have access to the category names */}
                {Object.keys(this.props.data).map((category, index) =>
                    (   
                        <div key={index}>
                        <h4 style={{textAlign:'left',  width:'99%', fontFamily:'monospace', fontWeight:'bold'}}>{category}</h4>
                        {/* Each category consists of a series of statements, each of which is rendered by a Question component */}
                        {this.props.data[category]['questions'].map((question, index) => 
                            (   <div key={questionIndex}>
                                    <Question id={questionIndex} key={questionIndex} title={question} answerHandlerFunction={this.props.answerHandlerFunction} ratingHandlerFunction={this.props.ratingHandlerFunction} ratings={this.props.ratings}/>
                                    <br/>
                                    {/* The questionIndex variable should be raised for each component created */}
                                    <p style={{visibility: 'hidden'}}>{questionIndex++ && false}</p>
                                </div>
                            )
                        )}
                        </div>   
                    )
                )}
                {/* TODO: Next line is very important to reset the counter because the component refreshes each time the user chooses an answer. BTW, find a better solution */}
                <p style={{visibility: 'hidden'}}>{questionIndex=0}</p>
                {/* The last question is different so another component is used */}
                <AffinityQuestion affinityQuestionHandlerFunction={this.props.affinityQuestionHandlerFunction}/>
            </div>
            )
    }
}