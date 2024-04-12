/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const ListTodoComponent = () => {
  const dummyData = [
    {
      id: 1,
      title: "Learn Core Java",
      description: "Learn Core Java with Examples",
      completed: false,
    },
    {
      id: 2,
      title: "Learn Spring Boot",
      description: "Learn Spring Boot with Examples",
      completed: false,
    },
    {
      id: 3,
      title: "Learn React",
      description: "Learn React with Examples",
      completed: false,
    },
  ];

  const [todos, setTodos] = useState(dummyData);

  return (
    <div className="container">
      <h2 className="text-center">List of Todos</h2>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>{todo.description}</td>
              <td>{todo.completed ? "YES" : "NO"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListTodoComponent;
