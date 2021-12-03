import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import CartWidget from './../CartWidget/CartWidget';
import './NavBar.css'
import { NavLink } from 'react-router-dom';


const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="white" variant="light" className="nav-bar">
            <Container>
            <Navbar.Brand as={NavLink} to={'/'}>
      <img
        src={'https://cdn.shopify.com/s/files/1/0146/5375/1344/files/logo_540x.jpg?v=1554141532'}
        width="180"
        height="auto"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link as={NavLink} to={'/categoria/camisetas'} className="item-menu">Camisetas</Nav.Link>
                        <Nav.Link as={NavLink} to={'categoria/sudaderas'} className="item-menu">Sudaderas</Nav.Link>
                        <Nav.Link as={NavLink} to={'categoria/chaquetas'} className="item-menu">Chaquetas</Nav.Link>
                        <Nav.Link as={NavLink} to={'categoria/pantalones'} className="item-menu">Pantalones</Nav.Link>
                        <Nav.Link as={NavLink} to={'categoria/skateboarding'} className="item-menu">Skateboarding</Nav.Link>
                        <Nav.Link as={NavLink} to={'categoria/calzado'} className="item-menu">Calzado</Nav.Link>
                        <Nav.Link as={NavLink} to={'categoria/complementos'} className="item-menu">Complementos</Nav.Link>
                    </Nav>
                    <Nav>
                    <Nav.Link><CartWidget /></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar
