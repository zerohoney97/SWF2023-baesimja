import axios from 'axios'

// 검색한 단어가 들어있는 판례 가져오기
function searchChk(search) {
    return async (dispatch) => {
        try {
            const {data} = await axios.get(`http://localhost:8080/case/search/${search}`, {
                withCredentials : true
            });
            console.log(data);

            dispatch({type : "SEARCH", payload : data});

        } catch (error) {
            console.log(error);
        }
    }
}

// 타이틀 눌렀을 때 해당하는 판례 가져오기
function selectCase(id) {
    return async (dispatch) => {
        try {
            const {data} = await axios.get(`http://localhost:8080/case/detail/${id}`, {
                withCredentials : true
            });
            console.log(data);

            dispatch({type : "SELECT_CASE", payload : data});

        } catch (error) {
            console.log(error);
        }
    }
}

// 초기화
function searchInit() {
    return async (dispatch) => {
        try {
            dispatch({type : "SEARCH_INIT"})
        } catch (error) {
            console.log(error);
        }
    }
}

// 마이페이지 판례 목록 가져오기
function getMyCases() {
    return async (dispatch) => {
        try {
            const {data} = await axios.get('http://localhost:8080/mypage', {
                withCredentials : true
            })

            dispatch({type : "MY_CASE", payload : data})
        } catch (error) {
            console.log(error);
        }
    }
}

// 설문 결과 저장
function saveResult() {
    return async (dispatch) => {
        try {
            
        } catch (error) {
            console.log(error);
        }
    }
}


export const searchAction = {searchChk, selectCase, searchInit, getMyCases, saveResult}