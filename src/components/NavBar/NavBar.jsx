import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

function NavBar() {
    return (
        <header>
            <nav>
                <div className="brand">
                    <img src="/images/brand.png" alt="" />
                </div>
                <input type="checkbox" id="check"/>
                <label for="check" className="bar-btn">
                <i class="fas fa-bars"></i>
                </label>
                <ul className="nav-menu">
                    <li><a className="active">New</a></li>
                    <li><a>Hombre</a></li>
                    <li><a>Mujer</a></li>
                    <li><a>Niño</a></li>
                    <li><a>Skate</a></li>
                    <li><a>Marcas</a></li>
                    <li><a>Top</a></li>
                    <li><a>Outlet</a></li>
                    <CartWidget />
                </ul>
                
            </nav>
        </header>
    )
}

export default NavBar
