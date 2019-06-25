import { call, put, fork, takeLatest, takeEvery } from 'redux-saga/effects';
import * as Actions from './actions';
import API from '@/api/common/index';

function* getProvinces(action: any) {
  try {
    const provinces = yield call(() => API.getProvinces());
    yield put({
      type: Actions.GET_PROVINCES_SUCCESS,
      payload: provinces || [],
    });
    yield action.callback && action.callback(provinces.data);
  } catch (error) {
    yield put({ type: Actions.GET_PROVINCES_FAILED, error });
  }
}

export const provinceSaga = [
  takeEvery(Actions.GET_PROVINCES_START, getProvinces),
];
