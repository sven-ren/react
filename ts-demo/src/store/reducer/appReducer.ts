import { combineReducers } from 'redux';
import province from '@/routes/layout/reducer';

const appReducer = combineReducers({
  province,
});

export default appReducer;
