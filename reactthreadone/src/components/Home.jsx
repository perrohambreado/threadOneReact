//Importaciones
import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import '../styles/home.css';
//import '../javascript/home';

// Imágenes categorías
import LogoThreadOne from '../images/LogoThreadOne.png';
import FondoHeader from '../images/FondoHeader.jpg';
import Playeras from '../images/CategoriaPlayeras.jpg';
import Diseña from '../images/CategoriaPersonalizacion.jpg';
import Stikers from '../images/CategoriaStickers.jpg';

// Fotos carrusel
import imagen1 from '../images/Carrusel/imagen1.jpg';
import imagen2 from '../images/Carrusel/imagen2.jpg';
import imagen3 from '../images/Carrusel/imagen3.jpg';
import imagen4 from '../images/Carrusel/imagen4.jpg';
import imagen5 from '../images/Carrusel/imagen5.jpg';
import imagen6 from '../images/Carrusel/imagen6.jpg';
import imagen7 from '../images/Carrusel/imagen7.jpg';

const HomePage = ({ email_usuario, nombre_usuario }) => {
  // Traducción de la página
  const [language, setLanguage] = useState('es');

  // Referencia al botón de idioma
  const languageBtnRef = useRef(null);

  // Referencia al contenedor del carrusel
  const trackRef = useRef(null);

  // Objetos a traducir
  const elementsToTranslate = {
    en: {
      cart: "Cart",
      greeting: "Hey, you",
      threadOne: "ThreadOne",
      discover: "DISCOVER EVERYTHING WE HAVE FOR YOU",
      stickers: "STICKERS",
      design: "DESIGN",
      tshirts: "T-SHIRTS",
      createStyle: "Start creating your own style and your own life",
      register: "Sign Up",
      login: "Log In",
    },
    es: {
      cart: "Carrito",
      greeting: "Hey, tú",
      threadOne: "ThreadOne",
      discover: "DESCUBRE TODO LO QUE TENEMOS PARA TI",
      stickers: "STICKERS",
      design: "DISEÑA",
      tshirts: "PLAYERAS",
      createStyle: "Empieza a crear tu propio estilo y tu propia vida",
      register: "Regístrate",
      login: "Inicia Sesión",
    },
  };

  // Handler para cambiar el idioma
  const handleLanguageClick = () => {
    setLanguage((prevLang) => (prevLang === 'es' ? 'en' : 'es'));
  };

  // Gestión de las imagenes del carrusel
  const [images, setImages] = useState([
    imagen1,
    imagen2,
    imagen3,
    imagen4,
    imagen5,
    imagen6,
    imagen7,
  ]);

  // Efecto carrusel
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const step = 0.6; //Mover intervalo 
    const intervalTime = 20; 
    let position = 0; //Infinito

    // Calcular el ancho de desplazamiento basado en la cantidad de imágenes
    const imageWidth = track.offsetWidth / images.length;

    // Actualizar el carrusel
    const updateCarousel = () => {
      position -= step;
      if (position <= -imageWidth) {
        position = 0;
        const firstImage = track.firstElementChild;
        if (firstImage) {
          track.appendChild(firstImage);
        }
      }
      track.style.transform = `translateX(${position}px)`;
    };

    // Configurar el intervalo para actualizar el carrusel
    const intervalId = setInterval(updateCarousel, intervalTime);

    // Limpiar el intervalo al desmontar el componente
    return () => clearInterval(intervalId);
  }, [images.length]);

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

      {/* HEADER */}

      <section className="pepino">
        <h1 className="textt" id="threadOne">{elementsToTranslate[language].threadOne}</h1>
        <p className="texto" id="discover">{elementsToTranslate[language].discover}</p>
      </section>

      <section>
        <div className="cajita">
          <a href="/stickers" className="cajona">
            <div className="imgBx">
              <img src={Stikers} alt="Stickers" />
            </div>
            <div className="content">
              <div>
                <h2 id="stickers">{elementsToTranslate[language].stickers}</h2>
              </div>
            </div>
          </a>

          <a href="/custom" className="cajona">
            <div className="imgBx">
              <img src={Diseña} alt="Personalización" />
            </div>
            <div className="content">
              <div>
                <h2 id="design">{elementsToTranslate[language].design}</h2>
              </div>
            </div>
          </a>

          <a href="/camisetas" className="cajona">
            <div className="imgBx">
              <img src={Playeras} alt="Camisetas" />
            </div>
            <div className="content">
              <div>
                <h2 id="tshirts">{elementsToTranslate[language].tshirts}</h2>
              </div>
            </div>
          </a>
        </div>
      </section>

      {typeof email_usuario === 'undefined' && (
        <section>
          <div className="fresa">
            <p className="texto" id="createStyle">{elementsToTranslate[language].createStyle}</p>
            <a href="/registro">
              <button id="register">{elementsToTranslate[language].register}</button>
            </a>
            <a href="/login">
              <button id="login">{elementsToTranslate[language].login}</button>
            </a>
          </div>
        </section>
      )}

      <section>
        <div id="image-track-container">
          <div id="image-track" ref={trackRef}>
            {images.map((imgSrc, index) => (
              <img 
                key={index}
                className="image" 
                src={imgSrc}
                alt={`Image ${index + 1}`} 
                draggable="false" 
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;