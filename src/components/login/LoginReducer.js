import initialState from '../../reducers/initialState';
import { loginActonType } from './LoginActionType';


export default function LoginReducer(state = initialState.loginCred, action) {
  switch (action.type) {
    case loginActonType.request:
      return {
        loggingIn: true,
        user: action.user
      };
    case loginActonType.success:
      return {
        loggedIn: true,
        user: action.user
      };
    case loginActonType.fail:
      return {};
    case loginActonType.logout:
      return {};
    default:
      return state
  }
}