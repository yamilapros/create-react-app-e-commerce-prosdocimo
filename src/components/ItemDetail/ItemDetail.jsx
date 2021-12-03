import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './ItemDetail.css'
import Counter from '../Counter/Counter'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { useState } from 'react';
import { Link } from 'react-router-dom'


const ItemDetail = ({producto}) => {
    const { addItem, cartList } = useContext(CartContext)
    const [counter, setCounter] = useState(1)
    const [textButton, setTextButton] = useState('select')

    const addToCart = () => {
        const resultado = cartList.filter(el => el.id === producto.id)
        if(resultado.length === 0){
            addItem({ ...producto, quantity: counter })
            setTextButton('cart')
        }else{
            return
        }
        
    }

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
                <Counter counter={counter} setCounter={setCounter}/>
                {
                    textButton === 'cart'
                    ?
                    <Link to={'/cart'}>
                        <button className="btn-dark"><i className="fas fa-cart-plus"></i>&nbsp;&nbsp;Terminar mi compra</button>
                    </Link>
                    :
                    <button onClick={addToCart}><i className="fas fa-cart-plus"></i>&nbsp;&nbsp;Añadir a la cesta</button>
                }
            </Col>
        </Row>
    )
}

export default ItemDetail
