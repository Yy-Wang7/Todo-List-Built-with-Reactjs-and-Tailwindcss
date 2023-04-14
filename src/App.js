import { useState } from "react";
import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import Form from "./components/Form";

function App() {
  const [tasks, setTasks] = useState([]);
  const addTask = (name) => {
    const newTask = { id: tasks.length + 1, name, completed: false };
    setTasks([...tasks, newTask]);
  };
  const deleteTask = (id) => {
    let copy = tasks;
    copy = copy.filter((task) => task.id !== id);
    let i = 1;
    for (const _ of copy) {
      _.id = i;
      ++i;
    }
    setTasks(copy);
  };
  const editTask = (id, newName) => {
    const editedTaskList = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, name: newName };
      }
      return task;
    });
    setTasks(editedTaskList);
  };
  return (
    <section className="flex flex-col items-center w-screen">
      <Form addTask={addTask} />
      <TodoList data={tasks} deleteTask={deleteTask} editTask={editTask} />
    </section>
  );
}

export default App;
