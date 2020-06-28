import initialState from '../../../reducers/initialState';
import { progressbarActionType } from './ProgressBarActionType';


export default function ProgressBarR(state = initialState.progressbar, action) {
  switch (action.type) {
    case progressbarActionType.update:
      return action.payload;
    default:
      return state
  }
}