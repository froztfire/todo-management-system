/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { createTodo } from "../service/TodoService";
import { useNavigate } from "react-router-dom";

const TodoComponent = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [complete, setComplete] = useState(false);

  const navigator = useNavigate();

  function saveTodo(e) {
    e.preventDefault();

    const todo = { title, description, complete };
    console.log(todo);

    createTodo(todo)
      .then((response) => {
        console.log(response.data);
        navigator("/todos");
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="container">
      <br />
      <br />
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          <h2 className="text-center">Add Todo</h2>
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label">Title:</label>
                <input
                  type="text"
                  placeholder="Enter Todo Title"
                  name="title"
                  value={title}
                  className="form-control"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
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
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                ></input>
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Completed:</label>
                <select
                  className="form-control"
                  value={complete}
                  onChange={(e) => {
                    setComplete(e.target.value);
                  }}
                >
                  <option value="false">No</option>
                  <option value="true">Yes</option>
                </select>
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
