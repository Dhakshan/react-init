import {loginActonType} from './LoginActionType';
import loginService from './LoginService';

export function login(payload) {
    return dispatch => {
        dispatch(request(payload));
        let call = loginService.login(payload,"/posts")
            call.then(
                user => { 
                    dispatch(success(user));
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
            return call;
    };

    function request(user) { return { type: loginActonType.request, user } }
    function success(user) { return { type: loginActonType.success, user } }
    function failure(error) { return { type: loginActonType, error } }
}

export function logout() {
    return { type: loginActonType.logout };
}