import React from 'react'
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Cart.css'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { NavLink, Link } from 'react-router-dom';


const Cart = () => {
    const { cartList, clear, removeItem } = useContext(CartContext)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        let temp = 0;
        if(cartList.length > 0){
            cartList.map(item => {
                temp = (temp + item.price)
                console.log(temp)
            })
            setTotal(parseFloat(Math.round(temp * 100) / 100).toFixed(2))
        }
    })
    return (
        <div>
        { cartList.length === 0 
            ?
            <Card className="card-cart" body>
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg>
                <h3>No tienes productos en la cesta</h3>
                <h6>Añade algo a la cesta</h6>
            </Card>
            :
            
            <Container>
                <Row>
                    <Col>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                <th></th>
                                <th>Nombre de Producto</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                                <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartList.map(item => 
                                    <tr key={item.id}>
                                    <td><img className="table-image" src={item.image} /></td>
                                    <td>{item.name}</td>
                                    <td>{parseFloat(Math.round(item.price * 100) / 100).toFixed(2)}&euro;</td>
                                    <td>{item.quantity}</td>
                                    <td><i onClick={()=> {removeItem(item.id)}} class="far fa-trash-alt"></i></td>
                                    </tr>)}
                            </tbody>
                        </Table>
                        <div className="btn-section">
                            <Link to={'/'}>
                                <button  className="btn-white" >Continuar comprando</button>
                            </Link>
                        <h4>Total a pagar: {total}&euro;</h4>
                        <button className="btn-white btn-delete" onClick={clear}>Vaciar Carrito</button>
                        </div>
                        
                    </Col>
                </Row>
            </Container>
            
        }
        
        </div>
        
    )
}

export default Cart
