import React, { useState } from "react";
import axios from "axios";
import './AgregarDatos.css'
const AgregarDatos = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [mensaje, setMensaje] = useState('');

  const meses = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dic",
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!title || !description || !month || !day) {
      setMensaje("Todos los campos son requeridos");
    }
    const nuevoDato = {
      title,
      description,
      month: `${meses[month - 1]}`,
      day: `${day}` 
    };
    await axios.post(
      "https://semillero-timeline-default-rtdb.firebaseio.com/events.json",
      nuevoDato
    );
    setTitle("");
    setDescription("");
    setMonth("");
    setDay("");
    setMensaje('Datos agregados con éxito');
  };

  return (
    <div className="formulario">
      <form onSubmit={handleSubmit} >
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        className="formulario-input"
        required
      />
      <textarea
        placeholder="Descripción"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        className="formulario-textarea"
        required
      />
      <select
        value={month}
        onChange={(event) => setMonth(event.target.value)}
        className="formulario-select"
        required
      >
        <option value="">Seleccione un mes</option>
        {meses.map((mes, index) => (
          <option key={index} value={index + 1}>
            {mes}
          </option>
        ))}
      </select>
      <input
        type="number"
        placeholder="Día"
        value={day}
        onChange={(event) => setDay(event.target.value)}
        className="formulario-input"
        min="1"
        max="31"
        required
      />
      <button type="submit" className="formulario-submit">
        Agregar
      </button>
    </form>
    <p>{mensaje}</p>
    </div>
  );
};

export default AgregarDatos;
