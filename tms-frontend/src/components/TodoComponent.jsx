/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const TodoComponent = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleTitle(e) {
    setTitle(e.target.value);
  }

  function handleDescription(e) {
    setDescription(e.target.value);
  }

  function saveTodo(e) {
    e.preventDefault();

    const todo = { title, description };
    console.log(todo);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="card">
          <h2 className="text-center">Add Todo</h2>
          <div className="card-body mb">
            <form>
              <div className="form-group mb-2">
                <label className="form-label">Title:</label>
                <input
                  type="text"
                  placeholder="Enter Todo Title"
                  name="title"
                  value={title}
                  className="form-control"
                  onChange={handleTitle}
                ></input>
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Description:</label>
                <input
                  type="text"
                  placeholder="Enter Todo Description"
                  name="description"
                  value={description}
                  className="form-control"
                  onChange={handleDescription}
                ></input>
              </div>
              <button
                type="button"
                className="btn btn-success"
                onClick={saveTodo}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoComponent;
