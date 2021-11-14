import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import CartWidget from './../CartWidget/CartWidget';
import './NavBar.css'


const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="white" variant="light" className="nav-bar">
            <Container>
            <Navbar.Brand href="#home">
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
                    <Nav.Link href="#features" className="item-menu">Hombre</Nav.Link>
                    <Nav.Link href="#pricing" className="item-menu">Mujer</Nav.Link>
                    <Nav.Link href="#pricing" className="item-menu">Niño</Nav.Link>
                    <Nav.Link href="#pricing" className="item-menu">Calzado</Nav.Link>
                    <Nav.Link href="#pricing" className="item-menu">Skateboarding</Nav.Link>
                    <Nav.Link href="#pricing" className="item-menu">Novedades</Nav.Link>
                    <Nav.Link href="#pricing" className="item-menu">Outlet</Nav.Link>
                    <Nav.Link href="#pricing" className="item-menu">Marcas</Nav.Link>
                    </Nav>
                    <Nav>
                    <Nav.Link href="#deets"><CartWidget /></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar
