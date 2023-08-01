import axios from 'axios'

function dupChk(user_id) {
    return async (dispatch) => {
        if(user_id == "") {
            dispatch({type : "EMPTYID"});
        }else {
            const {data} = await axios.post(`http://localhost:8080/auth/dupChk`, {name : user_id},
                {
                    withCredentials : true
                }
            );
            console.log(data);

            if(data.message == "중복") {
                dispatch({type : "DUPLICATED"})
            }else if(data.message == "중복 아님") {
                dispatch({type : "UNDUPLICATED"})
            }else {
                dispatch({type : "FAIL"})
            }
        }
    }
}

function signupChk(user_id, user_pw) {
    console.log("loginChk : ", user_id, user_pw);

    return async (dispatch) => {
        if(user_id == "") {
            dispatch({type : "EMPTYID"});
        }else if (user_pw == "") {
            dispatch({type : "EMPTYPW"});
        }else {
            const {data} = await axios.post(`http://localhost:8080/auth/signup`, {name : user_id, password : user_pw},
                {
                    withCredentials : true
                }
            );
            console.log(data);

            if(data.message == "성공") {
                window.location.href = '/login'
            }
        }
    }
}

function msgInit() {
    return async (dispatch) => {
        dispatch({type : "MSG_INIT"});
    }
}

export const signupAction = {dupChk, signupChk, msgInit}