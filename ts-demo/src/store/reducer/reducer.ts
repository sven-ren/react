import { combineReducers } from 'redux';
// import { routerReducer } from 'react-router-redux';
import appReducer from './appReducer';

const rootReducer = combineReducers({
  app: appReducer,
});

export default rootReducer;
