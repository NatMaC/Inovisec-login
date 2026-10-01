
import { useState } from 'react';
import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Popup,
  ZoomControl,
} from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import './Mapa.css';

const lugares = [
  {
    id: 1,
    nombre: 'Plaza Botero',
    direccion: 'Centro de Medellín, Antioquia',
    categoria: 'Lugar turístico',
    descripcion:
      'Espacio público reconocido por sus esculturas y su oferta cultural.',
    posicion: [6.2510, -75.5687],
  },
  {
    id: 2,
    nombre: 'Jardín Botánico',
    direccion: 'Zona norte de Medellín, Antioquia',
    categoria: 'Naturaleza',
    descripcion:
      'Espacio verde para recorrer y conocer distintas especies de plantas.',
    posicion: [6.2706, -75.5646],
  },
  {
    id: 3,
    nombre: 'Parque Lleras',
    direccion: 'El Poblado, Medellín, Antioquia',
    categoria: 'Parque',
    descripcion:
      'Zona urbana con restaurantes, comercios y espacios de encuentro.',
    posicion: [6.2089, -75.5676],
  },
];

const Mapa = () => {
  const [lugarSeleccionado, setLugarSeleccionado] =
    useState(lugares[0]);

  return (
    <main className="mapa-pagina">

      <header className="mapa-header">
        <div>
          <h1>Explorar lugares</h1>
          <p>Selecciona un marcador para consultar su información.</p>
        </div>
      </header>

      <div className="mapa-layout">

        {/* Mapa interactivo */}
        <section className="mapa-contenedor">
          <MapContainer
            center={[6.2518, -75.5636]}
            zoom={13}
            scrollWheelZoom={true}
            zoomControl={false}
            className="mapa"
          >
            <ZoomControl position="topright" />

            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {lugares.map((lugar) => (
              <CircleMarker
                key={lugar.id}
                center={lugar.posicion}
                radius={
                  lugarSeleccionado.id === lugar.id ? 10 : 7
                }
                pathOptions={{
                  color: '#087f8c',
                  fillColor:
                    lugarSeleccionado.id === lugar.id
                      ? '#08b5b5'
                      : '#58c4bf',
                  fillOpacity: 0.9,
                  weight: 2,
                }}
                eventHandlers={{
                  click: () => setLugarSeleccionado(lugar),
                }}
              >
                <Popup>{lugar.nombre}</Popup>
              </CircleMarker>
            ))}
          </MapContainer>
        </section>

        {/* Panel de información */}
        <aside className="lugar-panel">

          <span className="lugar-etiqueta">
            INFORMACIÓN DEL LUGAR
          </span>

          <h2>{lugarSeleccionado.nombre}</h2>

          <span className="lugar-categoria">
            {lugarSeleccionado.categoria}
          </span>

          <div className="lugar-detalle">
            <span className="detalle-icono">⌖</span>
            <div>
              <strong>Dirección</strong>
              <p>{lugarSeleccionado.direccion}</p>
            </div>
          </div>

          <div className="lugar-descripcion">
            <strong>Descripción</strong>
            <p>{lugarSeleccionado.descripcion}</p>
          </div>

          <div className="lugares-lista">
            <h3>Otros lugares</h3>

            {lugares.map((lugar) => (
              <button
                type="button"
                key={lugar.id}
                className={`lugar-opcion ${
                  lugarSeleccionado.id === lugar.id
                    ? 'lugar-activo'
                    : ''
                }`}
                onClick={() => setLugarSeleccionado(lugar)}
              >
                <span className="lugar-punto"></span>
                <span>{lugar.nombre}</span>
                <span className="lugar-flecha">›</span>
              </button>
            ))}
          </div>

        </aside>
      </div>
    </main>
  );
};

export default Mapa;
