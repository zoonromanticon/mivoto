import React from 'react';
import {Question} from './Question';

var questionIndex = 0

export class FormQuestions extends React.Component {
    render() {
        return (
            <div>
                {Object.keys(this.props.data).map((category, index) =>
                    (   
                        <div>
                        <h1>{category}</h1>
                        {this.props.data[category]['questions'].map((question, index) => 
                            (   <div>
                                    <Question id={questionIndex} key={questionIndex} title={question} handler={this.props.handlerFunction}/>
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