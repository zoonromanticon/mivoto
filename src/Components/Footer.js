import React from 'react';
import { Navbar } from 'react-bootstrap';
import ReactTooltip from 'react-tooltip'

export class Footer extends React.Component {
    render () {
        return (
            <div className='grow' data-tip="hello world">
            <ReactTooltip className="tooltip" type="warning"/>
            <Navbar style={{color:'white'}} inverse >
            <Navbar.Header>
                mivoto.io versión alfa 0.3 ‘MVP release’. mivoto.io no tiene ninguna afiliación política y está desarrollado por ciudadanos mexicanos y por capital privado. Queremos conocer cualquier feedback o aclaración, escríbenos a: mivoto.feedback@gmail.com
            </Navbar.Header>
            </Navbar>
            </div>
        )
    }
}