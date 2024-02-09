import styled from 'styled-components'

const PokemonCardStyle = styled.div`
    background-color: lightgrey;
    border: 2px solid black;
    border-radius: 8px;
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
            background-color: orange;
            border-radius: 8px;
            
        }
        button:hover {
        cursor: pointer;
        opacity: 0.6;
        }
    }
`

export default PokemonCardStyle;