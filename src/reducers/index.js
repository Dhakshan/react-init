import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import { connectRouter } from 'connected-react-router';
import LoginReducer from '../components/login/LoginReducer';
import ProgressBarR from '../components/common/progressbar/ProgressBarReducer';

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  fuelSavings,
  LoginReducer,
  ProgressBarR
});


export default rootReducer;
