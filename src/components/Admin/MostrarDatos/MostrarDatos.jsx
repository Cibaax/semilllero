import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MostrarDatos.css'
const MostrarDatos = () => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    const obtenerDatos = async () => {
      const result = await axios.get('https://semillero-timeline-default-rtdb.firebaseio.com/events.json');
      setDatos(result.data);
    };
    obtenerDatos();
  }, []);

  const moverDatos = async id => {
    try {
      const { data } = await axios.get(`https://semillero-timeline-default-rtdb.firebaseio.com/events/${id}.json`);
      await axios.post(`https://semillero-timeline-default-rtdb.firebaseio.com/moved.json`, data);
      await axios.delete(`https://semillero-timeline-default-rtdb.firebaseio.com/events/${id}.json`);
      const result = await axios.get('https://semillero-timeline-default-rtdb.firebaseio.com/events.json');
      setDatos(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="visualizar-datos">
      {datos &&
        Object.keys(datos).map(id => (
          <div key={id} className="datos-item">
            <button onClick={() => moverDatos(id)}>Mover</button>
            <h3>{datos[id].title}</h3>
            <p>{datos[id].description}</p>
            <h3>{datos[id].month} {datos[id].day}</h3>
          </div>
        ))}
    </div>
  );
};



export default MostrarDatos;
