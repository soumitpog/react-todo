import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";

const App = () => {
  const [todos, setTodos] = useState([]);

  // function to GET all the todos
  const fetchTodos = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setTodos(response.data);
  };

  // Populate the todos state at the start of the app
  useEffect(() => {
    fetchTodos();
  }, []);

  // Create a todo
  const createTodo = async (title) => {
    // Insert a new todo in db.json
    const response = await axios.post("http://localhost:3001/books", {
      content: title,
    });
    const updatedTodos = [...todos, response.data];
    setTodos(updatedTodos);
  };

  // Edit todo
  const editTodoById = async (id, value) => {
    // Updating the todo.
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      content: value,
    });

    // Updating out todo state.
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) return { ...todo, ...response.data };
      return todo;
    });
    setTodos(updatedTodos);
  };

  // Delete a todo
  const deleteTodoById = async (id) => {
    // Delete todo from the db.json file.
    const response = await axios.delete(`http://localhost:3001/books/${id}`);

    // Updating the state of todo.
    const updatedTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="app">
      <h1>Todo App</h1>
      <BookList onEdit={editTodoById} todos={todos} onDelete={deleteTodoById} />
      <BookCreate onInputSubmit={createTodo} />
    </div>
  );
};

export default App;
