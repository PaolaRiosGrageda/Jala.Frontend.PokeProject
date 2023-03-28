import React from 'react';
import SignInComponent from "./components/SigInComponent";
import PokemonCard from "./components/PokemonCard";
import Favorites from "./components/Favorites";
import { Routes,Route } from "react-router-dom";
import { PageNotFoundComponent } from "./components/PageNotFoundComponent";
import { ThemeProvider } from "./components/context/ThemeContext";

function App() {

  return (
    <div className="App">
      
        <main>
         <ThemeProvider> 
          <Routes>
            <Route path='/' element= {<SignInComponent/>}></Route>
            <Route path='/Login' element= {<SignInComponent/>}></Route>

            <Route path='/home' element={<PokemonCard/>}></Route>
            <Route path='*' element={<PageNotFoundComponent/>}></Route>
            <Route path='/Favorites'element={<Favorites/>}></Route>
          </Routes>
         </ThemeProvider>  
        </main>
      
      </div>
  );
}
export default App;
