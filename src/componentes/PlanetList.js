import React, { useEffect, useState } from 'react';
import './PlanetList.css';

const PlanetList = () => {
  const [planetas, setPlanetas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/data.json');
        const data = await response.json();
        const planetas = data.planetas;

        // Actualizar el estado de los planetas
        setPlanetas(planetas);
      } catch (error) {
        console.error('Error al cargar el archivo JSON:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Lista de Planetas</h1>
      <div id="planetas-container">
        {planetas.map((planetas) => (
          <div key={planetas.id} className="planeta">
            <h2>{planetas.nombre}</h2>
            <p>Tipo: {planetas.tipo}</p>
            <p>Masa: {planetas.masa}</p>
            <p>Radio: {planetas.radio}</p>
            <p>Gravedad: {planetas.gravedad}</p>
            <img src={planetas.imagen} alt="Imagen del planeta" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanetList;