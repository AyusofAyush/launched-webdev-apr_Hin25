import { useState } from 'react';
import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'learn React' },
    { id: 2, text: 'Build a To-do List App' },
    { id: 3, text: 'Teake a break' },
  ]);

  const handleDelete = (id) => {
    const updateTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updateTodos);
  }
  return (
    <>
      <Header />
      <TodoList todos={todos} onDelete={handleDelete} />
      <Footer />
    </>
  );
}

export default App;
