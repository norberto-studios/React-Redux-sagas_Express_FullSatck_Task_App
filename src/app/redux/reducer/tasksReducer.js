import * as types from "../actions/actions";
import { defaultState as initialState } from "../../../server/defaultState";

const createReducer = (state = initialState.tasks, action) => {
  switch (action.type) {
    // case types.REQUEST_TASK_CREATION:
    //   console.log("LOG REQUEST_TASK_CREATION");

    //   return { ...state, action };
    case types.CREATE_TASK:
      console.log("LOG CREATE TASK");

      return [...state, {
          id: action.taskID,
          name: "new Task ",
          group: action.groupID,
          owner: action.ownerID,
          isComplete:false
      }];

    default:
      return state;
  }
};

export default createReducer;
