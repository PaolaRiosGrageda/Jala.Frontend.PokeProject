import * as React from 'react';
import BarChart from './BarChart';
import { useState, useEffect } from 'react';

import{Card,Avatar,IconButton, CardHeader, CardActions, CardContent, CardMedia, Button, Typography, Grid} from '@mui/material';

export default function MediaCard({image,name,id,logo, pokemonTypes, pokemonWeight}) {
  
  return (
    <Card sx={{ maxWidth: 345, backgroundColor: 'green'}}>
      <CardHeader
        avatar={
          <Avatar sx={{bgcolor: 'white', boxShadow:5, padding:'5px', margin: '2px'}} aria-label="recipe " src={logo}>
          </Avatar>
        }
        titleTypographyProps= {{variant:'h4', align:'center'}}
        title={name}
        subheader={pokemonTypes.map(item =>(
              <div>
                <div className="type">
                  {item}
                </div>
              </div>
              ))}
        
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
        image={image}
        
      /> 
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Stats
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <BarChart/>
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Info
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Weight: {pokemonWeight}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          Weaknessess
        </Typography>
      </CardContent>
      
    </Card>
  );
}