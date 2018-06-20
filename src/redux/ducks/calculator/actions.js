/**
 * Action Types
 */

export const ActionTypes = {
  PRESS_BUTTON: "CALCULATOR.PRESS_BUTTON",

  RESET: "CALCULATOR.RESET",
  ADD_DIGIT: "CALCULATOR.ADD_DIGIT",

  SET_OPERATION: "CALCULATOR.SET_OPERATION",
  PERFORM_OPERATION: "CALCULATOR.PERFORM_OPERATION"
};

/**
 * Action Creators
 */

export const calculatorPressButtonAction = button => ({
  type: ActionTypes.PRESS_BUTTON,
  payload: button
});

export const calculatorAddDigitAction = digit => ({
  type: ActionTypes.ADD_DIGIT,
  payload: digit
});

export const calculatorSetOperationAction = operation => ({
  type: ActionTypes.SET_OPERATION,
  payload: operation
});

export const calculatorPerformOperationAction = () => ({
  type: ActionTypes.PERFORM_OPERATION
});

export const calculatorResetAction = () => ({
  type: ActionTypes.RESET
});
