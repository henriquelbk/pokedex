import styled from 'styled-components'

const PokemonCardStyle = styled.div`
    
position: relative;
width: 440px;
height: 266px;

 #container {
    display: flex;
    align-items: center;
    height: 50vh;
    justify-content: center;
    border: 1px solid black;
 }

button:hover {
    cursor: pointer;
    opacity: 0.7;
    transition: .3s;
}

#add {
display: flex;
padding: 4px 10px;
padding-left: 10px;
color: #FFFFFF;
font-weight: bold;
background: #33A4F5;
border-radius: 8px;
border: transparent
}
#detalhes {
    padding-right: 200px;
    background-color: transparent;
    text-decoration: underline;
    border: transparent;
}
#remove {
    
}
`

export default PokemonCardStyle;