import React, { useContext } from "react";
import TodoContext from "../context/TodoContext";

const Todo = ({ text, id }) => {
  const { deleteTodo } = useContext(TodoContext);
  return (
    <div className="bg-gray-800 text-white text-xl flex items-center justify-between p-3 mt-3 rounded-xl">
      <p>{text}</p>
      <div className="flex gap-2">
        <button className="btn btn-success">edit</button>
        <button
          className="btn btn-error"
          onClick={(e) => {
            deleteTodo(id);
          }}
        >
          delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
