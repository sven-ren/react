import { call, put, takeEvery } from 'redux-saga/effects';
import * as Actions from './actions';
import API from '@/api/common/index';

function* getpoetrys(action: any) {
  try {
    const poetrys = yield call(() => API.getPoetrys({keyword: action.payload.keyword}));
    yield put({
      type: Actions.GET_POETRYS_SUCCESS,
      payload: poetrys || [],
    });
    yield action.callback && action.callback(poetrys.data);
  } catch (error) {
    yield put({ type: Actions.GET_POETRYS_FAILED, error });
  }
}

export const poetrySaga = [
  takeEvery(Actions.GET_POETRYS_START, getpoetrys),
];
