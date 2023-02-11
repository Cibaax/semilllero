import React from 'react'
import About from '../About/About'
import Footer from '../Footer/Footer'
import Info from '../Info/Info'
import Roles from '../Roles/Roles'
import Timeline from '../Timeline/Timeline'

function Home() {
  return (
    <div>
        <About/>
        <Timeline/>
        <Info/>
        <Roles/>
        <Footer/>
    </div>
  )
}

export default Home