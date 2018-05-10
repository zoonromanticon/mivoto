import React from 'react';
import {Candidate} from './Candidate';
import {SocialShare} from './SocialShare';

export class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tst: false,
        };
      }

    componentWillMount() {
        console.log(this.props.vAnalysis, this.props.rux)
    }
    
    render () {
        return (
        <div className="question">
            {this.props.vAnalysis.map((candidate, index) => <Candidate id={index} key={index} rux={this.props.rux} affinity={candidate[1][0]} name={candidate[1][1]} party={candidate[1][2]} common={candidate[1][3]} pic={candidate[1][4]}/>)}
            <SocialShare answers={this.props.answers}/>
        </div>
        )
    }
}