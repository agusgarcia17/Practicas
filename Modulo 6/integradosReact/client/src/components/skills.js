import React, { Component } from 'react';
import './../css/skills.css';

class Skills extends Component {
    render(){
    return (
      <div className='cuerpo'>
        <section className='datos'>
          <div className='descripcion'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
          </div>
          <div className='progresos'>
            <div className='pepe'>
              <label className='label'> Frontend Development </label>
              <label className='porcentaje'> 90% </label>
            </div>
              <progress value="90" max="100"></progress>
            <div className='pepe'> 
              <label className='label'> Backend Development </label>
              <label className='porcentaje'> 85% </label>
            </div>
              <progress value="85" max="100"></progress>
            <div className='pepe'>
                <label className='label'> Mobile App Development </label>
                <label className='porcentaje'> 75% </label>
            </div>
                <progress value="75" max="100"></progress>
            <div className='pepe'>
              <label className='label'> Desktop Development </label>
              <label className='porcentaje'> 80% </label>
            </div>
              <progress value="80" max="100"></progress>
          </div> 

        </section>
      </div>
    
    )
   } 
  }

  export default Skills
