import * as types from "../actions/actions";

const createReducer = (tasks = [], action) => {
  switch (action.type) {
    case types.SET_STATE:
      return  action.state.task;

    case types.CREATE_TASK:
      console.log("LOG CREATE TASK");

      return [
        ...tasks,
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
      return tasks.map((task) => {
        return task.id === action.taskID
          ? { ...task, isComplete: action.isComplete }
          : task;
      });
    case types.SET_TASK_NAME:
      console.log("LOG SET TASK N");
      return tasks.map((task) => {
        return task.id === action.taskID
          ? { ...task, name: action.name }
          : task;
      });
    case types.SET_TASK_GROUP:
      console.log("LOG SET TASK C");
      return tasks.map((task) => {
        return task.id === action.taskID
          ? { ...task, group: action.groupID }
          : task;
      });

    default:
      return tasks;
  }
};

export default createReducer;
