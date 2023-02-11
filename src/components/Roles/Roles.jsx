import React from 'react'
import './Roles.css'
import asistentes from '../../images/asistentes.png'
import jurados from '../../images/jurados.png'
import ponentes from '../../images/ponentes.png'
import conferencistas from '../../images/conferencistas.png'
import RegisterButton from '../Register/RegisterButton'

function Roles() {
  return (
    <div className='containerRoles'>
        <div className='rolesBox'>
          <img src={jurados} alt="" />
            <h2 className='textRoles'>Evaluadores</h2>
            <p className='descriptionRoles'>Son profesores seleccionados mediante invitación directa de los coordinadores de semilleros de la universidad para participar, quienes serán escogidos por su cualificación y experiencia profesional.
</p>
        </div>
        <div className='rolesBox'>
          <img src={asistentes} alt="" />
          <h2 className='textRoles'>Asistentes</h2>
          <p className='descriptionRoles'>Son los estudiantes, profesionales o visitantes que tienen el objetivo de ser partícipes del evento, siendo certificados por ello.</p>
        </div>
        <div className='rolesBox'>
          <img src={ponentes} alt="" />
          <h2 className='textRoles'>Ponentes</h2>
          <p className='descriptionRoles'>Son los estudiantes de Radiología los cuales expondrán los temas de investigación que están llevando a cabo.</p>
          
        </div>
        <div className='rolesBox'>
          <img src={conferencistas} alt="" />
          <h2 className='textRoles'>Conferencistas</h2>
          <p className='descriptionRoles'>Son profesores e investigadores invitados destacados a nivel latinoamericano por sus contribuciones a la educación, investigación, innovación y organización de eventos académicos con impacto internacional</p>
        </div>
        
        </div>
  )
}

export default Roles