import styled from 'styled-components'

export const TopNavBox = styled.div`
    z-index: 100;
    width: 100%; height: 80px;
    position: fixed; top: 0;
    background-color: white;
    display: flex; align-items: center;
    padding: 0 50px 0 50px;
    box-sizing: border-box;
    position: relative;

    & {
        position: fixed;
        top: 0;
    }

    & img {
        width: 150px;
        margin: 0 20px 0 0;
    }

    & .btns {
        width: 200px; height: 100%;
        position: absolute;
        right: 50px;
        display: flex; justify-content: center; align-items: center;
    }
    & a {
        text-decoration: none;
    }
`

export const Button = styled.div`
    width: 90px; height: 30px;
    border-radius: 5px;
    margin: 0 5px 0 5px;
    display: flex; justify-content: center; align-items: center;
    background-color: ${(props) => props.color || '#6699CC'};
    color: white;
    font-weight: bold;
    cursor: pointer;
`