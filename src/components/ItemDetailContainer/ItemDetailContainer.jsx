import React from 'react'
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail';
import { db } from '../../Firebase/firebase';
import { doc, getDoc, data } from 'firebase/firestore';



const ItemDetailContainer = () => {
    const { idProducto } = useParams()
    const [item, setItem] = useState({})

    
    useEffect(() => {
        const getProductById = async () => {
            const docRef = doc(db, "productos", idProducto);
            const docSnap = await getDoc(docRef);
            setItem({...docSnap.data(), id: docSnap.id})
        }
        getProductById()
    }, [idProducto, item])

    
    return (
        <Container fluid className="d-flex justify-content-center">
            <Row className="d-flex justify-content-center">
                <Col lg="10">
                    {<ItemDetail producto={item}/>}
                </Col>
            </Row>
        </Container>
    )
}

export default ItemDetailContainer
