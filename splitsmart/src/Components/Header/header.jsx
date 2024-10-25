import React from 'react'
import './header.css'
import logo from './splitsmart_logo.png'

const Header = () => {
    return (
        <header className="header">
            <a href="#" className="logo flex">
                <img src={logo} alt="Logo" className="logo-image" />
            </a>
        </header>
    )
}

export default Header