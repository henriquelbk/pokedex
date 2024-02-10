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
    }

`;