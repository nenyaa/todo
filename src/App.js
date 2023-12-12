import React, { useState } from "react";
import { Button, FormControl, InputLabel, Input } from "@mui/material";
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
        <FormControl>
          <InputLabel> Write a Todo</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>

        <Button
          disabled={!input}
          type="submit"
          onClick={addTodo}
          variant="contained"
        >
          Add Todo
        </Button>
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
