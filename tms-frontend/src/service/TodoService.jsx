/* eslint-disable no-unused-vars */
import axios from "axios";

const BASE_URI_API = "http://localhost:8092/api/todos";

export const listTodo = () => {
  return axios.get(BASE_URI_API);
};

export const createTodo = (todo) => {
  return axios.post(BASE_URI_API, todo);
};
