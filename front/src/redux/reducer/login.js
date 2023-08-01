let init = {
    user_id : "",
    msgID : "",
    msgPW : "",
    isLogin : false
}

function reducer(state = init, action) {
    const {type, payload} = action;

    switch (type) {
        case "EMPTYID":
            return {...state, msgID : "아이디를 입력해주세요.", msgPW : ""};

        case "EMPTYPW":
            return {...state, msgID : "", msgPW : "비밀번호를 입력해주세요."};
    
        case "WRONGID":
            return {...state, msgID : "존재하지 않는 아이디입니다.", msgPW : ""}

        case "WRONGPW":
            return {...state, msgID : "", msgPW : "비밀번호가 틀렸습니다. 재입력 해주세요."}

        case "LOGIN":
            return {...state, user_id : payload.user_id, isLogin : true};

        default:
            return state;
    }
}

export default reducer