import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as mutations from '../redux/actions/actions';

const TaskDetail = ({ id, comments, task, isComplete, groups , setTaskCompletion, setTaskGroup, setTaskName}) => (
  <div>
    <div>
      <input onChange={setTaskName} type="text" value={task.name} />
    </div>
    <div>
      <button onClick={()=> setTaskCompletion(id, !isComplete)}>{isComplete ? `Reopen` : `Complete`}</button>
    </div>
    <div>
      <select onChange={setTaskGroup} value={task.group}>
        {groups.map((group) => (
          <option value={group.id} key={group.id}>
            {group.name}
          </option>
        ))}
      </select>
    </div>
    <div>
      <Link to="/dashboard">
        <button>Done</button>
      </Link>
    </div>
  </div>
);

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.id;
  let task = state.tasks.find((task) => task.id === id);
  let groups = state.groups;

  return {
    id,
    task,
    groups,
    isComplete: task.isComplete,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    let id = ownProps.match.params.id;
    return {
      setTaskCompletion(id, isComplete) {
        console.log("set Task completion...", id);
        dispatch(mutations.setTaskCompletion(id,isComplete));
      },
      setTaskGroup(e) {
        console.log("set Task groups...", id);
        dispatch(mutations.setTaskGroup(id,e.target.value));
      },
      setTaskName(e) {
        console.log("set Task Name...", id);
        dispatch(mutations.setTaskName(id,e.target.value));
      },
    };
  };

export const ConnectedTaskDetail = connect(mapStateToProps, mapDispatchToProps)(TaskDetail);
