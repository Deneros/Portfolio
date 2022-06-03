import React from 'react';
import './header.css';
import Ejemplo from '../../assets/Ejemplo.jpg'
import CV from '../../assets/CV-Nicolas-velez.pdf'

const Header = () => {
  return (
    <section id='home'>
      <div className="container header-container">
        <div className="container-profile">
          <img src={Ejemplo} alt="" className='img-profile'/>
          <h1>Nicolás Vélez</h1>
          <h3>Web Developer</h3>
          <a href={CV} className='btn' target={"__blank"}>Download CV</a>
        </div>
      </div>
    </section>
  )
}

export default Header