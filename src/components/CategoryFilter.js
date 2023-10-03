import React from "react";

function CategoryFilter({ categories, filterTasks }) {

  function handleFilter(event) {
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
      if (button.classList.contains("selected"))
        button.classList.remove("selected");
    });

    event.target.classList.add("selected");

    filterTasks(event.target.innerText);
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {
        categories.map(category => {
          return (
            <button key={category} onClick={handleFilter}>
              {category}
            </button>
          );
        })
      }
    </div>
  );
}

export default CategoryFilter;
