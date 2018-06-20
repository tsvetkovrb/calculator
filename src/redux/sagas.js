import { all } from "redux-saga/effects";

import watchCalculatorSagas from "./ducks/calculator/sagas";

export default function*() {
  yield all([
    watchCalculatorSagas()
    // ...
  ]);
}
