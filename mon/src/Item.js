import React from 'react'
import './item.css'
function Item(props) {
  return (
    <div className='card'>
     
       <img  src={props.image}></img> 
       <p> {props.name}</p> 
       <p> Date : {props.Date}  </p>
       <p>Lieu : {props.lieu} </p>
       <p> Organisé par : {props.organisé} </p>
       <p>Participant :{props.participant}  </p>
       
        </div>


  )
}
export default  Item
