import React, { useState, useEffect } from "react";
import axios from "axios";
import './AllEvents.css'
const AllEvents = () => {
    const [datos, setDatos] = useState([]);
    const [datos2, setDatos2] = useState([]);

    useEffect(() => {
      const obtenerDatos = async () => {
        const result = await axios.get('https://semillero-timeline-default-rtdb.firebaseio.com/moved.json');
        setDatos2(result.data);
      };
      obtenerDatos();
    }, []);
  useEffect(() => {
    const obtenerDatos = async () => {
      const result = await axios.get('https://semillero-timeline-default-rtdb.firebaseio.com/events.json');
      setDatos(result.data);
    };
    obtenerDatos();
  }, [])

  const devolverDatos = async id => {
    try {
      const { data } = await axios.get(`https://semillero-timeline-default-rtdb.firebaseio.com/moved/${id}.json`);
      const result = await axios.get('https://semillero-timeline-default-rtdb.firebaseio.com/moved.json');
      setDatos2(result.data);
    } catch (error) {
      console.error(error);
    }
    
  };
  return (
    <>
    <div className="grid">
    <p>Proximas Conferencias</p>
      {datos &&
        Object.keys(datos).map(id => (
          <div key={id} className="allEvents">
            <h3>{datos[id].title}</h3>
            <p>{datos[id].description}</p>
            <p>{datos[id].month} {datos[id].day}</p>
            </div>
        ))}
    </div>
    <div className="grid">
    <p>Conferencias Pasadas</p>
      
      {datos2 &&
        Object.keys(datos2).map(id => (
          <div key={id} className="allEvents">
            <h3>{datos2[id].title}</h3>
            <p>{datos2[id].description}</p>
            <p>{datos2[id].month} {datos2[id].day}</p>
          </div>
        ))}
    </div>
    </>
  );
};


export default AllEvents;
