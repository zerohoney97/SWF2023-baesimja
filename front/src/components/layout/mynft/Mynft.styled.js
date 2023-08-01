import styled from 'styled-components'

export const Top = styled.div`
    margin: 100px auto 0;
    width: calc()(100% - 100px); height: 50px;
    font-size: 20px; font-weight: bold;
    display: flex; justify-content: center; align-items: center;
`

export const MyNftBox = styled.div`
    margin: 0px auto 50px;
    padding: 15px;
    position: relative;
    width: 1200px;
    height: auto;
    background: linear-gradient(to right, #111111, #6699CC);
    border-radius: 15px;
    display: flex; flex-wrap: wrap;
    justify-content: center;
    box-sizing: border-box;
`

export const Collection = styled.div`
    width: 200px; height: 260px;
    border: 1px solid silver;
    border-radius: 10px;
    margin: 15px;
    position: relative;
    overflow: hidden;

    & img {
        width: 100%;
    }
    & p {
        width: 60%; height: 13px;
        margin: 5px;
        color: white;
        font-size: 12px;
        text-align: start;
        white-space : nowrap; overflow : hidden;
        text-overflow: ellipsis;
    }
    & p:hover {

    }
    & .nft-info {
        font-weight: bold;
    }
    & .goto {
        width: 15px; height: 15px;
        position: absolute; right: 8px; bottom: 10px;
        filter: invert();
        cursor: pointer;
    }
    & .goto:hover {
        transform: scale(105%);
    }
`