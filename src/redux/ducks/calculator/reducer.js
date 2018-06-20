import { ActionTypes } from "./actions";
import { Operations } from "./types";

const initialState = {
  value1: "",
  value2: "",
  operation: Operations.NONE
};

export default (state = initialState, action) => {
  switch (action.type) {
    /**
     * Add Digit
     */

    case ActionTypes.ADD_DIGIT:
      return state.operation
        ? Object.assign({}, state, {
            value2: `${state.value2}${action.payload}`
          })
        : Object.assign({}, state, {
            value1: `${state.value1}${action.payload}`
          });

    /**
     * Set Operatoion
     */

    case ActionTypes.SET_OPERATION:
      return Object.assign({}, state, { operation: action.payload });

    /**
     * Perform Operation
     */

    case ActionTypes.PERFORM_OPERATION: {
      switch (state.operation) {
        case Operations.SUM:
          return Object.assign({}, initialState, {
            value1: parseInt(state.value1, 10) + parseInt(state.value2, 10)
          });
        case Operations.SUBTRACTION:
          return Object.assign({}, initialState, {
            value1: parseInt(state.value1, 10) - parseInt(state.value2, 10)
          });
        case Operations.MULTIPLICATION:
          return Object.assign({}, initialState, {
            value1: parseInt(state.value1, 10) * parseInt(state.value2, 10)
          });
        case Operations.DIVISION:
          return Object.assign({}, initialState, {
            value1: parseInt(state.value1, 10) / parseInt(state.value2, 10)
          });
        default:
          return state;
      }
    }

    /**
     * Reset
     */

    case ActionTypes.RESET:
      return initialState;
    default:
      return state;
  }
};
