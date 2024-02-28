import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { goToDetailsPage } from "../../routes/coordinator";
import PokemonCardStyle from './PokemonCardStyle';


function PokemonCard(props) {
  const { pokemonUrl, addToPokedex, removeFromPokedex } = props;

  // hook para saber nosso path atual
  const location = useLocation();

  // hook para redirecionar
  const navigate = useNavigate();

  const [pokemon, setPokemon] = useState({});

  // guarda, porque ainda não renderizamos
  useEffect(() => {
    fetchPokemon();
  });

  const fetchPokemon = async () => {
    try {
      const response = await axios.get(pokemonUrl);
      setPokemon(response.data);
    } catch (error) {
      console.log("Erro ao buscar lista de pokemons");
      console.log(error);
    }
  };

  return (
    <PokemonCardStyle>
      <img src={pokemon.sprites?.front_default} alt={pokemon.name} />
      <div id='container'>
        <button id='detalhes' onClick={() => goToDetailsPage(navigate, pokemon.name)}>
          Ver detalhes
        </button>
        {location.pathname === "/" ? (
          <button id='add' onClick={() => addToPokedex(pokemon)}>
            Capturar
          </button>
        ) : (
          <button id='remove' onClick={() => removeFromPokedex(pokemon)}>
            Remover
          </button>
        )}

        
      </div>
    </PokemonCardStyle>
  );
}

export default PokemonCard;