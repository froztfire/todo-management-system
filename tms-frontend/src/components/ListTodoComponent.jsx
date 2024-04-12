/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { deleteTodo, listTodo } from "../service/TodoService";
import { useNavigate } from "react-router-dom";

const ListTodoComponent = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    listTodo()
      .then((response) => {
        setTodos(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  });

  const navigator = useNavigate();

  function addNewTodo() {
    navigator("/add-todo");
  }

  function updateTodo(id) {
    navigator(`/edit-todo/${id}`);
    console.log(id);
  }

  function removeTodo(id) {
    navigator(`/remove-todo/${id}`);
  }

  return (
    <div className="container">
      <h2 className="text-center">List of Todos</h2>
      <button
        type="button"
        className="btn btn-primary mb-2"
        onClick={addNewTodo}
      >
        Add Todo
      </button>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>{todo.description}</td>
              <td>{todo.completed ? "YES" : "NO"}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-info"
                  onClick={() => {
                    updateTodo(todo.id);
                  }}
                >
                  Update
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  style={{ marginLeft: "10px" }}
                  onClick={() => {
                    deleteTodo(todo.id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListTodoComponent;
