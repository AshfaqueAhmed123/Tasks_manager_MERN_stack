import React, { useContext } from "react";
import Todo from "./Todo";
import TodoContext from "../context/TodoContext";

const TodoList = () => {
  const { todos } = useContext(TodoContext);
  return (
    <div className="container m-auto w-1/2">
      {todos.map((todo) => {
        return <Todo key={todo?._id} text={todo?.text} id={todo?._id} />;
      })}
    </div>
  );
};

export default TodoList;
