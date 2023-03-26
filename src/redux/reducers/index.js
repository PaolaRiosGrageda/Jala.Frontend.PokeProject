import { combineReducers } from 'redux';
import favorite from "./favoritePokeReducer"; 

const rootReducer = combineReducers({
  favorite
});

export default rootReducer;