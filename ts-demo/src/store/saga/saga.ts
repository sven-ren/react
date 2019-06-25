import { all } from 'redux-saga/effects';
import { provinceSaga } from '@/routes/layout/saga';
import { poetrySaga } from '@/routes/poetry/saga';

export default function* rootSaga() {
  yield all([
    ...provinceSaga,
    ...poetrySaga,
  ]);
}
