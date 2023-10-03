import React from "react";

function Task({ task, handleTasks }) {
  console.log(task)
  return (
    <div className="task">
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      <button className="delete" onClick={() => handleTasks(task.text)}>X</button>
    </div>
  );
}

export default Task;
