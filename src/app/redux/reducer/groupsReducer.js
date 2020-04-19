import * as types from "../actions/actions";

const groupsReducer = (groups = [], action) => {
  switch (action.type) {
    case types.SET_STATE:
      return  action.state.group;

    default:
      return groups;
  }
};

export default groupsReducer;
