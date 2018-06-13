// The Footer component serves as the footer for our app. 
// TODO: Beware that a Navbar was used because react-bootstrap doesn't include a footer so,
// when possible, either make your own or use something like the material components library

import React from 'react';
import { Navbar } from 'react-bootstrap';

export class Footer extends React.Component {
    render () {
        return (
            <div>
            <Navbar style={{color:'white'}} inverse >
            <Navbar.Header>
                mivoto.io versión beta 1.0 ‘not 2 bad release’. mivoto.io no tiene ninguna afiliación política y está desarrollado por ciudadanos mexicanos y por capital privado. Queremos conocer cualquier feedback o aclaración, escríbenos a: mivoto.feedback@gmail.com
            </Navbar.Header>
            </Navbar>
            </div>
        )
    }
}