import styled from 'styled-components'

export const SearchInputBox = styled.div`
    & .search-input-wrap {
        width: ${(props) => props.width || '400px'};
        height: 50px;
        border: 1px solid silver;
        border-radius: 25px;
        color: white;
        background-color: white;
        display: flex; align-items: center;
        padding: 0 30px 0 30px;
        box-sizing: border-box;
    }
    & .search-input-wrap .search-img {
        width: 30px; height: 30px;
        display: flex; justify-content: center; align-items: center;
    }
    & .search-input-wrap .search-img img {
        width: 80%; height: 80%;
    }
    & .search-input-wrap .search-input {
        width: 100%; height: 30px;
        padding: 10px;
        box-sizing: border-box;
        font-size: 18px;
        border: none; outline: none;
    }
`


