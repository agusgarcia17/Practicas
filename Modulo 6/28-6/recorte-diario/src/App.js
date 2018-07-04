import React, { Component } from 'react';
import edificio1 from './edificio1.png';
import edificio2 from './edificio2.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='All'>
        <div className='Lista'>
          <p> <span> <strong> <a href="index.html"> La Nacion </a> | <a href="index.html"> Tecnologia </a></strong> </span> | <a href="index.html"> Tecnologia </a> </p> 
        </div>
        <div className="Encabezado">
			    <h1>Japón planea tener el rascacielos de madera más alto del mundo en Tokio</h1> 
		    </div>
        <div id="imagen1">
          <figure>
          <img src={edificio1}/>
          <figcaption>
            Tendrá 350 metros de altura y será la más alta en su tipo, con una construcción cuya estructura combina nueve partes de madera y una de acero 
          </figcaption>
          </figure>	
		    </div>
        <div className="Bloque1" id="hora">
          <h6> 16 de Febrero de 2018 <span> • 00:16 </span></h6>
        </div>
        <div className="Bloque1" id="cuerpo">
          <p> <span className="Capital"><b>E</b></span>l constructor y desarrollador inmobiliario <span id="link"><a href="index.html"> Sumitomo Forestry </a></span>, especializado en la industria forestal, planea tener para las próximas décadas el ambicioso objetivo de desarrollar un torre rascacielos de 350 metros de altura. Como referencia, el edificio más alto de Buenos Aires será el Alvear Tower, una construcción tradicional de 235 metros, mientras que el edificio más alto de madera es el Brock Commons Tallwood House, un edificio de 53 metros de altura ubicado en la Universidad de Columbia Británica en Vancouver, Canadá. </p>
          <p>El proyecto, diseñado por Nikken Sekkei, buscará combinar una proporción de 9 a 1 de madera y acero para la particular estructura solicitada por Sumitomo para celebrar el 350 aniversario de la compañía en 2041 con una estructura que transforme a Tokio en un bosque. </p> 
          <p>La estructura de la torre de madera más alta del mundo cumplirá con los reglamentos antisismicos para este tipo de edificios y se destinará para un hotel, oficinas, residencias y tiendas. Su costo estimado será de unos 5,9 mil millones de dólares.</p> 
          <p>Cuando finalice, la torre de Sumitomo Forestry no sólo será la más alta del mundo, sino que también superará a los rascacielos tradicionales de todo Japón.</p> 
		    </div>
		    <div className="Bloque1" id="imagen2"> 
          <img src={edificio2}/>
          <figcaption id="epi2">	
            <epigrafe> El proyecto deberá superar las estrictas normas japonesas que restringen el uso de la madera para evitar incendios </epigrafe>
          </figcaption>
	    	</div>
      </div>
    );
  }
}

export default App;
