import {LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCEEDED, LOGOUT_REQUEST} from "../action/authentication-action";

export function reducer(prevState, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {...prevState, errMessage: null}
        case LOGIN_SUCCEEDED:
            return {...prevState,
                isAuthenticated: true,
                userInfo: action.data.userInfo,
                token: action.data.token,
                errMessage: null}
        case LOGIN_FAILED:
            return {...prevState, isAuthenticated: false, errMessage: action.data.message}
        case LOGOUT_REQUEST:
            return {...prevState, isAuthenticated: false}
        default:
            throw new Error()
    }
}
