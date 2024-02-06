import { PokedexPageStyle } from './PokedexPageStyle';
import { Header } from '../../Components/Header/Header';
import PokemonCard from '../../Components/PokemonCard/PokemonCard';
import { BASE_URL } from '../../constants/url';
import { useContext } from 'react';
import GlobalContext
from '../../contexts/GlobalContext';


const PokedexPage = () => {

    const context = useContext(GlobalContext);
    const { pokedex, removeFromPokedex } = context;

    return (
        <PokedexPageStyle>
            <Header />
            <section>
                {pokedex.map((pokemon) => (
                    <PokemonCard
                        key={pokemon.name}
                        pokemonUrl={`${BASE_URL}/${pokemon.name}`}
                        removeFromPokedex={removeFromPokedex} 
                        />
                    ))}
            </section>
            <PokemonCard />
        </PokedexPageStyle>
    );
};

export default PokedexPage;