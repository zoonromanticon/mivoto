import React from 'react';
import {Candidate} from './Candidate';
// import { } from 'react-bootstrap';

const candidatesInfo = [
    [
        'Andrés Manuel López Obrador',
        'JUNTOS HAREMOS HISTORIA (MORENA-PT-PES)',
        'X cosa',
        'https://pbs.twimg.com/profile_images/941387100095635456/CmULmyyk_400x400.jpg',
    ],
    [
        'Ricardo Anaya',
        'POR MEXICO, AL FRENTE (PAN-PRD-MC)',
        'X cosa',
        'https://pbs.twimg.com/profile_images/696899956712435712/IPsP1eSj_400x400.jpg',
    ],
    [
        'José Antonio Meade',
        'TODOS POR MÉXICO (PRI-PVEM-PANAL)',
        'X cosa',
        'https://pbs.twimg.com/profile_images/979597895111294976/CAsjaezd_400x400.jpg',
    ],
    [
        'Margarita Zavala',
        'INDEPENDIENTE',
        'X cosa',
        'https://pbs.twimg.com/profile_images/991300977977430017/2JkiB-Lw_400x400.jpg',
    ],
    [
        'Jaime Rodríguez',
        'INDEPENDIENTE',
        'X cosa',
        'https://pbs.twimg.com/profile_images/956363270000017408/OA0M9pWj_400x400.jpg'
    ]
]

export class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tst: false,
        };
      }
    
    render () {
        return (
        <div>
             {candidatesInfo.map((candidate, index) => <Candidate id={index} key={index} name={candidate[0]} party={candidate[1]} common={candidate[2]} pic={candidate[3]}/>
                )}

        </div>
        )
    }
}