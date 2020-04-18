import * as types from '../actions/actionTypes';

const initialState = {
     
};

const createReducer = (state = initialState, action) => {
     switch (action.type) {
          case types.REQUEST_TASK_CREATION:
               console.log("LOG REQUEST_TASK_CREATION");

               return { ...state, action};

          case types.CREATE_TASK:
            console.log("LOG CREATE TASK");

               return { ...state, action };
          
          default:
               return state;
     }
};

export default createReducer;