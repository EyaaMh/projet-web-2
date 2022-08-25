import logo from './logo.svg';
import './App.css';
import { BrowserRouter, NavLink, Route, Routes  } from 'react-router-dom'
import Acceuil from './Accueil'
import Contact from './Contact'
import Sinscrire from './Sinscrire'
import Inscrire from './Inscrire'
import Seconnecter from './Seconnecter'



function App() {
  return (  
   
      
      <BrowserRouter >
      <div className='nav'>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/s'inscrire">S'inscrire</NavLink>
        <NavLink to="/inscrire">Inscrire mon event</NavLink>
        <NavLink to="/seconnecter">Se Connecter</NavLink>
        <button class="btn"><i class="fa-solid fa-plus"></i>Créer Event</button>
        </div>
        
       <div>
        <Routes >
          <Route path="/" element={<Acceuil/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/s'inscrire" element={<div className='test'><Sinscrire/></div>}/>
          <Route path="/inscrire" element={<Inscrire/>}/>
          <Route path="/seconnecter" element={<Seconnecter/>}/>
        </Routes>

        </div>


      </BrowserRouter>
   
  );
}

export default App;
