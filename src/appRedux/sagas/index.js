import { all } from "redux-saga/effects";
import authSagas from "./Auth";
import webpageSagas from "./webpage"
export default function* rootSaga() {
  yield all([
    authSagas(),
    webpageSagas(),

  ]);
}
