import { createStore, applyMiddleware } from "redux";
// import {defaultState} from "../../../server/defaultState"
import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducer';
// import { rootSaga } from '../sagas';
import * as sagas from '../sagas/sagas';

const sagaMiddleware = createSagaMiddleware();


export const store = createStore(
   rootReducer, applyMiddleware(createLogger(), sagaMiddleware)
)
for(let saga in sagas){
   sagaMiddleware.run(sagas[saga]);
}
