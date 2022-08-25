
import './Contact.css'
import React from 'react'

export default function Contact() {
  return (

    <div>
        <form className='form'>
            <input type={"text"} placeholder="votre prenom et nom " ></input>
            <input type={"text"} placeholder="votre email " ></input>

            <input type={"text"} placeholder="votre Telephone" ></input>
            <input type={"text"} placeholder="votre message" ></input>
            <button className='btn'>Envoyer</button>
            <div className='map'>
               <iframe src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3233.9780821672216!2d10.575504315116317!3d35.84954098015535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x42f56f262e5eb556!2zMzXCsDUwJzU4LjQiTiAxMMKwMzQnMzkuNyJF!5e0!3m2!1sfr!2stn!4v1661269705232!5m2!1sfr!2stn"} ></iframe>
            </div>
        </form>
    </div>
  )
}
