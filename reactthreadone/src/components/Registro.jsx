import React, { useRef, useState } from 'react';
import '../styles/Registro.css';
import logo from '../images/LogoThreadOne.png';
import granadaImg from '../images/GranadaRegistro.png';

const Registro = () => {
    const [message, setMessage] = useState('');
    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);
    const birthDateRef = useRef(null);
    const genderRef = useRef(null);
    const emailRef = useRef(null);
    const phoneRef = useRef(null);
    const passwordRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const nombre_usuario = firstNameRef.current.value;
        const apellido_usuario = lastNameRef.current.value;
        const fecha_nacimiento_usuario = birthDateRef.current.value;
        const fk_genero = genderRef.current.value;
        const email_usuario = emailRef.current.value;
        const telefono_usuario = phoneRef.current.value;
        const contrasena_usuario = passwordRef.current.value;

        const res = await fetch("/registro", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                nombre_usuario,
                apellido_usuario,
                fecha_nacimiento_usuario,
                fk_genero: Number(fk_genero),
                email_usuario,
                telefono_usuario: Number(telefono_usuario),
                contrasena_usuario,
            }),
        });

        if (res.ok) {
            setMessage("Usuario registrado correctamente");
            setTimeout(() => {
                window.location.href = "/login";
            }, 2000);
        } else {
            setMessage("Error al registrar usuario");
        }
    };

    return (
        <div>
            <header>
                <div className="header-left">
                    <a href="/" className="logo-button">
                        <img src={logo} alt="Logo" className="logo" />
                    </a>
                </div>
                <div className="header-right">
                    <a href="/login" className="register-button">
                        <span>Iniciar sesión</span>
                    </a>
                </div>
            </header>

            <main>
                <section className="registration">
                    <h1>Regístrate</h1>
                    <p>¿Listo para crear un nuevo tú?</p>

                    <form id="form" onSubmit={handleSubmit}>
                        <div className="name-container">
                            <div className="input-group">
                                <label htmlFor="first-name">Nombre</label>
                                <input type="text" id="first-name" name="first-name" required ref={firstNameRef} />
                            </div>
                            <div className="input-group">
                                <label htmlFor="last-name">Apellido</label>
                                <input type="text" id="last-name" name="last-name" required ref={lastNameRef} />
                            </div>
                        </div>

                        <div className="name-container">
                            <div className="input-group">
                                <label htmlFor="birth-date">Fecha de nacimiento</label>
                                <input type="date" id="birth-date" name="birth-date" required ref={birthDateRef} />
                            </div>
                            <div className="input-group">
                                <label htmlFor="number">Teléfono</label>
                                <input type="text" id="number" name="number" required pattern="\d{10}" title="Debe tener 10 dígitos" ref={phoneRef} />
                            </div>
                        </div>

                        <label htmlFor="gender">Género</label>
                        <select id="gender" name="gender" ref={genderRef}>
                            <option value="1">Femenino</option>
                            <option value="2">Masculino</option>
                            <option value="3">No binario</option>
                            <option value="4">Otro</option>
                        </select>

                        <label htmlFor="password">Contraseña</label>
                        <input type="password" id="password" name="password" required ref={passwordRef} />

                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required autoComplete="email" ref={emailRef} />

                        <button type="submit">Subir</button>
                        <span>&nbsp;</span>
                        {message && <span style={{ color: message.includes("correctamente") ? "green" : "black" }}>{message}</span>}
                    </form>
                </section>

                <section className="image-section">
                    <img src={granadaImg} alt="Pomegranate" />
                </section>
            </main>
        </div>
    );
};

export default Registro;
