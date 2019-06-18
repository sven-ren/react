import { fork, all } from "redux-saga/effects";
// import { MceClustersSaga } from "@/components/CommonTop/saga";
// import { MceNamespaceSaga } from "@/components/CommonTop/saga";
// import { tenantSaga } from "@/layouts/MceLayout/saga";


export default function* rootSaga() {
  yield all([
    // ...MceClustersSaga,
    // ...MceNamespaceSaga,
    // ...tenantSaga
  ]);
}
