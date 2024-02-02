import styled from 'styled-components'

const PokemonCardStyle = styled.div`
    background-color: lightgrey;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
        height: 200px;
    }

    div {
        display: flex;
        width: 100%;

        button {
            width: 50%;
            height: 40px;
        }
    }
`

export default PokemonCardStyle;