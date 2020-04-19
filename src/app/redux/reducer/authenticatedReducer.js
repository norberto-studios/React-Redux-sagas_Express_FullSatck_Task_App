import * as types from "../actions/actions";
import { defaultState as initialState } from "../../../server/defaultState";

const authenticatedReducer = (userSession = initialState.session || {}, action) => {
  let {type,authenticated} = action;
  switch (type) {
   case types.SET_STATE:
     return {...userSession, id: action.state.session.id}
   case types.REQUEST_AUTH_USER:
     return {...userSession, authenticated: types.AUTHENTICATING}
   case types.PROCESSING_AUTH_USER:
     return {...userSession, authenticated}
    default:
      return userSession;
  }
};

export default authenticatedReducer;
