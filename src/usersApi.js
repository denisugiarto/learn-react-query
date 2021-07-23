import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

export const getUsers = () => api.get("/posts").then((res) => res.data);

export const getUser = (id) => api.get(`/posts/${id}`).then((res) => res.data);

export const updateUser = ({ id, ...updatedUser }) =>
  api.put(`/put/${id}`, updatedUser).then((res) => res.data);
