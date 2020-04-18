import * as types from "../actions/actions";
import { defaultState as initialState } from "../../../server/defaultState";

const commentsReducer = (state = initialState.comments, action) => {
  switch (action.type) {
   
    default:
      return state;
  }
};

export default commentsReducer;
