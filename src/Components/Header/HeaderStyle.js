import styled from 'styled-components';

export const HeaderStyle = styled.header`
    position: relative;
    height: 70px;
    font-size: 24px;
    font-weight: 700;

    display: flex;
    align-items: center;
    justify-content: center;
    background-color:lightblue;


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
    }

`;