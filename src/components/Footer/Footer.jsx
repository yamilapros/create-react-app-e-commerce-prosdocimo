import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Footer.css'

const Footer = () => {
    return (
        <Container fluid className='footer'>
            <Row>
                <Col>
                    <h4>SLAPPY</h4>
                    <p>Skateboard & Co. 2021</p>
                </Col>
                <Col>
                    <i class="fas fa-map-marker-alt"></i>
                    <p>Pl. de Catalunya, 5</p>
                    <p>08002</p>
                    <p>Barcelona, España</p>
                </Col>
                <Col>
                    <i class="fas fa-phone-volume"></i>&nbsp;
                    <i class="far fa-envelope-open"></i>
                    <p>932 70 24 55</p>
                    <p>slappy@slappy.com</p>
                </Col>
                <Col>
                    <h4>Síguenos</h4>
                    <div className="social">
                        <i class="fab fa-facebook-square"></i>&nbsp;
                        <i class="fab fa-instagram"></i>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer
