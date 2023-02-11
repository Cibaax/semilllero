import React from 'react'
import aboutImage from '../../images/about.png'
import logo from '../../images/logo.png'
import './About.css'

function About() {
  return (
    <>
      <div className='about'>
        <div className='info1'>
          <img className='logo' src={logo} alt="" />
          <h2 className='texth2Semilleros' >Semilleros de Investigación Radiodiagnostíco y Radioterapia</h2>
          <h4 className='h2text'>El encuentro de semilleros permite indagar y fortalecer la cultura investigativa; el evento permite profundizar temas relacionados a imágenes diagnósticas y Radioterapia, contribuyendo al progreso continuo de la medicina junto con sus ramas.</h4>
          
          

          <button className="button-5" >Información </button>

        </div>
        <div className='imageAbout'>
          <img className='aboutImage' src={aboutImage} alt="" />
        </div>
      </div>
    </>
  )
}

export default About