import { useState } from "react";
import React from "react";

export default function Form(props) {
  const [name, setName] = useState("");
  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTask(name);
    setName("");
  };
  return (
    <form action="" onSubmit={handleSubmit} className=" w-1/2">
      <h2 className=" text-xl m-2">Add a new todo item</h2>
      <div className="w-full flex justify-between">
        <input
          type="text"
          className="basis-[88%] shrink rounded-lg p-2 border-solid border-2 border-black"
          placeholder="What needs to be done?"
          autoComplete="off"
          value={name}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="basis-[10%] flex-none px-2 bg-gray-800 text-white rounded-lg hover:bg-gray-600 ease-out duration-200"
        >
          Add
        </button>
      </div>
    </form>
  );
}
