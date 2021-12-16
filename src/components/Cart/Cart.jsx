import React from 'react'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Cart.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom';


const Cart = () => {
    const { cartList, clear, removeItem, subtotalProduct, totalToPay } = useContext(CartContext)
    

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
            
            <Container fluid>
                <Row>
                    <Col lg="12">
                        <h1 className='main-title__cart'>Cesta</h1>
                    </Col>
                </Row>
                <Row>
                    <Col lg="9">
                        <div className='table-order'>
                            <div className="table-order__head">
                                <div className="table-order__head-column table-order__colum-1">

                                </div>
                                <div className="table-order__head-column table-order__column-2">
                                    Nombre del Producto
                                </div>
                                <div className="table-order__head-column table-order__colum-1">
                                    Precio
                                </div>
                                <div className="table-order__head-column table-order__colum-1">
                                    Cantidad
                                </div>
                                <div className="table-order__head-column table-order__colum-1">
                                    Subtotal
                                </div>
                                <div className="table-order__head-column table-order__colum-1">
                                    
                                </div>
                            </div>
                            {cartList.map(item => 
                            <div className="table-order__body" key={item.id}>
                                
                                <div className="table-order__body-column table-order__colum-1 table-order__image">
                                    <img className="table-order-image" src={item.image} />
                                </div>
                                <div className="table-order__body-column table-order__column-2 table-order__text">
                                    {item.name}
                                </div>
                                <div className="table-order__body-column table-order__colum-1 table-order__price">
                                    {parseFloat(Math.round(item.price * 100) / 100).toFixed(2)}&euro;
                                </div>
                                <div className="table-order__body-column table-order__colum-1">
                                    <span className='show-mobile-text'>Cantidad:</span>{item.quantity}
                                </div>
                                <div className="table-order__body-column table-order__colum-1 table-order__total">
                                    <span className='show-mobile-text'>Subtotal:</span>{subtotalProduct(item.price, item.quantity)}&euro;
                                </div>
                                <div className="table-order__body-column table-order__colum-1 table-order__trash">
                                    <i onClick={()=> {removeItem(item.id)}} class="far fa-trash-alt"></i>
                                </div>
                            </div>
                            )}
                        </div>
                        <div className="btn-section">
                            <Link to={'/'}>
                                <button  className="btn-white" >Continuar comprando</button>
                            </Link>
                            <button className="btn-white btn-delete" onClick={clear}>Vaciar Carrito</button>
                        </div>
                        
                    </Col>
                    <Col lg="3">
                        <div className="wrapper-cart__total">
                            <h5>Total</h5>
                            <h4>Suma total: <span className='red'>{totalToPay()}&euro;</span></h4>
                            <Link to={'/order'}>
                                <button className="btn-white btn-success">Realizar Pedido</button>
                            </Link>
                            
                        </div>
                    </Col>
                </Row>
            </Container>
            
        }
        
        </div>
        
    )
}

export default Cart
