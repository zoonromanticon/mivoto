import React from 'react';
import { Navbar } from 'react-bootstrap';

export class Footer extends React.Component {
    render () {
        return (
            <div>
            <Navbar style={{color:'white'}} inverse >
            <Navbar.Header>
                mivoto.io versión alfa 0.4 ‘MVP release’. mivoto.io no tiene ninguna afiliación política y está desarrollado por ciudadanos mexicanos y por capital privado. Queremos conocer cualquier feedback o aclaración, escríbenos a: mivoto.feedback@gmail.com
            </Navbar.Header>
            </Navbar>
            </div>
        )
    }
}