import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import SuccessfulPurchase from './../SuccessfulPurchase/SuccessfulPurchase';
import { useState, useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { db } from '../../Firebase/firebase';
import { collection, addDoc } from 'firebase/firestore';
import './Order.css';


function Error(msg) {
    return <p className='error'>{msg}</p>
}

function Order() {
    const { cartList, subtotalProduct, totalToPay, clear } = useContext(CartContext)
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [errorName, setErrorName] = useState(false)
    const [errorPhone, setErrorPhone] = useState(false)
    const [errorEmail, setErrorEmail] = useState(false)
    const [errorForm, setErrorForm] = useState(false)
    const [fields, setFields] = useState({name: false, phone: false, email: false})
    const [idOrder, setIdOrder] = useState('')
    const [orderSuccess, setOrderSuccess] = useState(false)

    const RegExpressions = {
        name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
        phone: /^[0-9]+$/i,
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    }

    const validateInput = (e) => {
        // eslint-disable-next-line default-case
        switch(e.target.name){
            case 'name':
                setName(e.target.value)
                validateField(RegExpressions.name, e.target, e.target.name)
                break;
            case 'phone':
                setPhone(e.target.value)
                validateField(RegExpressions.phone, e.target, e.target.name)
                break;
            case 'email':
                setEmail(e.target.value)
                validateField(RegExpressions.email, e.target, e.target.name)
                break;
        }
    }

    const validateField = (expression, input, field) => {
        if(expression.test(input.value) && input.value !== ''){
            if(field === 'name'){
                setErrorName(false)
                setFields({ ...fields, name: !fields.name });
            }else if(field === 'phone'){
                setErrorPhone(false)
                setFields({ ...fields, phone: !fields.phone });
            }else if(field === 'email'){
                setErrorEmail(false)
                setFields({ ...fields, email: !fields.email });
            }
            setErrorForm(false)
        }else{
            if(field === 'name'){
                setErrorName(true)
            }else if(field === 'phone'){
                setErrorPhone(true)
            }else if(field === 'email'){
                setErrorEmail(true)
            }
        }
    }

    const validateForm = (e) => {
        e.preventDefault()
        if(fields.name && fields.phone && fields.email){
            setErrorForm(false)
            createOrder()
        }else{
            setErrorForm(true)
            console.log('No valido')
            return
        }
    }

    const createOrder = () => {
        const order = {}
        order.buyer = {
            name: name,
            phone: phone,
            email: email
        }
        order.items = cartList.map(item => {
            const id = item.id
            const name = item.name
            const price = item.price * item.quantity

            return {id, name, price}   
        })
        order.total = parseFloat(totalToPay()).toFixed(2)
        sendOrderDB(order)
        
    }

    const sendOrderDB = async(order) => {
        try {
            const orderCollectionRef = collection(db, "orders")
            const res = await addDoc(orderCollectionRef, order)
            await res
            setIdOrder(res.id)
            setOrderSuccess(true)
            clear()
        } catch (error) {
            console.log('Error')
        } 
    }

    return (
        <div>
            {
               orderSuccess ?
               <SuccessfulPurchase idOrder={idOrder}/>
               :
                <Container fluid>
                <Row>
                    <h1 className='main-title__order'>Realizar pedido</h1>
                    <Col>
                        <div className="order-wrapper__formulario">
                            <h2>Datos de envío</h2>
                            <Form className='formulario' noValidate onSubmit={validateForm}>
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    value={name}
                                    onChange={validateInput}
                                />
                                {
                                    errorName ?
                                    Error('El campo nombre sólo acepta letras y es obligatorio')
                                    : ''
                                }
                                <Form.Label>Teléfono</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="phone"
                                    value={phone}
                                    onChange={validateInput}
                                />
                                {
                                    errorPhone ?
                                    Error('El campo teléfono sólo acepta números de 6 dígitos y es obligatorio')
                                    : ''
                                }
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={validateInput}
                                />
                                {
                                    errorEmail ?
                                    Error('El campo Email sólo acepta formato email y es obligatorio')
                                    : ''
                                }
                                {
                                    errorForm ?
                                    Error('Debes rellenar todos los campos del formulario')
                                    : ''
                                }
                                <Button type="submit" className='btn-success'>Confirmar Pedido</Button>
                            </Form>
                        </div>
                    </Col>
                    <Col>
                        <div className="order-wrapper__resume">
                            <h2>Resumen del pedido</h2>
                            <div className='resume-wrapper'>
                                <Card>
                                    <Card.Header className='resume-wrapper__card-header'>
                                        <div className="resume-wrapper__card-col-60">Producto</div>
                                        <div className="resume-wrapper__card-col-20">Cant.</div>
                                        <div className="resume-wrapper__card-col-20">Subtotal</div>
                                    </Card.Header>
                                    <ListGroup variant="flush">
                                        {cartList.map(item => {
                                            return <ListGroup.Item key={item.id} className='resume-wrapper__card-body'>
                                                <div className="resume-wrapper__card-col-60 resume-wrapper__card-image">
                                                    <img src={item.image} alt="" />
                                                    {item.name}
                                                </div>
                                                <div className="resume-wrapper__card-col-20">{item.quantity}</div>
                                                <div className="resume-wrapper__card-col-20">{subtotalProduct(item.price, item.quantity)}&euro;</div>
                                            </ListGroup.Item>
                                        })}
                                    </ListGroup>
                                    <Card.Header className='resume-wrapper__card-footer'>
                                        Suma Total: {totalToPay()}&euro;
                                    </Card.Header>
                                </Card>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            }
        </div>
    );
}

export default Order
