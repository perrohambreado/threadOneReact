import React from 'react';
import '../Header.css';

function Header() {
    return (
        <header className="header">
            <div class="header-left">
                <a href="/" class="logo-button">
                    <img src="/LogoThreadOne.png" alt="Logo" class="logo"></img>
                </a>
            </div>

            <div class="header-right">
                <a href="/registro" class="register-button">
                    <span>Registrarse</span>
                </a>
            </div>
    </header>
  );
}

export default Header;
