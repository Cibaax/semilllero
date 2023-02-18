
import React, { useState, useEffect } from 'react';
import './Timeline.css'
import axios from 'axios';
import calendar from '../../images/calendar.png'

function Timeline() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const result = await axios.get('https://semillero-timeline-default-rtdb.firebaseio.com/events.json');
      setData(result.data);
    };
    obtenerDatos();
  }, []);

  const onlyThree = data.slice(0, 3);
  return (
    <div class="container">
  <div class="caja-flecha">
    <img src={calendar} alt="" />
    <h4 className='h4timeline'>Proximós Eventos</h4>
    <div class="flecha"></div></div>
    {firstThree.map((dato, index) => (
          <div className='containerBox'>
        <div className='caja' id={`box${index+1}`} key={dato.title}>
          <div className='cajas'>
          <p className='tittleConference'>{dato.title}</p>
          <div className='containerInfo'>
          <div className='containerDate'>
          <h5 className='dateEventDay'>{dato.day}</h5>
          <h5 className='dateEventMonth'>{dato.month}</h5>
          </div>
          <h2 className='descriptionTimeline'>{dato.description}</h2>
          </div>
          </div>
        </div>
            <div className='line'></div>
          </div>
      ))}
  
</div>

  )
}

export default Timeline