import * as ACTION from "./constant";

var initialState = {};

var filterTable = (state = initialState, action) => {
  switch (action.type) {
    case ACTION.FILTER_TABLE:
      return null;
    default:
      return state;
  }
};

export default filterTable;
