import styled from 'styled-components'

const PokemonCardStyle = styled.div`
    /* background-color: lightgrey;
    border: 2px solid black;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    
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
        
    } */
    button {
/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 4px 10px;
color: #FFFFFF;
font-weight: bold;
position: absolute;
background: #33A4F5;
border-radius: 8px;
border: solid transparent
}

button:hover {
    cursor: pointer;
    opacity: 0.7;
    transition: .3s;
}

#detalhes {
    background-color: transparent;
    text-decoration: underline;

}
`

export default PokemonCardStyle;