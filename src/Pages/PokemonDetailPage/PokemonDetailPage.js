import React from 'react';
import { Header } from '../../Components/Header/Header';
import { useContext } from "react";
import GlobalContext from "../../contexts/GlobalContext";


const PokemonDetailPage = () => {

    const context = useContext(GlobalContext)
    const { pokedex, addToPokedex, removeFromPokedex} = context;

    return (
        <div>
        <Header />
        </div>
    );
};

export default PokemonDetailPage;