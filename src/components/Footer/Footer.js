import React from 'react';
import { Container, Row, Col, Nav, NavLink } from 'reactstrap';
import './Footer.css';

class Footer extends React.Component {
    render() {
        return(
           <Container fluid className="bg-primary FooterContainer">
               <Row >
                   <Col sm="4" xs="1"></Col>
                   <Col sm={{ size:4, offset:1 }} xs={{ size:"auto", offset:1 }}>
                      <Nav >
                          <NavLink href="#" className="NavText" >Test Link</NavLink>  <NavLink href="#" className="NavText" >Another Link</NavLink> 
                          <NavLink href="#" className="NavText" >And Another Link</NavLink>
                      </Nav>
                   </Col>
                   <Col sm="4" xs="1"></Col>
               </Row >
           </Container>
        );
    }
}

export default Footer;