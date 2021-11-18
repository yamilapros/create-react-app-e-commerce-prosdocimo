import React from 'react'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './Item.css'

const Item = ({product}) => {
    /* console.log('Product', product) */
    return (
        <Col className="col"  lg={3}>
            <Card>
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                    <span className="card-price">{product.price}&euro;</span>
                    </Card.Text>
                    <Button className="btn-store"><i class="far fa-eye"></i>&nbsp;Detalles</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Item
