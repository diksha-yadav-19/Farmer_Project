import React, { useState, useEffect } from "react";
import "./TodoList.css";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!newTask) return;

    const newTasks = [...tasks, { text: newTask, completed: false, dueDate }];
    setTasks(newTasks);
    setNewTask("");
    setDueDate("");
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const toggleCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const editTask = (index, newText) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].text = newText;
    setTasks(updatedTasks);
  };

  const clearCompletedTasks = () => {
    const updatedTasks = tasks.filter((task) => !task.completed);
    setTasks(updatedTasks);
  };

  const renderTask = (task, completed) => {
    return completed ? <strike>{task}</strike> : task;
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "completed") return task.completed;
    if (filter === "incomplete") return !task.completed;
  });

  return (
    <div className="todo-list-container">
      <h1 style={{ fontFamily: "cursive" }}>Todo List App🧾</h1>
      <div className="input-container">
        <input
          type="text"
          value={newTask}
          onChange={(event) => setNewTask(event.target.value)}
          placeholder="Add a new task"
        />
        <input
          type="date"
          value={dueDate}
          onChange={(event) => setDueDate(event.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <div className="filter-container">
        <button className="filter-button" onClick={() => setFilter("all")}>
          All
        </button>
        <button
          className="filter-button"
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
        <button
          className="filter-button"
          onClick={() => setFilter("incomplete")}
        >
          Incomplete
        </button>
        <button className="clear-button" onClick={clearCompletedTasks}>
          Clear Completed
        </button>
      </div>
      <ul className="task-list">
        {filteredTasks.map((task, index) => (
          <li key={index}>
            <div>
              {renderTask(task.text, task.completed)}
              {task.dueDate && <span> (Due: {task.dueDate})</span>}
            </div>
            <div className="button-container">
              <button onClick={() => deleteTask(index)}>Delete</button>
              <button onClick={() => toggleCompletion(index)}>
                {task.completed ? "Mark as Incomplete" : "Mark as Completed"}
              </button>
              <button
                onClick={() => {
                  const newText = prompt("Edit task:", task.text);
                  if (newText) editTask(index, newText);
                }}
              >
                Edit
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
