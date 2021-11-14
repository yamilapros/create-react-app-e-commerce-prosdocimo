import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './Hero.css'

const Hero = () => {
    return (
        <Carousel className="hero-carousel">
            <Carousel.Item className="hero-carousel-item">
                <img
               
                src="https://deportesriesgo.com/wp-content/uploads/Mejor-ropa-de-skate.jpg"
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item className="hero-carousel-item">
                <img
               
                src="https://media.vogue.es/photos/5cc75ffe582658a23c73b594/master/w_1200,c_limit/tendencia_modelos_marcas_skater_supreme_vans_thrasher_otono_invierno_2016_212145090.jpg"
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item className="hero-carousel-item">
                <img
             
                src="https://dackscompany.com/blog/wp-content/uploads/2019/11/marcas-de-skate-streetwear-ropa.jpg"
                alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default Hero
