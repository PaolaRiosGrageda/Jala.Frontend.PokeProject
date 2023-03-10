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
  const [damageDouble, setDamageDouble] = useState([]);
  const [damageHalf, setDamageHalf] = useState([]);
  

  // const [damageTo, setDamageTo] = useState([]);
  // const [weaknesses, setWeaknesses] = useState([]);

  const getType= () => {
    setTypes(pokemon.types.map(item => item.type.name));
   };
   
  const getDamageInformation= () => {
    // let damageFromDouble=[];
    // let damageFromHalf=[];
    setDamageDouble([]);
    console.log(damageDouble.length);
    setDamageHalf([]);
    getType();

    const typeUrls = pokemon.types.map(item=> item.type.url);
    typeUrls.forEach(typeUrl => {
      fetch(typeUrl)
      .then(response => response.json())
      .then(typeData => {
        
        // setDamage([damage, ...typeData.damage_relations.double_damage_from
        //                      .map(x => x.name)]);
        // typeData.damage_relations.double_damage_from
        //                      .forEach(damage => {
        //                         damage.push(damage.name);
        //                         console.log(damage);
        //                      });
        
        let damageFromDouble = typeData.damage_relations.double_damage_from
                            .map(x => x.name); 
                            
        let damageFromHalf = typeData.damage_relations.half_damage_from
                            .map(x => x.name);

        setDamageDouble([...damageFromDouble]);
        setDamageHalf([...damageFromHalf]);
        // console.log(damageFromDouble);
        

        // console.log (damageFromDouble[0], damageFromHalf[0]+"hollaaaaa");

        //setDamageFrom([damageFrom, ...damageFromTmp]);
        // setDamageTo([damageTo, ...damageToTmp]);  
        // const result = FilterWeaknesses(damage)                         
      })
    });

    // console.log(damage);
    
    // let damageFromSet = [...new Set(damageFrom)];
    // let damageToSet = [...new Set(damageTo)];
    
    // //Remove Pokemon types from Damage
    // setDamageFrom(damageFromSet.filter(x => !types.includes(x)));
  };



  useEffect(() => {
    setIsLoading(true);
    fetch(`${pokeApiDomain}${currentId}`)
      .then(response => response.json())
      .then(pokemonData => {
        // console.log(pokemonData);
        setCurrentId(pokemonData.id);
        setPokemon(pokemonData);
        getDamageInformation();
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
                 <button onClick ={()=> getPokemon(currentId>1? currentId-1 : currentId)}>Previous</button>
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
                          <label>{item.stat.name} {item.base_stat}/200</label>
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
              <div>
                <h1>Weaknessess</h1>
                <div>
                 {/* Aqui code weaks */}
                 {
                  damageDouble.map(item => (
                    <div>
                      {item }
                    </div>
                  ))
                  
                 }
                 {
                  damageHalf.map(item => (
                    <div>
                      {item }
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
