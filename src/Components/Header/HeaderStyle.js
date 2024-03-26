import styled from "styled-components";

export const HeaderStyle = styled.header`
    
/* White Rectangle */

position: absolute;
width: 100%;
height: 120px;
left: 0px;
top: 0px;
background: #FFFFFF;

display: flex;
justify-content: center;
align-items: center;

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
width: 180px;
height: 44px;
left: 900px;

background: #33A4F5;
border-radius: 8px;
border: solid transparent
}

button:hover {
    cursor: pointer;
    opacity: 0.7;
    transition: .3s;
}
/* Frame 5 */

/* span {
position: absolute;
justify-content: center;
width: 307px;
height: 113px;
left: 566px;
top: 21px;

background: url(image.png); */

.logo {

position: absolute;
width: 307px;
height: 113px;
left: 566px;
top: 21px;

background-image: url(image1.png);

}

`;
