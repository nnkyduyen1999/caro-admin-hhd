import {apiLogin} from "../service/authentication-service";

export const LOGIN_SUCCEEDED = "LOGIN_SUCCEEDED";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGIN_REQUEST = "LOGIN_REQUEST";

const loginSucceeded = (data) => ({type: "LOGIN_SUCCEEDED", data})
const loginFailed = (data) => ({type: LOGIN_FAILED, data})
const logoutRequest = () => ({type: LOGOUT_REQUEST})

export const login = (dispatch) => (email, password) => {
    dispatch({type: LOGIN_REQUEST})
    apiLogin(email, password)
        .then(response => {
            console.log(response.data)
            dispatch(loginSucceeded(response.data))
        }).catch(err => {
        dispatch(loginFailed(err.response.data))
    })
}

export const logout = (dispatch) => () => {
    dispatch(logoutRequest())
}

//
// export const loginGoogle = (dispatch) => () => {
//     dispatch({type: LOGIN_REQUEST})
//     apiLoginGoogle().then(response => {
//         dispatch(loginSucceeded(response.data))
//     }).catch(err => {
//         dispatch(loginFailed(err.response.data))
//     })
// }
