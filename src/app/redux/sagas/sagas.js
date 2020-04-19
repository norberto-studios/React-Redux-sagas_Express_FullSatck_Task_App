import { take, put, select } from "redux-saga/effects";
import axios from "axios";
import * as types from "../actions/actions";
import { v4 as uuid } from "uuid";
import {history} from "../store/history";

const url = "http://localhost:5000";

export function* taskCreationSaga() {
  while (true) {
    const { groupID } = yield take(types.REQUEST_TASK_CREATION);
    const ownerID = "U1";
    const taskID = uuid();
    yield put(types.createTask(taskID, groupID, ownerID));
    const { res } = yield axios.post(url + `/task/new`, {
      task: {
        id: taskID,
        group: groupID,
        owner: ownerID,
        isComplete: false,
        name: "New Task",
      },
    });
    //   console.log("GOT RESPONSE",res)
  }
}

export function* taskModificationSaga() {
  while (true) {
    const task = yield take([
      types.SET_TASK_GROUP,
      types.SET_TASK_NAME,
      types.SET_TASK_COMPLETE,
    ]);

    axios.post(url + `/task/update`, {
      task: {
        id: task.taskID,
        group: task.groupID,
        name: task.name,
        isComplete: task.isComplete,
      },
    });
    //   console.log("GOT RESPONSE",res)
  }
}
export function* userAuthenticationSaga() {
  while (true) {
    const { username, password } = yield take(types.REQUEST_AUTH_USER);
    console.log("SAGA", username, password);
    try {
      const { data } = yield axios.post(url + `/authenticate`, {
        username,
        password,
      });
      if (!data) {
        throw new Error();
      }
      console.log("Authenticated", data);
      yield put(types.setState(data.state));
      yield put(types.processAuthUser(types.AUTHENTICATED));
      history.push("/dashboard");
      
    } catch (e) {
      console.log("Can't Authenticate");
      yield put(types.processAuthUser(types.NOT_AUTHENTICATED));
    }
  }
}
