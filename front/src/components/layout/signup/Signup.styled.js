import styled from 'styled-components'

// 전체 큰 틀
export const SignupBox = styled.div`
    width: 100%; height: calc(100vh - 180px);
    display: flex; flex-direction: column;
    justify-content: center; align-items: center;
    background-color: white;
    margin: 80px auto 0;
`

// 상단 큰 글씨
export const Title = styled.div`
    width: 470px; height: auto;
    font-size: 25px; font-weight: bold;
    text-align: start;
    padding: 30px 10px 30px 10px;
    box-sizing: border-box;
    color: rgb(51, 51, 51);
`

// 점선 박스
export const Step = styled.div`
    width: 470px; height: auto;
    border: 2px solid;
    border-style: dashed;
    padding: 20px;
    margin: 0 0 20px 0;
    box-sizing: border-box;
    color: ${(props) => props.color || 'rgb(85, 85, 85)'};
    position: relative;

    & .goto {
        width: 300px; height: 60px;
        background-color: #FFA500;
        border-radius: 5px;
        margin: 10px 0 0 0;
        display: flex; justify-content: center; align-items: center;
    }
    & .goto:hover {
        transform: scale(101%);
    }
    & img {
        height: 40px;
    }
    & a {
        text-decoration: none;
    }
    & a .btn {
        width: 100%; height: 45px;
        border: 1px solid #6699CC;
        border-radius: 5px;
        background-color: white;
        color: #6699CC;
        font-weight: bold;
        display: flex; justify-content: center; align-items: center;
        cursor: pointer;
    }

    & .msg {
        font-size: 12px;
        color: red;
        text-align: start;
        margin: 0 0 15px 0;
    }

    & .dupChk {
        width: 60px; height: 20px;
        position: absolute;
        right: 20px;
        font-size: 12px;
        color: #FFA500;
        cursor: pointer;
        pointer-events: ${(props) => props.clicked || 'visile'};
    }
`
export const SubTitle = styled.div`
    width: 100%; height: 40px;
    font-size: 24px; font-weight: bold;
    text-align: start;
    box-sizing: border-box;
`
export const Label = styled.div`
    width: 100%; height: auto;
    font-size: 16px; font-weight: bold;
    text-align: start;
    color: ${(props) => props.color || 'rgb(85, 85, 85)'};
    margin: 0 0 5px 0;
`
export const Input = styled.input`
    width: 100%; height: 40px;
    border-radius: 5px;
    border: 1px solid silver;
    box-sizing: border-box;
    color: rgb(51, 51, 51);
    padding: 5px;
    margin: 0 0 0 0;
    outline-color: rgb(51, 51, 51);
    pointer-events: ${(props) => props.clicked || 'visile'};
    position: relative;
`
export const Text = styled.p`
    color: #FFA500;
    font-size: 12px; font-weight: bold;
    margin: 3px 0 0 2px;
    text-align: start;
    display: ${(props) => props.show || 'none'};
`
export const Button = styled.div`
    width: 100%; height: 45px;
    border-radius: 5px;
    //background-color: #6699CC;
    background-color: ${(props) => props.color || 'rgb(85, 85, 85)'};
    color: white;
    font-weight: bold;
    display: flex; justify-content: center; align-items: center;
    cursor: pointer;
    pointer-events: ${(props) => props.clicked || 'visible'};
`