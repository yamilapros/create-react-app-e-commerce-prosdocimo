import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './ItemDetail.css'
import Counter from '../Counter/Counter'


const ItemDetail = ({producto}) => {
    return (
        <Row >
            <Col lg="6">
                <img src={producto.image} alt={producto.name}/>
            </Col>
            <Col lg="6" className="card-details-text">
                <h2>{producto.name}</h2>
                <small>Producto no.: {producto.id}</small>
                <div className="availability">En Stock</div>
                <h3>{producto.price}&euro;</h3>
                <h4>Descripción Breve: </h4>
                <p>{producto.description}</p>
                <Counter />
                <button><i class="fas fa-cart-plus"></i>&nbsp;&nbsp;Añadir a la cesta</button>
            </Col>
        </Row>
    )
}

export default ItemDetail
