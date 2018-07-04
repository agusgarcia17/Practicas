import React, { Component } from 'react';
import profilepic from './../images/profilepic.jpg';
import facebook from './../images/facebook.svg';
import instagram from './../images/instagram.svg';
import github from './../images/github.svg';
import twitter from './../images/twitter.svg';
import './../css/card.css';


class Card extends Component {

  state = {users: []}

  componentDidMount() {
    fetch('http://localhost:3007/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

    render(){
    return (
      <div className='card'>
        <section className='datos'>
            <img src={profilepic} className="profilePic" alt="profilePic"/>
            <div className='ficha'>
              {this.state.users.map(user =>
              <div className ='key' key={user.nombre}>
                <h1>I'm <span id='verde'>{user.nombre}</span></h1>
                <h3>{user.profesion}</h3>
                <hr color= "grey" />
                <p>Edad: {user.edad}</p>
                <p>Direccion: {user.direccion}</p>
                <p>Email: {user.email}</p>
                <p>Numero de telefono: {user.telefono}</p>
                <p>Website: <a href={user.website}>{user.website}</a></p>
              </div>
              )}
              <div className='redesCard'>
                <a href="https://www.facebook.com/ma.garcia17" target="_blank"><img className="iconCard" src={facebook} alt="facebook"/> </a>
                <a href="https://twitter.com/agus_garcia17" target="_blank"> <img className="iconCard" src={twitter} alt="twitter"/> </a>
                <a href="https://github.com/agusgarcia17" target="_blank"><img className="iconCard" src={github} alt="github"/> </a>
                <a href="https://www.instagram.com/agusgarcia17/" target="_blank"> <img class="iconCard" src={instagram} alt="instagram"/> </a>
              </div>
            </div>
      </section>
      </div>
    )
   } 
  }

export default Card
