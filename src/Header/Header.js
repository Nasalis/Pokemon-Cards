import React, { useState } from 'react'

import './header.css'

import { Link } from 'react-router-dom';

export default function Header() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const style = {
        color: "#131313",
        textDecoration: "none",
    }

    return (
        <>
            <nav>
                <div className="navbar-container">
                    <h1>Pokedex</h1>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to="/" style={style} className="nav-links" onClick={closeMobileMenu}>
                                <h3>Home</h3> 
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/list" style={style} className="nav-links" onClick={closeMobileMenu}>
                               <h3>Pokemons</h3> 
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/about" style={style} className="nav-links" onClick={closeMobileMenu}>
                                <h3>About</h3> 
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
