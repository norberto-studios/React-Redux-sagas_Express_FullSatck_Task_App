import { createStore, applyMiddleware } from "redux";
// import {defaultState} from "../../../server/defaultState"
import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducer';
// import { rootSaga } from '../sagas';
import {taskCreationSaga} from '../sagas/sagas.mock';

const sagaMiddleware = createSagaMiddleware();


export const store = createStore(
   rootReducer, applyMiddleware(createLogger(), sagaMiddleware)
)
sagaMiddleware.run(taskCreationSaga);
