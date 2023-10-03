import React, { useState } from "react";
import Task from "./Task";

function TaskList({ tasks, handleTasks }) {
  return (
    <div className="tasks">
      {
        tasks.map((task, id) => <Task task={task} key={id} handleTasks={handleTasks}/>)
      }
    </div>
  );
}

export default TaskList;
