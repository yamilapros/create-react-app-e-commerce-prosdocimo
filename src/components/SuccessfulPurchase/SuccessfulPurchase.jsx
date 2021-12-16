import React from 'react'
import './SuccessfulPurchase.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const SuccessfulPurchase = ({idOrder}) => {
    return (
        <div>
            <Container fluid>
                <Row className="d-flex justify-content-center">
                    <Col lg="6" className="successful-purchase">
                        <img className='successful-purchase__image' src="https://cdn-icons-png.flaticon.com/512/914/914832.png" alt="" />
                        <h1 className='successful-purchase__title'>Compra exitosa</h1>
                        <h3>Tus datos han sido recibidos con éxito</h3>
                        <p>Mira a continuación tu número de pedido asignado y el tiempo de espera estimado para tu envío</p>
                        <h4 className='successful-purchase__data'>Número de Pedido: <span className="light-blue">{idOrder}</span></h4>
                        <h4 className='successful-purchase__data'>Tiempo de entrega: <span className="light-blue">Entre 11 y 13 días hábiles</span></h4>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SuccessfulPurchase
