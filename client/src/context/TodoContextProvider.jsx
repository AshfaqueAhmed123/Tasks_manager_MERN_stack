import React, { useEffect, useState } from "react";
import TodoContext from "./TodoContext";
import { backend_server_base_url } from "../constants";

const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const fetchAllTodos = async () => {
    try {
      const response = await fetch(`${backend_server_base_url}/`);
      const todos = await response.json();
      setTodos([...todos?.data]);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      const deleted = await fetch(`${backend_server_base_url}/${id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      });
      if (deleted.status == 200) {
        fetchAllTodos();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    (async () => {
      const response = await fetch(`${backend_server_base_url}/`);
      const todos = await response.json();
      setTodos([...todos?.data]);
    })();
  }, []);

  return (
    <TodoContext.Provider
      value={{ todos, setTodos, fetchAllTodos, deleteTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
