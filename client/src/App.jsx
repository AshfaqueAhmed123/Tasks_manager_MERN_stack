import React from "react";
import TodoContextProvider from "./context/TodoContextProvider";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <TodoContextProvider>
      <Header />
      <div className="mt-4">
        <TodoForm />
      </div>
      <div className="mt-4">
        <TodoList />
      </div>
    </TodoContextProvider>
  );
};

export default App;
