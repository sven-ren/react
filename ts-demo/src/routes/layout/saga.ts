import { call, put, fork, takeLatest, takeEvery } from "redux-saga/effects";
import * as Actions from "./actions";
import ACCOUNT_API from "@/api/common/index";

function* getTenants(action: any) {
  try {
    const tenants = yield call(()=>{ return ACCOUNT_API.getTenants(action.payload.user_name)});
    yield put({
      type: Actions.GET_TENANT_SUCCESS,
      payload: tenants || []
    });
    yield action.callback && action.callback(tenants.data)
  } catch (error) {
    yield put({ type: Actions.GET_TENANT_FAILED, error });
  }
}

export const tenantSaga = [
  takeEvery(Actions.GET_TENANT_START, getTenants)
];
