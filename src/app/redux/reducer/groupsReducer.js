import * as types from "../actions/actions";
import { defaultState as initialState } from "../../../server/defaultState";

const groupsReducer = (state = initialState.groups, action) => {
  switch (action.type) {
    
    default:
      return state;
  }
};

export default groupsReducer;
