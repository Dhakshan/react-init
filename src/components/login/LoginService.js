import site from '../../config/configApp';
import * as helpers from '../helpers/helpers';

export const loginService = {
    login
};
function login(payload,endpoint) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',"Origin": "localhost:*" },
        body: JSON.stringify(payload)
    };
    return fetch(`${site.apiUrl}${endpoint}`, requestOptions)
        .then(helpers.handleResponse)
        .then(user => {
            localStorage.setItem('user', JSON.stringify(user));
            return user;
        });
}

export default loginService;


