import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import {v4 as uuidv4} from 'uuid';

function App() {
  const pokeApiDomain = `https://pokeapi.co/api/v2/pokemon/`;
  const [currentId, setCurrentId] = useState(1);
  const [pokemon, setPokemon] = useState({sprites:{}, weight:0, abilities: []});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${pokeApiDomain}${currentId}`)
      .then(response => response.json())
      .then(pokemonData => {
        console.log(pokemonData);
        setCurrentId(pokemonData.id);
        setPokemon(pokemonData);
        setIsLoading(false);
      })
      //.catch(err => console.error(err));
  }, [currentId]);
  const getPokemon = (id) => {
    setCurrentId(id);
  };
  return (
    <div className="App">
      <header className="App-header">
        {
          isLoading ? (
            <></>
          ) : (
            <div>
              {/* Head container */ }
              <div>
                <label>{pokemon.name}</label>        
              </div>
              
              {/* Screen container*/ } 
              <div>
                <img src={pokemon.sprites.front_default} className="App-logo" alt="logo" />
              </div>

              {/* Info container */}
              <div>
                 <button onClick ={()=> getPokemon(currentId-1)}>Previous</button>
                 <button onClick ={()=> getPokemon(currentId+1)}>Next</button>
               </div>

               <div>
                 <label>Weight</label>
                 <br/>
                 <label> {pokemon.weight}</label>
               </div>

               <div>
                {
                  pokemon.abilities.map(item =>(
                    <div key={uuidv4()}>
                      <br/>
                      <label> {item.ability.name}</label>
                      </div>
                  ))
                }
                {/* <label> abilities </label>
                <br/>
                <label>{pokemon.abilities[0].ability.name}</label>
                <br/>
                <label>{pokemon.abilities[1].ability.name}</label> */}
              </div>
            </div>
          )
        }
      </header >
    </div >
  );
}

export default App;
