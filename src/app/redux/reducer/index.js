import { combineReducers } from 'redux';
import taskReducer from './tasksReducer';
import commentsReducer from './commentsReducer';
import groupsReducer from './groupsReducer';
import usersReducer from './usersReducer';


const rootReducer  = combineReducers({
    tasks: taskReducer,
    comments: commentsReducer,
    groups: groupsReducer,
    users: usersReducer,
})

export default rootReducer;