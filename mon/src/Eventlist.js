import React, { useState } from 'react'
import Item  from './Item'
import './event.css'
export default function Card() {
   const  [events,setEvent]=useState(
   [ 
      {name:"ZIARA",
      description:"وينكم يا زيار    زيارتنا رجعت و مرحبا بيكم كبار و صغار ❤️❤️  نهار 29 جويلية في ستاد بوعلي الحوار",
      image:"https://scontent.ftun1-2.fna.fbcdn.net/v/t39.30808-6/295315935_5904598236218896_3020377484587268543_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=xLVi0wB5-ugAX9dii34&_nc_ht=scontent.ftun1-2.fna&oh=00_AT-kn5d9sO2xlU4SI5B-8sHlgCzgdajtrZmlgHVicAMNfg&oe=630658DB",
      organisé : "Croissant Rouge Hammem Sousse" ,
      Date : "29/09/2022 À 22H ",
      lieu : "Stade Bouali Lahouar",
      participant:"200"},

      {name:"Marathon Nourane",
      description:"",
      image:"https://scontent.ftun1-2.fna.fbcdn.net/v/t39.30808-6/285186783_7626678220736708_6877364436320011925_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=340051&_nc_ohc=PNJj7lmDhQEAX-wxD-Z&_nc_ht=scontent.ftun1-2.fna&oh=00_AT9kEGtkmhpgddTzorbU1HgfrSUQ1m0HjGRTtMotcflTUw&oe=6307A63F", 
      organisé : "Nourane pour la prévention du cancer",
      Date : "DIMANCHE 9 OCTOBRE 2022 À 08:00" ,
      lieu : "Avenue Habib Bourguiba" ,
      participant:"198"},


      {name:"STRESS ET NEUROSCIENCES COGNITIVES-Conférence Offerte !",
      description:"",
      image:"https://scontent.ftun1-2.fna.fbcdn.net/v/t39.30808-6/298386343_456607733003592_8043607770497399006_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=340051&_nc_ohc=TJs7RSUsInUAX8HDoHi&_nc_ht=scontent.ftun1-2.fna&oh=00_AT_RE7enx8BQqfgVICavpQO4MYiKdVNLHzy7p3oj53Gtcw&oe=63076AE4",
      organisé  :"ALPHaInstitut" ,
      Date : "JEUDI 8 SEPTEMBRE 2022 DE 18:00 À 19:00",
      lieu :"Évènement en ligne" ,
      participant:"252"},
      
    
    
    
    ])
    
  return (
    <div className='event-groupe'>
   
    {events.map((e) => (
     
      <Item name={e.name} image={e.image} organisé={e.organisé } Date={e.Date} lieu={e.lieu} participant={e.participant}></Item>
    ))}
  
  </div>
  )

}
