import styled from 'styled-components';

export const HeaderStyle = styled.header`
    /* position: relative;
    height: 70px;
    font-size: 24px;
    font-weight: 700;

    display: flex;
    align-items: center;
    justify-content: center;
    background-color:lightblue;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    margin-bottom: 10px;
    

    button {
        position: absolute;
        left: 10px;
        height: 40px;
        width: 100px;
        padding: 4px;
        background-color:orange;
        border-radius: 8px;
        font-weight: bold;
    }

    button:hover {
        cursor: pointer;
        opacity: 0.6;
    } */

/* Rectangle 1 */

position: absolute;
width: 1440px;
height: 160px;
left: 0px;
top: 0px;

background: #FFFFFF;

/* Frame 5 */

/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 4px 10px;

position: absolute;
width: 287px;
height: 74px;
left: 1112px;
top: 41px;

background: #33A4F5;
border-radius: 8px;


/* Pokédex */

width: 106px;
height: 36px;

font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 36px;
/* identical to box height */

color: #FFFFFF;


/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;


/* image 1 */

position: absolute;
width: 307px;
height: 113px;
left: 566px;
top: 21px;

background: url(image.png);

`;