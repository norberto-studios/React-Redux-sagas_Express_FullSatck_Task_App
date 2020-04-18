import { take, put, select } from "redux-saga/effects";

import * as types from '../actions/actions'
import { v4 as uuid } from "uuid";

export function* taskCreationSaga() {
  while (true) {
    const { groupID } = yield take(types.REQUEST_TASK_CREATION);
    const ownerID = "U1";
    const taskID = uuid();
    console.log(groupID)
    yield put(types.createTask(taskID,groupID,ownerID))
  }
}
