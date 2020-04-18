import * as types from "../actions/actions";
import { defaultState as initialState } from "../../../server/defaultState";

const usersReducer = (state = initialState.users, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default usersReducer;
