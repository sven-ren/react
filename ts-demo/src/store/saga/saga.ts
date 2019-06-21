import { fork, all } from 'redux-saga/effects';
// import { MceClustersSaga } from "@/components/CommonTop/saga";
// import { MceNamespaceSaga } from "@/components/CommonTop/saga";
import { provinceSaga } from '@/routes/layout/saga';


export default function* rootSaga() {
  yield all([
    // ...MceClustersSaga,
    // ...MceNamespaceSaga,
    ...provinceSaga,
  ]);
}
