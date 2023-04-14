import React from "react";
import Todo from "./Todo";

export default function TodoList(props) {
  const tasklist = props.data.map((todo) => (
    <Todo
      id={todo.id}
      name={todo.name}
      completed={todo.completed}
      key={todo.id}
      handleDelete={props.deleteTask}
      handleEdit={props.editTask}
      data={props.data}
    />
  ));
  return <ul className="flex flex-col items-center w-1/2">{tasklist}</ul>;
}
