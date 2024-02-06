import PokemonsListPageStyled from "../../Pages/PokemonsListPage/PokemonsListPageStyle";
import { Header } from "../../Components/Header/Header";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import { useContext } from "react";
import GlobalContext from "../../contexts/GlobalContext";

const PokemonsListPage = () => {
  const context = useContext(GlobalContext);
  const { pokelist, addToPokedex, pokedex } = context;

  // não mostrar pokemons que estão na pokedex
  const filteredPokelist = () =>
    pokelist.filter(
      (pokemonInList) =>
        !pokedex.find(
          (pokemonInPokedex) => pokemonInList.name === pokemonInPokedex.name
        )
    );

  return (
    <PokemonsListPageStyled>
      <Header />
      <section>
        {filteredPokelist().map((pokemon) => (
            <PokemonCard
                key={pokemon.url}
                pokemonUrl={pokemon.url}
                addToPokedex={addToPokedex}
            />    
        ))}
      </section>
      <PokemonCard />
    </PokemonsListPageStyled>
  );
};

export default PokemonsListPage