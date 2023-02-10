import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const pokeApiDomain= `https://pokeapi.co/api/v2/pokemon/`;
  const [currentId, setCurrentId]= useState(1);
  const [pokemon, setPokemon]= useState({});

  useEffect(()=>{
    fetch(`${pokeApiDomain}${currentId}`)
    .then((response)=>response.json())
    .then(pokemonData=>{
      console.log(pokemonData);
      setCurrentId(pokemonData.id);
      setPokemon(pokemonData);
    })
  },[currentId]);
  const getPokemon=(id)=>{
    setCurrentId(id);
  };
  return (
    <div className="App">
      <header className="App-header">
       {/* Head container */}
        <div>
          <label>{pokemon.name}</label>        
        </div>
        {/* Screen container*/} 
        <div>
          <img src={pokemon.sprites.front_default} className="App-logo" alt="logo" />
        </div>
        <div>
          {/* Info container */}
        </div>
        <div>
          <button onClick ={()=> getPokemon(currentId+1)}>next</button>
        </div>
      </header>
    </div>
  );
}

export default App;
