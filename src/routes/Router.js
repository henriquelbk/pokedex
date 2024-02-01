import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BASE_URL } from "../conssrc/Pages/PokemonListPage';nts/url";
import PokedexPage from "../Pages/PokedexPage/PokedexPage";
import PokemonDetailPage from "../Pages/PokemonDetailPage/PokemonDetailPage";
import PokemonsListPage from "../Pages/PokemonsListPage/PokemonsListPage";

function Router() {
  // const [pokelist, setPokelist] = useState([]);
  // const [pokedex, setPokedex] = useState([]);

  // useEffect(() => {
  //   fetchPokelist();
  // }, []);

  // const fetchPokelist = async () => {
  //   try {
  //     const response = await axios.get(BASE_URL);
  //     setPokelist(response.data.results);
  //   } catch (error) {
  //     console.log("Erro ao buscar lista de pokemons");
  //     console.log(error.response);
  //   }
  // };

  // const addToPokedex = (pokemonToAdd) => {
  //   const isAlreadyOnPokedex = pokedex.find(
  //     (pokemonInPokedex) => pokemonInPokedex.name === pokemonToAdd.name
  //   );

  //   if (!isAlreadyOnPokedex) {
  //     const newPokedex = [...pokedex, pokemonToAdd];
  //     setPokedex(newPokedex);
  //   }
  // };

  // const removeFromPokedex = (pokemonToRemove) => {
  //   const newPokedex = pokedex.filter(
  //     (pokemonInPokedex) => pokemonInPokedex.name !== pokemonToRemove.name
  //   );

  //   setPokedex(newPokedex);
  // };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PokedexPage />} />
        <Route path="/pokedex" element={<PokemonDetailPage />} />
        <Route path="*" element={<PokemonsListPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;