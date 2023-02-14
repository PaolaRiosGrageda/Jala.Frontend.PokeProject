import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import {v4 as uuidv4} from 'uuid';

function App() {
  const pokeApiDomain = `https://pokeapi.co/api/v2/pokemon/`;
  const [currentId, setCurrentId] = useState(1);
  const [pokemon, setPokemon] = useState({sprites:{}, weight:0, abilities: []});
  const [isLoading, setIsLoading] = useState(false);
  const [types, setTypes] = useState([]);

  const getType= () => {
    setTypes(pokemon.types.map(item => item.type.name));
   };


  useEffect(() => {
    setIsLoading(true);
    fetch(`${pokeApiDomain}${currentId}`)
      .then(response => response.json())
      .then(pokemonData => {
        console.log(pokemonData);
        setCurrentId(pokemonData.id);
        setPokemon(pokemonData);
        getType();
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
                
              </div>
              <div>
                <h1>Stats</h1>
                <div>
                  {
                      // To Ask. El codigo abajo genera error con F5 
                      pokemon.stats.map(item =>(
                        <div  key={uuidv4()} >
                          <label>{item.stat.name} => {item.base_stat}/200</label>
                        </div>
                      ))
                  }
                </div>
              </div>
              
              <div>
                <h1>Types</h1>
                <div>
                  {
                    types.map(item => (
                      <div>
                        <div className="type">
                          {item}
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>

              

            </div>
          )
        }
      </header >
    </div >
  );
}

export default App;
