import React, { useState } from 'react';
import axios from 'axios';
import './Form.css'
const Form = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    university: '',
    role: '',
  });

  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Validación de campos vacíos
    if (!formData.email || !formData.name || !formData.university || !formData.role) {
      setError('Todos los campos son requeridos');
      return;
    }
  
    // Verificación de correos duplicados
    axios
      .get('https://seminario-2f255-default-rtdb.firebaseio.com/.json')
      .then((res) => {
        if (!res.data) {
          setError('Error al obtener los datos');
          return;
        }
  
        const emails = Object.values(res.data).map((data) => data.email);
        if (emails.includes(formData.email)) {
          setError('Este correo ya está registrado');
          return;
        }
  
        axios
          .post('https://seminario-2f255-default-rtdb.firebaseio.com/.json', formData)
          .then((res) => {
            setFormData({ email: '', name: '', university: '', role: '' });
            setError('Registrado correctamente');
          })
          .catch((err) => {
            setError('Error al registrar');
          });
      });
  };
  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="form-input"
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        className="form-input"
        type="text"
        name="name"
        placeholder="Nombre"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        className="form-input"
        type="text"
        name="university"
        placeholder="Universidad"
        value={formData.university}
        onChange={handleChange}
      />
      <select
        className="form-select"
        name="role"
        value={formData.role}
        onChange={handleChange}
      >
        <option value="">Selecciona un cargo</option>
        <option value="jurados">Jurados</option>
        <option value="asistentes">Asistentes</option>
        <option value="ponentes">Ponentes</option>
        <option value="conferencistas">Conferencistas</option>
      </select>
      <button className="form-button" type="submit">
        Enviar
      </button>
      {error && <p className="form-message">{error}</p>}
    </form>
  );
};

export default Form;
