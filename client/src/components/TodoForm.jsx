import React, { useContext, useState } from "react";
import TodoContext from "../context/TodoContext";
import { backend_server_base_url } from "../constants";

const TodoForm = () => {
  const [input, setInput] = useState("");
  const { fetchAllTodos } = useContext(TodoContext);

  const handleSubmit = async () => {
    try {
      const todo = await fetch(`${backend_server_base_url}/`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          text: input,
        }),
      });
      if (todo.status == 200) {
        fetchAllTodos();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
        setInput("");
      }}
      className="flex items-center justify-center gap-3"
    >
      <input
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        className="input input-primary text-xl"
        type="text"
        placeholder="type todo ..."
      />
      <button className="btn btn-primary">Add Task</button>
    </form>
  );
};

export default TodoForm;
