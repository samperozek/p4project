
import './App.css';
import { useEffect, useState } from 'react';
import {Route} from 'react-router-dom';

import TractorList from "./TractorList";
import NewTractorForm from "./NewTractorForm";
import ContactUs from './ContactUs';
import Home from './Home';
import LandingPage from './LandingPage';




function App() {

  const [allTractors, setTractor] = useState([])

  const fetchTractor = () => {
    fetch("http://localhost:4001/tractors")
      .then(res => res.json())
      .then(data => setTractor(data))
  }

  useEffect(fetchTractor, [])

  const goGetNewTractor = (tractorFromForm) => {
    setTractor(  [ tractorFromForm , ...allTractors ]  )
    fetch( "http://localhost:4001/tractors" , {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify( tractorFromForm )
      } )
      .then( response => response.json() )
      .then( console.log )
  }

  return (
    <div>
     
     <Route path = '/'>
        <Home/>
      </Route>

      <Route path = "/landingPage">
        <LandingPage/>
      </Route>

      <Route path='/tractors'>
        <TractorList tractorListToRender = {allTractors}/>
      </Route>

      <Route path='/newregistration'>
        <NewTractorForm goGetNewTractor={goGetNewTractor}/>
      </Route>

      <Route path='/contactus'>
        <ContactUs/>
      </Route>

     
    </div>

  );
}

export default App;
