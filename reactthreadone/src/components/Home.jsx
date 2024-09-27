import React from 'react';
import { Helmet } from 'react-helmet';
import '../styles/home.css';
import LogoThreadOne from '../images/LogoThreadOne.png';
import FondoHeader from '../images/FondoHeader.jpg';
import Playeras from '../images/CategoriaPlayeras.jpg';
import Diseña from '../images/CategoriaPersonalizacion.jpg';
import Stikers from '../images/CategoriaStickers.jpg';
//Fotos carrusel
import imagen1 from '../images/Carrusel/imagen1.jpg';
import imagen2 from '../images/Carrusel/imagen2.jpg';
import imagen3 from '../images/Carrusel/imagen3.jpg';
import imagen4 from '../images/Carrusel/imagen4.jpg';
import imagen5 from '../images/Carrusel/imagen5.jpg';
import imagen6 from '../images/Carrusel/imagen6.jpg';
import imagen7 from '../images/Carrusel/imagen7.jpg';

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
        
        <link rel="icon" href="" />

      </Helmet>

      <header style={{ justifyContent: 'space-between' }}>
        <div className="header-left">
          <a href="/" className="logo-button">
            <img src={LogoThreadOne} alt="Logo" className="logo" />
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

        <img id="fondo" src={FondoHeader} alt="fondo" />
      </header>

      <section className="pepino">
        <h1 className="textt" id="threadOne">ThreadOne</h1>
        <p className="texto" id="discover">DESCUBRE TODO LO QUE TENEMOS PARA TI</p>
      </section>

      <section>
        <div className="cajita">
          <a href="/stickers" className="cajona">
            <div className="imgBx">
              <img src={Stikers} alt="Stickers" />
            </div>
            <div className="content">
              <div>
                <h2 id="stickers">STICKERS</h2>
              </div>
            </div>
          </a>

          <a href="/custom" className="cajona">
            <div className="imgBx">
              <img src={Diseña} alt="Personalización" />
            </div>
            <div className="content">
              <div>
                <h2 id="design">DISEÑA</h2>
              </div>
            </div>
          </a>

          <a href="/camisetas" className="cajona">
            <div className="imgBx">
              <img src={Playeras} alt="Camisetas" />
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
              src={imagen1}
              alt="Image 1" 
              draggable="false" 
            />
            <img 
              className="image" 
              src={imagen2}
              alt="Image 2" 
              draggable="false" 
            />
            <img 
              className="image" 
              src={imagen3}
              alt="Image 3" 
              draggable="false" 
            />
            <img 
              className="image" 
              src={imagen4}
              alt="Image 4" 
              draggable="false" 
            />
            <img 
              className="image" 
              src={imagen5}
              alt="Image 5" 
              draggable="false" 
            />
            <img 
              className="image" 
              src={imagen6}
              alt="Image 6" 
              draggable="false" 
            />
            <img 
              className="image" 
              src={imagen7}
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
