import { combineReducers } from 'redux';
import province from '@/routes/home/reducer';
import poetry from '@/routes/poetry/reducer';

const appReducer = combineReducers({
  province,
  poetry,
});

export default appReducer;
