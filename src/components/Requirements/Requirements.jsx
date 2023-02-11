import React from 'react'
import Form from '../Form/Form'
import './Requirements.css' 
import Footer from'../Footer/Footer'
function Requirements() {
  return (
    <>
    <div className='containerAllRequirements'>
        <div className='containerRequirements'>
        <div className='textRequirements'>
        <h1 className='h1Requirements'>Requerimientos:</h1>
            <p>Estos son los tipos de requisitos funcionales más comunes:</p>
            <li>Regulaciones comerciales</li>
            <li>Requisitos de Certificación</li>
            <li>Los requisitos de información</li>
            <li>Funciones administrativas</li>
            <li>Niveles de autorización</li>
            <li>Seguimiento de auditoría</li>
            <li>Interfaces externas</li>
            <li>Administración de datos</li>
            <li>Requisitos legales y reglamentarios</li>
        </div>
        </div>
        <div className='containerForm'>

        <Form/>
        </div>
    </div>
        <Footer/>
    </>
  )
}

export default Requirements