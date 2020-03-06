import { navbarActionType } from './NavbarActionType';

export function update(payload) {
    return dispatch => {
        dispatch(update(payload));
    };

    function update(payload) { return { type: navbarActionType.update, payload } }
}

