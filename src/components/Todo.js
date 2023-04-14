import React from "react";
import { useState } from "react";

export default function Todo(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(props.name);
  const handleEdit = () => {
    setIsEditing(true);
    if (props.data[props.id - 1].name !== newName) {
      setNewName(props.data[props.id - 1].name);
    }
  };
  const handleCancel = () => {
    setIsEditing(false);
  };
  const handleChange = (e) => {
    setNewName(e.target.value);
  };
  const handleSave = (e) => {
    e.preventDefault();
    const newTask = newName;
    props.handleEdit(props.id, newTask);
    setIsEditing(false);
  };
  if (isEditing) {
    return (
      <li className="border-solid border-black border-2 rounded-2xl m-5 p-4 w-full">
        <form action="" onSubmit={handleSave}>
          <div className="flex items-center">
            <input
              type="text"
              value={newName}
              onChange={handleChange}
              className="border-solid border-black border-2 rounded-md"
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-gray-800 text-white py-1 px-3 mt-3 mx-3 rounded-md hover:bg-gray-600 ease-out duration-200"
            >
              Save
            </button>
            <button
              type="button"
              className="bg-gray-800 text-white py-1 px-3 mt-3 mx-3 rounded-md hover:bg-gray-600 ease-out duration-200"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </li>
    );
  } else {
    return (
      <li className="border-solid border-black border-2 rounded-2xl m-5 p-4 w-full">
        <div className="flex items-center">
          <input
            id={props.id}
            type="checkbox"
            defaultChecked={props.completed}
            className=" cursor-pointer scale-150"
          />
          <label htmlFor={props.id} className="text-xl p-3">
            {props.name}
          </label>
        </div>
        <div>
          <button
            type="button"
            className="bg-gray-800 text-white py-1 px-3 mt-3 mx-3 rounded-md hover:bg-gray-600 ease-out duration-200"
            onClick={handleEdit}
          >
            Edit
          </button>
          <button
            type="button"
            className="bg-gray-800 text-white py-1 px-3 mt-3 mx-3 rounded-md hover:bg-gray-600 ease-out duration-200"
            onClick={() => props.handleDelete(props.id)}
          >
            Delete
          </button>
        </div>
      </li>
    );
  }
}
