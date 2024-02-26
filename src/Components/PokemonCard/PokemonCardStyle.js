import styled from 'styled-components'

const PokemonCardStyle = styled.div`
    
position: absolute;
width: 440px;
height: 266px;



 #container {
    display: flex;

 }

button:hover {
    cursor: pointer;
    opacity: 0.7;
    transition: .3s;
}

#add {
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
border: transparent
}
#detalhes {
    position: absolute;
    background-color: transparent;
    text-decoration: underline;
}
#remove {
    
}
`

export default PokemonCardStyle;