import React from 'react'
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './ItemListContainer.css'
import { getData } from '../../helpers/getData';
import ItemList from '../ItemList/ItemList';
import Loader from './../Loader/Loader';

const ItemListContainer = ({title}) => {
    //Variables
    const [data, setData] = useState([])
    const [loader, setLoader] = useState(true)

    //Fetch - LLamada a la API
    useEffect(() => {
        getData
        .then(res => setData(res))
        .catch(err => console.log(err))
        .finally(() => setLoader(false))
    }, [])
    
    console.log(data)
    return (
        <main>
            <Container fluid className="d-flex justify-content-center">
                <Row className="d-flex justify-content-center">
                    <Col lg="11">

                        <h1>{title}</h1>
                        {loader ? <Loader/> : <ItemList products={data}/>}
                    </Col>
                </Row>
            </Container>
        </main>
    )
}

export default ItemListContainer