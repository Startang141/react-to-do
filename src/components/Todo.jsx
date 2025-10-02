import React from "react";
import ReportBox from "./ReportBox";
import TodoItems from "./TodoItems";

function Todo() {
  return (
    <div className="bg-white md:w-2/5 lg:w-1/3 h-5/6 place-self-center rounded-2xl p-4 overflow-hidden">
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
          className="rounded-md w-full py-3 px-2"
          placeholder="To Do"
          type="text"
        />
        <button className="bg-gray-900 text-white px-4 py-3 rounded-tr-md rounded-br-md cursor-pointer">
          Add
        </button>
      </div>

      {/* List To Do */}
      <div className="overflow-y-auto h-1/2 my-4">
        <TodoItems doing="" />
        <TodoItems doing="" />
        <TodoItems doing="" />
      </div>
    </div>
  );
}

export default Todo;
