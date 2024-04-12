/* eslint-disable no-unused-vars */
import axios from "axios";

const BASE_URI_API = "http://localhost:8092/api/todos";

export const listTodo = () => {
  return axios.get(BASE_URI_API);
};

export const createTodo = (todo) => {
  return axios.post(BASE_URI_API, todo);
};

export const getTodo = (todoId) => {
  return axios.get(BASE_URI_API + "/" + todoId);
};

export const updateTodo = (todoId, todo) => {
  return axios.put(BASE_URI_API + "/" + todoId, todo);
};

export const deleteTodo = (todoId) => {
  return axios.delete(BASE_URI_API + "/" + todoId);
};
