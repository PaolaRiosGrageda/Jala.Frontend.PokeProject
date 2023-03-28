import React from 'react';
import DrawerAppBar from "./UI/DrawerAppBar";
import { Footer } from "./Footer";
import { connect, useDispatch } from 'react-redux';
import * as favoritePokeActions from '../redux/actions/favoritePokeActions';
import PropTypes from 'prop-types';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { useState, useEffect,useContext } from 'react';
import ThemeContext from "./context/ThemeContext";



function Favorites (favorites) {
    const data = useContext(ThemeContext);
    const [favorite, setFavorite] = useState(0);
    const dispatch = useDispatch(); // despachar acciones
    const columns = [
        {field: "col1", headerName: "Id", width: 30},
        {field: "col2", headerName: "Name", width: 100},
        //{field: "col3", headerName: "Types", width: 300}
    ];
    
    const rows = [
          // { id: 1, col1: '123', col2: 'Poke1' },
          // { id: 2, col1: '456', col2: 'Poke 2' },
          // { id: 3, col2: '789', col2: 'Charmander' },
    ];
   
   
    for (var i = 0; i < favorites.favorites.favorite.length; i++){
        rows.push( {id:i, 
                  col1: favorites.favorites.favorite[i].pokemonId, 
                  col2: favorites.favorites.favorite[i].name })
        
    }
    // handlePao = (event) => {
    //     dispatch(favoritePokeActions.addFavoritePokemon({
    //         pokemonId: pokemonInfo.id,
    //         name: pokemonInfo.name,
    //         types: pokemonInfo.types
    //       }));
    // }


  return (
    <div className= {data.theme}>
        <DrawerAppBar>hooolllaaa</DrawerAppBar>
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
        <footer className="App-footer"> 
                <Footer/>
        </footer> 
    </div>
  )
}
Favorites.propTypes = {
    favorites: PropTypes.array
}
function mapStateToProps(state,ownProps){
    return{
        favorites:state
    }
}

export default connect(mapStateToProps)(Favorites);
