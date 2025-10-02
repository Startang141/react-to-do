import React, { useRef, useState } from "react";
import ReportBox from "./ReportBox";
import TodoItems from "./TodoItems";

function Todo() {
  const [ToDoList, setToDoList] = useState([]);
  const inputRef = useRef();

  const addToDo = () => {
    const inputToDo = inputRef.current.value.trim();
    if (inputToDo === "") {
      return null;
    }

    const newToDo = {
      id: Date.now(),
      ToDo: inputToDo,
      isComplete: false,
    };

    setToDoList((prev) => [...prev, newToDo]);
  };

  const deleteToDo = (id) => {
    setToDoList((prevToDo) => {
      return prevToDo.filter((ToDo) => ToDo.id !== id);
    });
  };
  return (
    <div className="bg-white md:w-2/5 lg:w- h-5/6 place-self-center rounded-2xl p-4 overflow-hidden">
      {/* Heading */}
      <h1 className="text-2xl font-semibold text-gray-700">To Do List 🐔</h1>
      <p className="text-sm text-gray-600">List Now, Doing One Day</p>

      {/* Mini Report */}
      <div className="grid grid-flow-col grid-cols-3 my-4 gap-2">
        <ReportBox Name="Schedule" Sum="12" />
        <ReportBox Name="Today" Sum="1A" />
        <ReportBox Name="Overdue" Sum="32A" />
      </div>

      {/* Input */}
      <div className="bg-slate-100 flex items-center rounded-md">
        <input
          ref={inputRef}
          className="rounded-md w-full py-3 px-2"
          placeholder="To Do"
          type="text"
        />
        <button
          onClick={addToDo}
          className="bg-gray-900 text-white px-4 py-3 rounded-tr-md rounded-br-md cursor-pointer"
        >
          Add
        </button>
      </div>

      {/* List To Do */}
      <div className="overflow-y-auto h-1/2 my-4">
        {ToDoList.map((item, index) => {
          return (
            <TodoItems
              key={index}
              doing={item.ToDo}
              id={item.id}
              isComplete={item.isComplete}
              deteleToDo={deleteToDo}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Todo;
