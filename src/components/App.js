import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasksList, setTasksList] = useState(TASKS);

  function filterTasks(category) {
    setTasksList(TASKS);
    setTasksList(tasks => {
      return (tasks.filter(task => {
        if (category === "All")
          return true;
        return task.category === category;
      }));
    });
  }

  function handleTasks(taskText) {
    setTasksList(current => current.filter(c => c.text !== taskText));
  }

  function addTask(newTask) {
    setTasksList([...tasksList, newTask]);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} filterTasks={filterTasks} />
      <NewTaskForm categories={CATEGORIES} addTask={addTask}/>
      <TaskList tasks={tasksList} handleTasks={handleTasks}/>
    </div>
  );
}

export default App;
