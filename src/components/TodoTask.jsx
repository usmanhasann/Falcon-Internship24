import React, { useState } from "react";
import "../index.css";

export const TodoTask = () => {
  const [input, setInput] = useState("");
  const [tasks, setTask] = useState([]);
  const changeInput = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setTask([...tasks, input]);
    setInput("");
  };
  const handleReset = (e) => {
    e.preventDefault();
    setTask([]);
  };
  const handleDelete = (itemIndex) => {
    const deleteTask = tasks.filter((_, index) => index !== itemIndex);
    setTask(deleteTask);
  };
  return (
    <>
      <div>
        <form>
          <div className="submit">
            <div className="clsinput">
              <input
                className="inputt"
                type="text"
                placeholder="add task"
                onChange={changeInput}
                value={input}
              />
            </div>
            <button className="add" onClick={handleSubmit}>
              Add
            </button>
            <button className="reset" onClick={handleReset} value={tasks}>
              Reset
            </button>
          </div>
        </form>
        <ul className="taskitem">
          {tasks.map((task, index) => (
            <li className="list" key={index}>
              {task}
              <button className="dellitm" onClick={() => handleDelete(index)}>
                Dell
              </button>
              <button className="edit">Edit</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

//TODO:DAY01-->task added,
//TODO:DAY02-->ADD a delete,edit,clear functionality
