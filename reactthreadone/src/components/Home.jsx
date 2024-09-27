// HomePage.jsx
import React from 'react';
import { Helmet } from 'react-helmet';
import '../styles/home.css';

const HomePage = ({ email_usuario, nombre_usuario }) => {
  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" 
          rel="stylesheet" 
        />
        <link 
          href="https://fonts.googleapis.com/css2?family=Aboreto&family=Cormorant:ital,wght@0,300..700;1,300..700&family=Lora:ital,wght@0,400..700;1,400..700&display=swap" 
          rel="stylesheet" 
        />
        <link 
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" 
          rel="stylesheet" 
        />

        <title>ThreadOne</title>
        
        <link rel="icon" href="/images/LogoThreadOne.png" />

      </Helmet>

      <header style={{ justifyContent: 'space-between' }}>
        <div className="header-left">
          <a href="/" className="logo-button">
            <img src="/images/LogoThreadOne.png" alt="Logo" className="logo" />
          </a>
        </div>

        <div className="header-right">
          <button className="language-btn" id="languageBtn">
            <span className="material-symbols-outlined">translate</span>
          </button>

          <a href="/carrito" className="cart-button">
            <span id="cart">Carrito</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              fill="currentColor" 
              className="bi bi-cart" 
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
            </svg>
          </a>

          <a href="/favoritos" className="cart-button">
            <span id="favorites">Favoritos</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              fill="currentColor" 
              className="bi bi-heart" 
              viewBox="0 -1 16 16"
            >
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
            </svg>
          </a>

          {typeof email_usuario === 'undefined' ? (
            <a href="/usuario" className="account-button">
              <span id="greeting">Hey, tú</span>
            </a>
          ) : (
            <a href="/usuario" className="account-button">
              <span id="greeting">Hey, {nombre_usuario}</span>
            </a>
          )}
        </div>

        <img id="fondo" src="/images/FondoHeader.jpg" alt="fondo" />
      </header>

      <section className="pepino">
        <h1 className="textt" id="threadOne">ThreadOne</h1>
        <p className="texto" id="discover">DESCUBRE TODO LO QUE TENEMOS PARA TI</p>
      </section>

      <section>
        <div className="cajita">
          <a href="/stickers" className="cajona">
            <div className="imgBx">
              <img src="/images/CategoriaStickers.jpg" alt="Stickers" />
            </div>
            <div className="content">
              <div>
                <h2 id="stickers">STICKERS</h2>
              </div>
            </div>
          </a>

          <a href="/custom" className="cajona">
            <div className="imgBx">
              <img src="/images/CategoriaPersonalizacion.jpg" alt="Personalización" />
            </div>
            <div className="content">
              <div>
                <h2 id="design">DISEÑA</h2>
              </div>
            </div>
          </a>

          <a href="/camisetas" className="cajona">
            <div className="imgBx">
              <img src="/images/CategoriaPlayeras.jpg" alt="Camisetas" />
            </div>
            <div className="content">
              <div>
                <h2 id="tshirts">CAMISETAS</h2>
              </div>
            </div>
          </a>
        </div>
      </section>

      {typeof email_usuario === 'undefined' && (
        <section>
          <div className="fresa">
            <p className="texto" id="createStyle">Empieza a crear tu propio estilo y tu propia vida</p>
            <a href="/registro">
              <button id="register">Regístrate</button>
            </a>
            <a href="/login">
              <button id="login">Inicia Sesión</button>
            </a>
          </div>
        </section>
      )}

      <section>
        <div id="image-track-container">
          <div id="image-track">
            <img 
              className="image" 
              src="/images/homecarrousel/466448dba0c215118e8067191bd0dc6d.jpg" 
              alt="Image 1" 
              draggable="false" 
            />
            <img 
              className="image" 
              src="/images/homecarrousel/62640a327d8c0e9d264b46a250a376ff.jpg" 
              alt="Image 2" 
              draggable="false" 
            />
            <img 
              className="image" 
              src="/images/homecarrousel/466448dba0c215118e8067191bd0dc6d.jpg" 
              alt="Image 3" 
              draggable="false" 
            />
            <img 
              className="image" 
              src="/images/homecarrousel/5556447bb2b8e79f1684c31d1f51015d.jpg" 
              alt="Image 4" 
              draggable="false" 
            />
            <img 
              className="image" 
              src="/images/homecarrousel/b7214c69c8daa4bbd55a7ba53d03ce8c.jpg" 
              alt="Image 5" 
              draggable="false" 
            />
            <img 
              className="image" 
              src="/images/homecarrousel/c11f118e6a7919891ab155a8fa8742ed.jpg" 
              alt="Image 6" 
              draggable="false" 
            />
            <img 
              className="image" 
              src="/images/homecarrousel/cb63a2f3909951d69151ea4f2ac2bdc0.jpg" 
              alt="Image 7" 
              draggable="false" 
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
