import { takeEvery, put } from "redux-saga/effects";

import {
  ActionTypes,
  calculatorAddDigitAction,
  calculatorSetOperationAction,
  calculatorPerformOperationAction,
  calculatorResetAction
} from "./actions";

import { Operations } from "./types";

export default function* watchCalucalatorSagas() {
  yield takeEvery(ActionTypes.PRESS_BUTTON, pressButtonSaga);
}

export function* pressButtonSaga({ payload: symbol }) {
  if (!isNaN(parseInt(symbol))) {
    // Цифра - передаем в конец
    yield put(calculatorAddDigitAction(symbol));
  } else {
    switch (symbol) {
      case "C": // Если С - сбросить все
        yield put(calculatorResetAction());
        break;
      case "+": // Пользователь нажал Сложить
      case "-": // Пользователь нажал Вычесть
      case "/": // Пользователь нажал Поделить
      case "*": // Пользователь нажал Умножить
        yield put(calculatorSetOperationAction(symbol));
        break;
      case "=":
        yield put(calculatorPerformOperationAction());
        break;
      default:
        break;
    }
  }
}
