import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  });

  return (
    <>
      <Navbar />
      <main className="flex flex-col gap-8 py-10 ">
        <Form setTodos={setTodos} />
        <List todos={todos} setTodos={setTodos} />
      </main>
    </>
  );
}

export default App;
