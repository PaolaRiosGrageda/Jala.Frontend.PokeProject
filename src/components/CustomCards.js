import * as React from 'react';
import {BarChart} from './BarChart';
import { useState, useEffect } from 'react';
import {Abilities}   from './Abilities';
import{Card,Avatar,IconButton, CardHeader, CardActions, CardContent, CardMedia, Button, Typography, Grid} from '@mui/material';
import { Types } from './Types';

export default function MediaCard({pokemonInfo}) {
  
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


  const getStatsInfo = (pokemonInfo1)=>{
    let label1 = [];
    let stats1 = [];
    // pokemonInfo1.stats.forEach(element => {
    //   label1.push(element.stat.name);
    //   stats1.push(element.base_stat);
    // });
    return [label1, stats1];

  }
   
  return (
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
          Stats
           <BarChart inputData={getStatsInfo(pokemonInfo)}/>
        </Typography>
        <Typography variant="body2" color="text.secondary">
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Info
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          WEIGHT: {pokemonInfo.weight}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Weaknessess
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          ABILITIES:
          <Abilities pokemonInfo={pokemonInfo} />
        </Typography>
      </CardContent>
      
    </Card>
  );
}