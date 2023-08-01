import styled from 'styled-components'

// & : 스타일이 적용되고 있는 대상

export const MainSearchBox = styled.div`
    margin: 100px auto 0;
    position: relative;
    width: calc(100% - 100px);
    height: 420px;
    background: linear-gradient(to right, #111111, #6699CC);
    border-radius: 15px;
    display: flex; flex-direction: column;
    justify-content: center; align-items: center;

    & .big-text {
        color: white;
        font-size: 40px; font-weight: bold;
        margin: 0;
    }

    & .small-text {
        color: white;
        font-size : 16px;
        margin: 15px 0 35px 0;
    }
    & .small-text span {
        font-weight: bold;
    }

    & .suggest-wrap {
        width: 750px; height: 35px;
        margin: 15px 0 0 0;
        display: flex; align-items: center;
    }
`

export const Suggest = styled.div`
        width: 100px; height: 100%;
        border: 2px solid white;
        border-radius: 20px;
        color: white; font-weight: 500;
        margin: 0 5px 0 5px;
        display: flex; justify-content: center; align-items: center;
        cursor: pointer;

    &:hover {
        background-color: white;
        color: black;
    }
`



export const MainExamBox = styled.div`
    margin: 20px auto 20px;
    position: relative;
    width: calc(100% - 100px);
    height: 420px;
    display: flex; flex-direction: row;
    justify-content: center; align-items: center;
`

export const MainExam = styled.div`
    width: ${(props) => props.width||'30%'};
    height: 100%;
    margin: 10px;
    border-radius: 15px;
    background-color: white;
    box-shadow: 1px 1px 3px 3px #6699CC;
`