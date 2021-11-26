import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './NotFound.css'

const NotFound = () => {
    return (
        <Container>
            <Row>
                <Col lg="7">
                    <img src={'https://cdn.skatedeluxe.com/images/content/404/191021-404-error.gif'} alt={'Not Found'} />
                </Col>
                <Col lg="5" className="not-found-col">
                    <h2>404 NOT FOUND</h2>
                    <h4>Ops...La página que buscas no ha sido encontrada</h4>
                </Col>
            </Row>
        </Container>
    )
}

export default NotFound
