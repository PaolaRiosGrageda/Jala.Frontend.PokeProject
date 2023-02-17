import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import{Card,Avatar,IconButton, CardHeader, CardActions, CardContent, CardMedia, Button, Typography} from '@mui/material';
import {v4 as uuidv4} from 'uuid';
import MediaCard from './components/CustomCards';
import BarChart from './components/BarChart';


function App() {
  const pokeApiDomain = `https://pokeapi.co/api/v2/pokemon/`;
  const [currentId, setCurrentId] = useState(1);
  //const [pokemon, setPokemon] = useState({sprites:{}, weight:0, abilities: []});
  const [pokemon, setPokemon] = useState({sprites:{other:{"official-artwork":{}}}, weight:0, abilities:[]});
  const [isLoading, setIsLoading] = useState(false);
  const [types, setTypes] = useState([]);
  const [damageDouble, setDamageDouble] = useState([]);
  const [damageHalf, setDamageHalf] = useState([]);

  const getType= () => {
    setTypes(pokemon.types.map(item => item.type.name));
   };
   
  // const getDamageInformation= () => {
  //   getType();
  //   setDamageDouble([]);
  //   setDamageHalf([]);

  //   console.log("Before fetch refresh");
  //   console.log(damageDouble);

  //   const typeUrls = pokemon.types.map(item=> item.type.url);
  //   typeUrls.forEach(typeUrl => {
  //     fetch(typeUrl)
  //     .then(response => response.json())
  //     .then(typeData => {
        
  //       let damageFromDouble = typeData.damage_relations.double_damage_from
  //                           .map(x => x.name); 
                            
  //       let damageFromHalf = typeData.damage_relations.half_damage_from
  //                           .map(x => x.name);

  //       // setDamageDouble([...damageFromDouble]);
  //       // setDamageHalf([...damageHalf, ...damageFromHalf]);
        
  //       damageFromDouble.forEach(x => damageDouble.push(x));
  //       damageFromHalf.forEach(x => damageHalf.push(x));

  //        console.log("Internal review")
  //        console.log(damageDouble);
  //       // console.log(damageDouble);
  //       // console.log(damageD);
  //       // setDamageDouble(...damageDouble);
  //     })
  //   });

  //   console.log("After fetch")
  //   console.log(damageDouble);
    
  //   // setDamageDouble(damageHalf.filter(x => !types.includes(x)));
  //   // setDamageHalf(damageDouble.filter(x => !types.includes(x)));
  // };

  useEffect(() => {
    setIsLoading(true);
    fetch(`${pokeApiDomain}${currentId}`)
      .then(response => response.json())
      .then(pokemonData => {
        // console.log(pokemonData);
        setCurrentId(pokemonData.id);
        setPokemon(pokemonData);
        getType();
       // getDamageInformation();
        setIsLoading(false);
      })
      //.catch(err => console.error(err));
  }, [currentId]);
 
  const getPokemon = (id) => {
    let currentId= id > 150 ? 1 : id < 1 ? 150 : id;
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
            <div style=
              {{
                borderRadius:'5px',
                boxShadow: '0 0 0 .4em yellow',
                display: 'flex',
                flexDirection:'row',
               // backgroundImage: t2,
                zIndex:100

              }}>
              <div style= {{marginRight:'-23px', zIndex:1, display:'flex', alignItems:'center'}}>
                <button onClick = {()=> getPokemon(currentId-1)}>{'<'}</button>
              </div>
              <div>
                <MediaCard  image={pokemon.sprites.other['official-artwork'].front_default} logo ={pokemon.sprites.front_default} name={pokemon.name} pokemonTypes={types} pokemonWeight={pokemon.weight}></MediaCard>
                {/* <label> Weight</label>
                <label>{pokemon.weight}</label> */}
               
              </div>
              <div style={{marginLeft:'-23px', zIndex:1, display:'flex', alignItems:'center'}}>
                <button onClick={()=> getPokemon(currentId +1)}>{'>'}</button>
              </div>        
            </div> 
            <div>
            
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
                
              </div>
              
              <div>
                {/* <h1>Types</h1> */}
                
              </div>
              <div>
                <h1>Weaknessess</h1>
                
              </div>
            </div>
          )
        }
      </header >
    </div >
  );
}

export default App;
