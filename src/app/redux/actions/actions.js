export * as types from './actionTypes'

export const requestTaskCreation = (groupID)=>({
    type: types.REQUEST_TASK_CREATION, groupID
});

export const createTask = (taskID, groupID, ownerID)=>({
    type: types.CREATE_TASK,
    taskID, 
    groupID,
    ownerID
});

