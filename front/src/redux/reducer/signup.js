let init = {
    user_id : "",
    msgID : "",
    msgPW : "",
    isSignup : false
}

function reducer(state = init, action) {
    const {type, payload} = action;

    switch (type) {
        case "EMPTYID":
            return {...state, msgID : "아이디를 입력해주세요.", msgPW : ""};

        case "EMPTYPW":
            return {...state, msgID : "", msgPW : "비밀번호를 입력해주세요."};
    
        case "DUPLICATED":
            return {...state, msgID : "중복 아이디입니다.", msgPW : ""}

        case "UNDUPLICATED":
            return {...state, msgID : "사용 가능한 아이디입니다.", msgPW : ""}

        case "FAIL":
            return {...state, msgID : "중복 확인 실패. 다시 확인 부탁드립니다.", msgPW : ""}

        case "MSG_INIT":
            return {...state, msgID : "", msgPW : ""}

        default:
            return state;
    }
}

export default reducer