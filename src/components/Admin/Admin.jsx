import React, { useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import AgregarDatos from './AgregarDatos/AgregarDatos';
import MostrarDatos from './MostrarDatos/MostrarDatos';
import './Admin.css'
import VisualizarDatosMovidos from './VisualizarDatosMovidos/VisualizarDatosMovidos.jsx';
const Admin = () => {
    
  
    return (
     <>
     <div className='containerAdmin'>
        
        <div className='containerAdd'>
        <AgregarDatos/>
        </div>
        <div className='containerShow'>
        <MostrarDatos/>
        </div>
        <div className='containerEliminated'>
        <VisualizarDatosMovidos/>
        </div>
       </div>
     </>
    );
  };
export default Admin;
