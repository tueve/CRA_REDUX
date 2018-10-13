import * as ACTION_TYPES from "../constants";
import mock from "./mock.json";

const initState = mock;

export const saleReducer = (state = initState, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD:
      return "";
    case ACTION_TYPES.DELETE:
      return "";
    default:
      return state;
  }
};
