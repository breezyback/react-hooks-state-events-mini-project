import React, { useState } from "react";

function NewTaskForm({ categories, addTask }) {
  const [details, setDetails] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);

  function onTaskFormSubmit(event) {
    event.preventDefault();

    const newTask = {
      text: details,
      category: selectedCategory,
    }

    addTask(newTask);
  }

  return (
    <form className="new-task-form" onSubmit={onTaskFormSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={(event) => setDetails(event.target.value)}/>
      </label>
      <label>
        Category
        <select name="category" onChange={(event) => setSelectedCategory(event.target.value)}>
          <option></option>
          {
            categories
              .filter(category => category !== "All")
              .map(category => {
                return (
                  <option value={category} key={category}>{category}</option>
                );
              })
          }
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
