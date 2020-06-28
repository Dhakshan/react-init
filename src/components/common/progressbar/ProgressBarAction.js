import { progressbarActionType } from './ProgressBarActionType';

export function enable(payload) {
    return dispatch => {
        dispatch(update(payload));
    };

    function update(payload) { return { type: progressbarActionType.update, payload } }
}

