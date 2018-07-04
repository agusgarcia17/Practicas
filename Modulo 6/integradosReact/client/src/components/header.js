import React, { Component } from 'react';
import facebook from './../images/facebook.svg';
import instagram from './../images/instagram.svg';
import github from './../images/github.svg';
import twitter from './../images/twitter.svg';
import './../css/header.css';


class Header extends Component {
    render(){
    return (
      <header className="header">
            <div className='headAlign'>
              <h1 className='name'>Maria Agustina Garcia</h1>
              <h3 className='name'> FrontEnd Developer </h3>
            </div>
            <div className="redes">
                <a href="https://www.facebook.com/ma.garcia17" target="_blank"><img className="icon" src={facebook} alt="facebook"/> </a>
                <a href="https://twitter.com/agus_garcia17" target="_blank"> <img className="icon" src={twitter} alt="twitter"/> </a>
                <a href="https://github.com/agusgarcia17" target="_blank"><img className="icon" src={github} alt="github"/> </a>
                <a href="https://www.instagram.com/agusgarcia17/" target="_blank"> <img class="icon" src={instagram} alt="instagram"/> </a>
            </div>
        </header>
  
    )
   } 
  }

  export default Header