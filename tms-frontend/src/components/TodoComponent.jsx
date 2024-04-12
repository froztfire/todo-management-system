/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { createTodo, getTodo, updateTodo } from "../service/TodoService";
import { useNavigate, useParams } from "react-router-dom";

const TodoComponent = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setComplete] = useState(false);

  const navigator = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getTodo(id)
        .then((response) => {
          setTitle(response.data.title);
          setDescription(response.data.description);
          setComplete(response.data.completed);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [id]);

  function saveOrUpdateTodo(e) {
    e.preventDefault();

    const todo = { title, description, completed };
    console.log(todo);

    if (id) {
      updateTodo(id, todo)
        .then((response) => {
          console.log(response.data);
          navigator("/todos");
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      createTodo(todo)
        .then((response) => {
          console.log(response.data);
          navigator("/todos");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }

  function pageTitle() {
    if (id) {
      return <h2 className="text-center">Update Todo</h2>;
    } else {
      return <h2 className="text-center">Add Todo</h2>;
    }
  }

  return (
    <div className="container">
      <br />
      <br />
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          {pageTitle()}
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
                  value={completed}
                  onChange={(e) => {
                    setComplete(e.target.value);
                  }}
                >
                  <option value="false">NO</option>
                  <option value="true">YES</option>
                </select>
              </div>
              <button
                type="button"
                className="btn btn-success"
                onClick={saveOrUpdateTodo}
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
