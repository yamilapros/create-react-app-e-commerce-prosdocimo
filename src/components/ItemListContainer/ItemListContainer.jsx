import React from 'react'
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList';
import Loader from './../Loader/Loader';
import Hero from './../Hero/Hero';
import { useParams } from 'react-router-dom';
import { db } from '../../Firebase/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';


const ItemListContainer = ({title}) => {
    //Variables
    const [data, setData] = useState([])
    const [loader, setLoader] = useState(true)
    const { idCategoria } = useParams()

    
    //useEffect Hook
    useEffect(() => {
        if(idCategoria){
            const getProductsByCategory = async () => {
                const q = query(collection(db, "productos"), where("category", "==", idCategoria));
                const dataCollection = await getDocs(q)
                /* console.log(dataCollection) */
                setData(dataCollection.docs.map((doc) => ({...doc.data(), id: doc.id})))
                setLoader(false)
            }
            getProductsByCategory()
        }else{
            const getProducts = async () => {
                const productsCollectionRef = collection(db, "productos")
                const dataCollection = await getDocs(productsCollectionRef)
                /* console.log(dataCollection) */
                setData(dataCollection.docs.map((doc) => ({...doc.data(), id: doc.id})))
                setLoader(false)
            }
            getProducts()
        }
        
    }, [idCategoria])
    
    //Rendering
    return (
        <main>
            <Hero />
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
