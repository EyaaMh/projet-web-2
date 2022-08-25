

import React from 'react'

import img from './img.jpg'
import './Acceuil.css'
import Eventlist from "./Eventlist"
function Accueil()  {
  return (
    
    <div>
        <div className='top'>
        
            <div className='prov'>
              <p > La vie est comme un instrument de musique  </p>
              <p > il faut la tendre et la relacher pour la rendre agréable </p>
            </div>

        <button className='btn'>Lancez-vous ! Créez votre Event</button>
        
        </div>
    
        <div className='main'>

          <div className='title'>
           <p><span>Event </span>Publiques</p>
           <span className='line'></span>
           </div>
          
          <div className='filtre'>
            <button className='btn'>Voir Tout</button>
            <button className='btn'>Associative </button>
            <button className='btn'>Sportive</button>
            <button className='btn'>Divertissement </button>
          </div>

          <Eventlist></Eventlist>
          <button className='btnn'>Voir Plus</button>

          <div className='icons'>
            <p>Parcourir <span> les Event </span> par catégorie</p>
            <span className='line'></span>
            <div className='iconcontainer'>
            <i  className="iconn" class="fa-solid fa-person"></i>
            <i className="iconn" class="fa-solid fa-dumbbell"></i>
            <i className="iconn" class="fa-solid fa-earth-africa"></i>
            <i className="iconn"  class="fa-solid fa-champagne-glasses"></i>
            <i className="iconn" class="fa-solid fa-book-open"></i>
            </div>
          </div>



        </div>



    </div>

  )
}


export default Accueil