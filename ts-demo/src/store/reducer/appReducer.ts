import { combineReducers } from 'redux';
import province from '@/routes/layout/reducer';
import poetry from '@/routes/poetry/reducer';

const appReducer = combineReducers({
  province,
  poetry,
});

export default appReducer;
