import { ActionTypes } from "./actions";

const initialState = {
  enabled: false
};
export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.TOGGLE:
      return Object.assign({}, state, { enabled: !state.enabled });
    default:
      return state;
  }
};
