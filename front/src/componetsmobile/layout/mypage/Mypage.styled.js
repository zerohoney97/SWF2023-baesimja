import styled from 'styled-components'

export const Top = styled.div`
    margin: 80px auto 0;
    width: 100%; height: 80px;
    font-size: 25px; font-weight: bold;
    text-align: start;
    padding: 0 50px 0 50px;
    box-sizing: border-box;
    display: flex; align-items: center;
    background-color: white;
`

export const Nav = styled.div`
    width: 180px; height: auto;
    position: fixed; left: 50px; top: 160px;
    display: flex; justify-content: center; align-items: center;
    flex-direction: column;

    & .nav-item {
        width: 100%; height: 50px;
        border-bottom: 1px solid silver;
        display: flex;
        padding: 15px;
        box-sizing: border-box;
        cursor: pointer;
    }
    & .nav-item:hover {
        background-color: rgba(0, 0, 0, 0.05);
    }
    & .nav-item .nav-icon {
        width: 20px; height: 20px;
        border: 1px solid;
        border-radius: 100%;
    }
    & .nav-item p {
        margin: 0 0 0 5px; padding: 0;
        font-size: 14px;
    }
`

export const Content = styled.div`
    width: 100%; height: calc(100vh - 280px);
    //border: 1px solid;
    background-color: white;
    position: relative;

    & .content {
        width: calc(100% - 310px); height: 100%;
        position: absolute; left: 260px;
        overflow-y: scroll;
        overflow-x: hidden;
    }
    & .content .case {
        width: 100%; height: 30px;
        border-bottom: 1px solid silver;
    }
`