
import { useState } from 'react';
import './Login.css';

const Login = ({ onRegistro, onMapa }) => {
  const [mostrarPassword, setMostrarPassword] = useState(false);
  const [recordarme, setRecordarme] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    onMapa();
  };

  return (
    <div className="login-page">
      <div className="login-card">

        {/* Formulario de inicio de sesión */}
        <div className="login-content">

          <header className="login-header">
            <h3>Bienvenido de nuevo</h3>
            <p>
              Digite su usuario y contraseña para acceder a la cuenta
            </p>
          </header>

          <div className="login-divider">
            <span>O CONTINÚA CON</span>
          </div>

          <button
            type="button"
            className="google-button"
          >
            <span className="google-icon">G</span>
            Google
          </button>

          <form onSubmit={handleSubmit}>

            {/* Usuario */}
            <div className="login-field">
              <label htmlFor="usuario">Usuario</label>
              <input
                id="usuario"
                type="text"
                className="form-control"
                placeholder="Ingresa tu usuario"
                autoComplete="username"
                required
              />
            </div>

            {/* Contraseña */}
            <div className="login-field">
              <label htmlFor="password">Contraseña</label>

              <div className="password-wrapper">
                <span className="lock-icon">♙</span>

                <input
                  id="password"
                  type={mostrarPassword ? 'text' : 'password'}
                  className="form-control"
                  placeholder="Ingresa tu contraseña"
                  autoComplete="current-password"
                  required
                />

                <button
                  type="button"
                  className="show-password"
                  onClick={() =>
                    setMostrarPassword(!mostrarPassword)
                  }
                  aria-label={
                    mostrarPassword
                      ? 'Ocultar contraseña'
                      : 'Mostrar contraseña'
                  }
                >
                  {mostrarPassword ? 'Ocultar' : 'Ver'}
                </button>
              </div>
            </div>

            {/* Recordarme y recuperar contraseña */}
            <div className="login-options">
              <label className="remember-option">
                <input
                  type="checkbox"
                  checked={recordarme}
                  onChange={(e) =>
                    setRecordarme(e.target.checked)
                  }
                />
                Recuérdame
              </label>

              <a href="#recuperar">
                ¿Olvidaste tu contraseña?
              </a>
            </div>

            {/* Botón de inicio de sesión */}
            <button
              type="submit"
              className="login-button"
            >
              Iniciar Sesión
            </button>

          </form>

        </div>

        {/* Panel decorativo */}
        <div className="login-decoration">
          <div className="decoration-circle circle-top"></div>
          <div className="decoration-circle circle-left"></div>
          <div className="decoration-circle circle-right"></div>
          <div className="decoration-circle circle-bottom"></div>
        </div>

      </div>
    </div>
  );
};

export default Login;
