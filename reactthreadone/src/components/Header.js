import React from 'react';
import '../Header.css';

function Header() {
    return (
        <header className="header">
            <div className="header-left">
                <a href="/" className="logo-button">
                    <img src="/LogoThreadOne.png" alt="Logo" className="logo"></img>
                </a>
            </div>

            <div className="header-right">
                <a href="/registro" className="register-button">
                    <span>Registrarse</span>
                </a>
            </div>
        </header>
    );
}

export default Header;
