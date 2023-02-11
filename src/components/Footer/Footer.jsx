import React from 'react'
import './Footer.css'
import mail from '../../images/mail.png'
import facebook from '../../images/facebook.png'
import whatsapp from '../../images/whatsapp.png'
import universidad from '../../images/logo universidad.png'
import logo from '../../images/logo.png'
function Footer() {
  return (
    <div className='footer'>
    <div className='lineFooter'>
    <p>© Copyright Agency and contributors 2023. ABN 53 001 228 799</p>
    </div>
    <div className='lineFooter2'></div>

    <div className='containerFooter'>
     <div className="box box1">
      <img src={universidad} alt="" />
      <h4>Insitución Universidad Cesmag</h4>
     </div>
      <div className="box box2">
        <img src={facebook} alt="" />
        <h4>@Radiodiagnostico y Radioterapia</h4>
      </div>
      <div className="box box4">
        <img src={mail} alt="" />
        <h4>Radiodiagnosticoyradioterapia@gmail.com</h4>
      </div>
      <div className="box box3">
        <img src={whatsapp} alt="" />
        <h4>+57-3265557445</h4>
      </div>
     
    </div>
    
    </div>
  )
}

export default Footer