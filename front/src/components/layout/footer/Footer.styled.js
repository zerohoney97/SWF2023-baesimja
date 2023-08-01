import styled from 'styled-components'

export const FooterBox = styled.div`
    z-index: 100;
    width: 100%; height: 100px;
    background-color: white;
    display: flex; align-items: center;
    padding: 0 50px 0 50px;
    position: relative;
    box-sizing: border-box;
    border-top: 1px solid silver;

    & img {
        width: auto; height: 30px;
    }
    & .git {
        position: absolute;
        right: 70px;
        cursor: pointer;
    }
    & .git:hover {
        transform: scale(103%);
    }

    & p {
        font-size: 12px;
        margin: 0 0 0 20px;
    }
`