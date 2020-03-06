import initialState from '../../../reducers/initialState';
import { navbarActionType } from './NavbarActionType';


export default function NavbarR(state = initialState.navbar, action) {
  switch (action.type) {
    case navbarActionType.update:
      return action.payload;
    default:
      return state
  }
}