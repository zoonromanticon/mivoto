import React from 'react';
import {Question} from './Question';

var questionIndex = 0

export class FormQuestions extends React.Component {
    render() {
        return (
            <div>
                {Object.keys(this.props.data).map((category, index) =>
                    (   
                        <div key={index}>
                        <h1>{category}</h1>
                        {this.props.data[category]['questions'].map((question, index) => 
                            (   <div key={questionIndex}>
                                    <Question id={questionIndex} key={questionIndex} title={question} answerHandlerFunction={this.props.answerHandlerFunction} ratingHandlerFunction={this.props.ratingHandlerFunction} rating={this.props.rating}/>
                                    <br/>
                                    {questionIndex++ && false}
                                </div>
                            )
                        )}
                        </div>   
                    )
                )}
                {/* Next line is important to reset the counter because the component refreshes each time the user chooses an answer. BTW, find a better solution */}
                <p style={{visibility: 'hidden'}}>{questionIndex=0}</p>
            </div>
            )
    }
}