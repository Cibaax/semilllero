import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './VisualizarDatosMovidos.css'
const VisualizarDatosMovidos = () => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    const obtenerDatos = async () => {
      const result = await axios.get('https://semillero-timeline-default-rtdb.firebaseio.com/moved.json');
      setDatos(result.data);
    };
    obtenerDatos();
  }, []);

  const devolverDatos = async id => {
    
    try {
      const { data } = await axios.get(`https://semillero-timeline-default-rtdb.firebaseio.com/moved/${id}.json`);
      await axios.post(`https://semillero-timeline-default-rtdb.firebaseio.com/events.json`, data);
      await axios.delete(`https://semillero-timeline-default-rtdb.firebaseio.com/moved/${id}.json`);
      const result = await axios.get('https://semillero-timeline-default-rtdb.firebaseio.com/moved.json');
      setDatos(result.data);
    } catch (error) {
      console.error(error);
    }
    
  };

  const eliminarDatos = async id => {
    
    try {
      await axios.delete(`https://semillero-timeline-default-rtdb.firebaseio.com/moved/${id}.json`);
      const result = await axios.get('https://semillero-timeline-default-rtdb.firebaseio.com/moved.json');
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
            <button onClick={() => devolverDatos(id)}>Devolver</button>
            <button onClick={() => eliminarDatos(id)}>Eliminar</button>
            <h3>{datos[id].title}</h3>
            <p>{datos[id].description}</p>
            <p>{datos[id].date}</p>
          </div>
        ))}
    </div>
  );
};

export default VisualizarDatosMovidos;
