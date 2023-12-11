import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    "Take dogs for a walk",
    "Take the rabbish out",
  ]);
  const [input, setInput] = useState("");
  console.log(input);

  const addTodo = (event) => {
    // console.log("xa", "Cool");
    event.preventDefault();
    setTodos([...todos, input]);
    setInput("");
  };
  //github.com/nenyaa/todo.git
  https: return (
    <div className="App">
      <h1> My first REACT app</h1>
      <form>
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button type="submit" onClick={addTodo}>
          Add Todo
        </button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
