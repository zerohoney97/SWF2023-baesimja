let init = {
    searchArr : [],
    succeed : false,

    selected : {},
    isLogin : false,
    isInterested : false,

    myCaseArr : []
}

function reducer(state = init, action) {
    const {type, payload} = action;

    switch (type) {
        case "SEARCH":
            return {...state, searchArr : payload, succeed : true};

        case "SEARCH_INIT":
            return {...state, succeed : false}

        case "SELECT_CASE":
            return {...state, selected : payload.case, isLogin : payload.isLogin, isInterested : payload.isInterested}

        case "MY_CASE":
            return {...state, myCaseArr : payload}

        default:
            return state;
    }
}

export default reducer