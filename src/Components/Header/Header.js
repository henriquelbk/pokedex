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
                        Ver Pokedex
                    </button>
                     <img src="image 1.svg" alt="Pokemon"></img>                 
                    </>
                );
            case '/pokedex':
                return  (
                    <>
                      <button onClick={() => goToHomePage(navigate)}>
                        Ver lista de pokemons
                      </button>
                      <span>POKEDEX</span>
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