import * as types from "../actions/actions";
import { defaultState as initialState } from "../../../server/defaultState";

const createReducer = (state = initialState.tasks, action) => {
  switch (action.type) {
    // case types.REQUEST_TASK_CREATION:
    //   console.log("LOG REQUEST_TASK_CREATION");

    //   return { ...state, action };
    case types.CREATE_TASK:
      console.log("LOG CREATE TASK");

      return [
        ...state,
        {
          id: action.taskID,
          name: "new Task ",
          group: action.groupID,
          owner: action.ownerID,
          isComplete: false,
        },
      ];
    case types.SET_TASK_COMPLETE:
      console.log("LOG SET TASK C");
      return state.map((task) => {
        return task.id === action.taskID
          ? { ...task, isComplete: action.isComplete }
          : task;
      });
    case types.SET_TASK_NAME:
      console.log("LOG SET TASK N");
      return state.map((task) => {
        return task.id === action.taskID
          ? { ...task, name: action.name }
          : task;
      });
    case types.SET_TASK_GROUP:
      console.log("LOG SET TASK C");
      return state.map((task) => {
        return task.id === action.taskID
          ? { ...task, group: action.groupID }
          : task;
      });

    default:
      return state;
  }
};

export default createReducer;
