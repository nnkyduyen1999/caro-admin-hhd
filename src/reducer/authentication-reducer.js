import {LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCEEDED, LOGOUT_REQUEST} from "../action/authentication-action";

export function reducer(prevState, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {...prevState, errMessage: null}
        case LOGIN_SUCCEEDED:
            const newState = {
                ...prevState,
                isAuthenticated: true,
                userInfo: action.data.user,
                token: action.data.token,
                errMessage: null
            }
            localStorage.setItem('userInfo', JSON.stringify(newState.userInfo));
            localStorage.setItem('token', newState.token);
            return newState;
        case LOGIN_FAILED:
            return {...prevState, isAuthenticated: false, errMessage: action.data.message}
        case LOGOUT_REQUEST:
            localStorage.removeItem('userInfo');
            localStorage.removeItem('token');
            return {...prevState, isAuthenticated: false}
        default:
            throw new Error()
    }
}
