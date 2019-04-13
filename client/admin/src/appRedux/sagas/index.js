import { all } from 'redux-saga/effects';
import authSagas from './Auth';
import notificationsSage from './Notifications';

export default function* rootSaga(getState) {
  yield all([
    authSagas(),
    notificationsSage(),
  ]);
}
