import React from 'react'
import imageInfo from '../../images/info.png'
import './Info.css'

function Info() {
  return (
    <div className='infoContainer'>
        <img className='imageInfo' src={imageInfo} alt="" />
        <div>
        <h2 className='titleInfo' >Acerca del Evento</h2>
            <h2 className='textInfo'>Nos complace en el presente año convocar a la realización del 4° simposio con el propósito de recoger la cosecha, evaluar lo que se tiene y perseverar en los logros, a fin de allanar la vía para enfrentar los retos que demanda la educación en estos tiempos de zozobra y de revisionismo histórico a cargo de fuerzas antidemocráticas y nacionalistas. De nuevo hay que reiterar la idea de la acogida como principio constitutivo de toda acción educativa, valga decir, de una “ética de la bienvenida”, que presidió en su momento las deliberaciones del simposio anterior. Ahondar en las garantías de confianza y seguridad que debe rodear todo proceso de formación de los sujetos desde la cuna hasta la tumba, es inseparable de la elaboración de una narrativa compartida en la que la memoria no es nada sin el contar y el contar no es nada sin el escuchar.</h2>
        </div>
    </div>
  )
}

export default Info