import React from 'react';
import PokedexPage from './Components/Pages/PokedexPage';
import PokemonDetailPage from './Components/Pages/PokemonDetailPagesPage';
import PokemonsListPage from './Components/Pages/PokemonsListPage';

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
