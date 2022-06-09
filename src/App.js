import './App.css';
import Location from './components/Location';
import { useState,useEffect } from 'react';
import axios from 'axios';
import ResidentList from './components/ResidentList';
function App() {
  document.body.style = "background: #272121";
  //Funcion para generar un numero random del largo del arreglo
  const getNumber = Math.floor(Math.random() * 20)
  //usamos un estado para setear la informacion de la API  
  const [locationInfo,setLocationInfo] = useState({})
  //usamos el useEffect para controlar los bucles infinitos, y tener el arreglo de dependencia 
  useEffect(() => {
              //usamos el metodo get para traer los datos de la API 
      axios.get(`https://rickandmortyapi.com/api/location/${getNumber}`)
          //usamos el then para recibir la promesa
          .then(res =>setLocationInfo(res.data))
  },[getNumber])
  //Funcion para realizar la busqueda
  const [locationId,setLocationId] = useState("")

  const searchLocation = () => {
    axios.get(`https://rickandmortyapi.com/api/location/${locationId}/`)
    .then( res => setLocationInfo(res.data))
}
  
  return (
    <div className="App">
      <div className='banner'></div>
      <div className="container">
        <h1>Rick & Morty App</h1>
        <Location 
          locationInfo={locationInfo}
          setLocationId={setLocationId} 
          searchLocation={searchLocation} 
          locationId={locationId}
        />
        <h3>Residents</h3>
        <ResidentList residentUrl ={locationInfo.residents}/>
      </div>
    </div>
  );
}

export default App;
