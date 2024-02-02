import React from 'react';
import PokedexPage from './Pages/PokedexPage/PokedexPage';
import PokemonDetailPage from './Pages/PokemonDetailPage/PokemonDetailPage';
import PokemonsListPage from './Pages/PokemonsListPage/PokemonsListPage';


function App() {
  return (
    <div>
     <PokedexPage />
     <PokemonDetailPage />
     <PokemonsListPage />
    </div>
  );
}

export default App;
