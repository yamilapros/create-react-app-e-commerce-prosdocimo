import React from 'react'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './Item.css'

const Item = ({product}) => {
    /* console.log('Product', product) */
    const { id, image, name, price } = product
    return (
        <Col className="col"  lg={3} key={id}>
            <Card>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                    <span className="card-price">{price}&euro;</span>
                    </Card.Text>
                    <Button className="btn-store"><i class="far fa-eye"></i>&nbsp;Detalles</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Item
