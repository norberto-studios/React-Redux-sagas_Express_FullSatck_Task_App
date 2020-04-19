import { combineReducers } from 'redux';
import taskReducer from './tasksReducer';
import commentsReducer from './commentsReducer';
import groupsReducer from './groupsReducer';
import usersReducer from './usersReducer';
import authenticatedReducer from './authenticatedReducer';


const rootReducer  = combineReducers({
    tasks: taskReducer,
    comments: commentsReducer,
    groups: groupsReducer,
    users: usersReducer,
    session: authenticatedReducer,
})

export default rootReducer;