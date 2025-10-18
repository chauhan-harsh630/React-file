import React from "react";
import { useState } from "react";
import "./TaskList.css";

function TaskList() {
  const [Task, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");

  function AddTask(e) {
    if (newTask.trim() !== "") {
      setTask([...Task, newTask]);
      setNewTask("");
    }
  }
  function InputTask(e) {
    setNewTask(e.target.value);
  }

  function deletBtn(index) {
    setTask(Task.filter((_, i) => i !== index));
  }
  function moveUp(index) {
    if (index > 0) {
      const updatedTasks = [...Task];
      [updatedTasks[index - 1], updatedTasks[index]] = [
        updatedTasks[index],
        updatedTasks[index - 1],
      ];
      setTask(updatedTasks);
    }
  }

  function moveDown(index) {
    if (index < Task.length - 1) {
      const updatedTasks = [...Task];
      [updatedTasks[index + 1], updatedTasks[index]] = [
        updatedTasks[index],
        updatedTasks[index + 1],
      ];
      setTask(updatedTasks);
    }
  }
  return (
    <>
      <div className="container-box">
        <h1>To-Do-List</h1>

        <div className="input-box">
          <input
            text="text"
            value={newTask}
            placeholder="Enter Task... "
            onChange={InputTask}
          />
          <button onClick={AddTask}>Add Task </button>
        </div>

        <div className="list">
          <ol>
            {Task.map((task, index) => (
              <li key={index}>
                <span className="task-text">{task} </span>
                <div className="button-group">
                  <button onClick={() => moveUp(index)}>⬆️</button>
                  <button onClick={() => moveDown(index)}>⬇️</button>
                  <button onClick={() => deletBtn(index)}>🗑️</button>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}

export default TaskList;
