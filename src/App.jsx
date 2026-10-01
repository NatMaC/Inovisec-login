import { useState } from 'react'

// Importar componentes
import Login from '../src/componentes/Login'
import Mapa from '../src/componentes/Mapa'

function App() {
  const [usuario, setUsuario] = useState(null);
  
  // 1. Creamos este estado para alternar entre la vista de 'login' y 'registro'
  const [vista, setVista] = useState('login');


  // Si el usuario ya está autenticado en Firebase, va directo al Registro (sistema principal)
  if (usuario) {
    return <Registro correoUsuario={usuario.email} />;
  }

  // Si no está autenticado, decidimos si mostrar Login o Registro
  return (
    <div className="registro-exact-footer">

{vista === 'login' ? (
  <Login
    onMapa={() => setVista('mapa')}
  />
) : vista === 'registro' ? (
  <div>
    <Registro />
    <p>
      ¿Ya tienes cuenta?{' '}
      <button onClick={() => setVista('login')}>
        Ir al Login
      </button>
    </p>
  </div>
) : vista === 'mapa' ? (
  <Mapa />
) : null}

    </div>
  );
}

export default App;
