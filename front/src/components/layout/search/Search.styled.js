import styled from 'styled-components'

export const SearchTopBox = styled.div`
    width: 100%; height: 60px;
    padding: 80px 50px 0 50px;
    display: flex;
    background-color: white;
`


export const SearchMidBox = styled.div`
    width: 50%; height: auto;
    background-color: white;
    padding: 0 0 0 50px;
    box-sizing: border-box;
`
export const PaginationBox = styled.div`
    width: 100%; height: 100px;
    border: 1px solid;
    display: flex;
    justify-content: center; align-items: center;

    & .page-btn {
        width: 30px; height: 30px;
        border: 1px solid;
        font-size: 16px;
        display: flex; justify-content: center; align-items: center;
        
    }
`


export const DetailBox = styled.div`
    width: 50vw; height: calc(100vh - 80px);
    position: fixed; top: 80px; right: 0;
    border: 1px solid silver;
    background-color: white;
    overflow-y: scroll;
    overflow-x: hidden;

    & .reason-box {
        padding: 20px 50px 20px 50px;
        width: 100%; height: auto;
        font-size: 15px;
        text-align: start;
        box-sizing: border-box;
        overflow: scroll;
    }
    & .reason1, .reason2, .reason3 {
        margin: 0 0 50px 0;
    }
    & .reason-box h1 {
        width: 100%; height: 20px;
        font-size: 20px; font-weight: bold;
        text-align: center;
        margin: 20px 0 20px 0;
    }
    & .reason1 ul {
        list-style: none;
        line-height: 30px;
        padding: 0;
        color: rgb(100, 100, 100);
    }


`
export const BtnBox = styled.div`
    width: 100%; height: 60px;
    position: relative;

    & .close-btn {
        position: absolute; top: 50%; right: 35px;
        transform: translateY(-50%);
        font-size: 26px;
        cursor: pointer;
    }
`
export const CircleBtn = styled.div`
    width: 30px; height: 30px;
    border: 1px solid silver;
    border-radius: 100%;
    position: absolute; top: 50%;
    left: ${(props) => props.left};
    transform: translateY(-50%);
    display: flex; justify-content: center; align-items: center;
    cursor: pointer;

    &:hover {
        border: 1px solid rgb(85, 85, 85)
    }

    & img {
        width: 60%; height: 60%;
    }
`

export const TitleBox = styled.div`
    padding: 20px 50px 20px 50px;
    width: 100%; height: auto;
    font-size: 25px; font-weight: bold;
    text-align: start;
    box-sizing: border-box;

    & .result {
        font-size: 14px;
        margin: 10px 0 10px 0;
    }
    & .result span {
        font-size: 12px;
        color: silver;
        cursor: pointer;
    }
    & .result span:hover {
        text-decoration: underline;
    }
` 

export const Survey = styled.div`
    width: auto; height: auto;
    position: relative;

    & .info {
        width: 100%; height: 60px;
        display: flex; justify-content: center; align-items: center;
    }
    & p {
        font-size: 12px;
        color: #FFA500;
        margin: 0;
    }
    & p .underline {
        text-decoration: underline;
    }
    & p .bold {
        font-weight: bold;
    }
    & .make-nft {
        width: 100%; height: 100px;
        display: flex;
        align-items: center; justify-content: center;
        background-color: #FFA500;
        font-size: 16px; font-weight: bold;
        color: white;
    }
    & .make-nft .wrap {
        margin: 0 10px 0 10px;
    }
    & .make-nft input {
        width: 55px;
        margin: 0 2px 0 10px;
        text-align: end;
        outline: none; border: none;
        //background-color: rgba(0, 0, 0, 0);
        font-size: 16px;
        padding: 5px;
        box-sizing: border-box;
    }

    & .make-nft-btn {
        width: auto;
        display: flex; justify-content: center; align-items: center;
        font-size: 14px;
        padding: 0 0 0 50px;
        box-sizing: border-box;
        cursor: pointer;
    }
    & .make-nft-btn:hover {
        transform: scale(105%);
    }
    & .make-nft-btn img {
        height: 30px;
        filter: invert();
    }
`
export const Disabled = styled.div`
    width: 100%; height: 100%;
    position: absolute; top: 0; left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    justify-content: center; align-items: center;
    color: white;
    font-size: 30px; font-weight: bold;
    display: ${(props) => props.display || 'flex'};
`