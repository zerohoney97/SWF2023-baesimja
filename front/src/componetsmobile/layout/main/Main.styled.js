import styled from "styled-components";

// & : 스타일이 적용되고 있는 대상

export const MainSearchBox = styled.div`
  margin: 0 auto;
  position: relative;
  width: calc(100% - 100px);
  height: 420px;
  background: linear-gradient(to right, #111111, #6699cc);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & .big-text {
    color: white;
    font-size: 32px;
    font-weight: bold;
    margin: 0;
  }

  & .small-text {
    color: white;
    font-size: 16px;
    margin: 15px 0 35px 0;
  }
  & .small-text span {
    font-weight: bold;
  }

  & .suggest-wrap {
    width: 100%;
    height: 35px;
    margin: 0 auto;
    /* margin: 15px 0 0 0; */
    display: flex;
    align-items: center;
  }
`;

export const Suggest = styled.div`
  width: 100px;
  height: 100%;
  border: 2px solid white;
  border-radius: 20px;
  color: white;
  font-weight: 500;
  margin: 0 5px 0 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: black;
  }
`;

export const MainExamBox = styled.div`
  margin: 20px auto 20px;
  position: relative;
  width: calc(100% - 100px);
  height: auto;
  /* display: flex; flex-direction: row; */
  justify-content: center;
  align-items: center;
`;

export const MainExam = styled.div`
  width: ${(props) => props.width || "30%"};
  height: 420px;
  margin: 10px;
  border-radius: 15px;
  background-color: white;
  box-shadow: 1px 1px 3px 3px #6699cc;
`;
