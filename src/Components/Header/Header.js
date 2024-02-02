import { useLocation, useNavigate } from "react-router-dom";
import { goToHomePage, goToPokedexPage } from "../../routes/coordinator";
import { HeaderStyle } from "../Header/HeaderStyle";

export const Header = () => {
    
    const location = useLocation();

    const navigate = useNavigate();

    const renderHeader = () => {
        switch (location.pathname) {
            case '/':
                return (
                    <>
                    <button onClick={() => goToPokedexPage(navigate)}>
                        Ver pokedex
                    </button>
                     <span>Lista de pokemons</span>                     
                    </>
                );
            case '/pokedex':
                return  (
                    <>
                      <button onClick={() => goToHomePage(navigate)}>
                        Ver lista de pokemons
                      </button>
                      <span>Pokedex</span>
                    </>
                  );
            default:
                return (
                      <>
                        <button onClick={() => goToHomePage(navigate)}>
                          Voltar para página inicial
                        </button>
                        <span>Página inexistente</span>
                      </>
                    );      
    }
}
    return <HeaderStyle>{renderHeader()}</HeaderStyle>
    }