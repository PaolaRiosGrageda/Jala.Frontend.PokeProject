import * as React from 'react';
import {BarChart} from './BarChart';
import { useState, useEffect,useContext } from 'react';
import {Abilities}   from './Abilities';
import{Card,Avatar,IconButton, CardHeader, CardActions, CardContent, CardMedia, Button, Typography, Grid} from '@mui/material';
import { Types } from './Types';
import { Weaknessess } from './Weaknessess';
import  ThemeContext  from './context/ThemeContext';
import  StarBorderIcon  from '@mui/icons-material/StarBorder';
import { positions } from '@mui/system';
import { connect, useDispatch } from 'react-redux';
import * as favoritePokeActions from '../redux/actions/favoritePokeActions';
import PropTypes from 'prop-types';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import Favorites from './Favorites';

function MediaCard({pokemonInfo, weaknessess, statsInfo, favorites}) {
  
  const [favorite, setFavorite] = useState(0);
  const [starColor1, setStarColor1] = useState({Color: "black"});
  const dispatch = useDispatch(); // despachar acciones


  // console.log(pokemonInfo);
  // const [weaknes, setweaknes] = useState([]);
  const data = useContext(ThemeContext);
  const getImage=(info)=>{
    return info.sprites.other['official-artwork'].front_default
  };

  const getLogo=(info)=>{
    return info.sprites.front_default;
  };

  const getTypes= (info) => {
    if (info!=null && info.types!=null)
      return info.types.map(item => item.type.name);
    return [];
  };

  const columns = [
    {field: "col1", headerName: "Id", width: 30},
    {field: "col2", headerName: "Name", width: 100},
   // {field: "col3", headerName: "Types", width: 300}
  ];

  const rows = [
    // { id: 1, col1: '123', col2: 'Poke1' },
    // { id: 2, col1: '456', col2: 'Poke 2' },
    // { id: 3, col2: '789', col2: 'Charmander' },
  ];

  var id = 5;
  const newFavorites = [];
  for (var i = 0; i < favorites.favorite.length; i++){
    rows.push( {id:i, col1: favorites.favorite[i].pokemonId, col2: favorites.favorite[i].name })
    
  }


  
  // array.forEach(element => {
    
  // });
  // console.log("El size de los pokemon es: " + favorites.favorite.length);
  
   

  // const getStatsInfo = (pokemonInfo1)=>{
  //   let label1 = [];
  //   let stats1 = [];

  //   // console.log(pokemonInfo1);
  //   // pokemonInfo1.stats.forEach(element => {
  //   //   label1.push(element.stat.name);
  //   //   stats1.push(element.base_stat);
  //   // });
  //   return [label1, stats1];

  // }

  // handlePao = (event) => {
  //   console.log("Testing from HandlePAo");
  //   console.log(event);
  // };

  return (
    <div className= {data.Theme}>
      
    <Card sx={{ maxWidth: 345, backgroundColor: 'green'}}>
      <CardHeader
        avatar={
          <Avatar sx={{bgcolor: 'white', boxShadow:5, padding:'5px', margin: '2px'}} 
                  aria-label="recipe " 
                  src={getLogo(pokemonInfo)}>
          </Avatar>
        }
      
        titleTypographyProps= {{variant:'h4', align:'center'}}
        title={pokemonInfo.name}
        subheader= {
          <Types info = {getTypes(pokemonInfo)}/>
        }
        action = {
          <IconButton>
            <StarBorderIcon 
              size='large'
              sx={{
                color: starColor1.Color,
                ':hover': {backgroundColor: 'red', opacity:0.9}
              }}
              //TO-ASK: Why the following is not working? handle Pao is on line 46
              //  onClick={handlePao
              //  }
              
              onClick={(event => {
                dispatch(favoritePokeActions.addFavoritePokemon({
                  pokemonId: pokemonInfo.id,
                  name: pokemonInfo.name,
                  types: pokemonInfo.types
                }));
                const newPokemon={
                  pokemonId: pokemonInfo.id,
                  name: pokemonInfo.name,
                  types: pokemonInfo.types
                }
                
                if(starColor1.Color === "black")
                  starColor1.Color = "yellow";
                else
                  starColor1.Color = "black";
                Favorites(newPokemon);
              })}
              
            >
            </StarBorderIcon>
          </IconButton>
        }
      />
      
      <CardMedia
        sx={{
          minHeight: '300px',
          maxHeight: '300px',
          padding: "15px",
          objectFit: "contain",
          backgroundColor: 'skyblue',
          width: "auto" 
        }}
        image={getImage(pokemonInfo)}
        
      /> 
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
           <BarChart inputData={statsInfo}/>
        </Typography>
        <Typography variant="body2" color="text.secondary">
        </Typography>
        <Typography gutterBottom variant="h3" component="div">
          Info
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          WEIGHT: {pokemonInfo.weight}
        </Typography>
        <Weaknessess weaknesssess={weaknessess}/>
        <Typography gutterBottom variant="h3" component="div">
          ABILITIES:
        </Typography>
        <Abilities pokemonInfo={pokemonInfo} />
      </CardContent>
      
    </Card>
    <div>
      <DataGrid 
          
          rows={rows} 
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 20,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
          autoHeight
        />
    </div>
   
       
  </div>
  
  );
}

MediaCard.propTypes = {
  favorites: PropTypes.array
}

function mapStateToProps(state, ownProps) {
  return { 
    favorites: state
  }
}

export default connect(mapStateToProps)(MediaCard);