import React,{ useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Country from './components/Country/Country';
import Cart from './components/Cart/Cart';


function App() {
const [countries, setCountries] = useState([]);
const [cart, setCart] = useState([])
useEffect(() =>{
  fetch(`https://restcountries.eu/rest/v2/all`)
  .then(res => res.json())
  .then(data => setCountries(data))
  // To prevent crash down the page.
  .catch(error => console.log(error)) 
}, [])

const handleAddCountry = (country) => {
  const newCart = [...cart, country];
  setCart(newCart);
  

}
  return (
    <div className="App">
      <h1>Country Loaded: {countries.length}</h1>
      <h4>Country added: {cart.length}</h4>
      <Cart cart={cart}></Cart>
      
        {
          countries.map(country => <Country country = {country} handleAddCountry = {handleAddCountry} key={country.alpha3Code}></Country>)
        }
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
     
      </header>
    </div>
  );
}

export default App;
