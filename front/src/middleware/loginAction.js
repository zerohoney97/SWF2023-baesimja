import axios from 'axios'

function loginChk(user_id, user_pw) {
    console.log("loginChk : ", user_id, user_pw);

    return async (dispatch) => {
        if(user_id == "") {
            dispatch({type : "EMPTYID"});
        }else if (user_pw == "") {
            dispatch({type : "EMPTYPW"});
        }else {
            const {data} = await axios.post(`http://localhost:8080/auth/login`, {name : user_id, password : user_pw},
                {
                    withCredentials : true
                }
            );
            console.log(data);

            if(data.message == "아이디 없음") {
                dispatch({type : "WRONGID"})
            }else if(data.message == "비밀번호 틀림") {
                dispatch({type : "WRONGPW"})
            }else if(data.message == "성공") {
                dispatch({type : "LOGIN", payload : {user_id : user_id, user_pw : user_pw}})
            }
        }
    }
}

export const loginAction = {loginChk}