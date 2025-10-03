import { Square, SquareCheck, Trash2 } from "lucide-react";
import React from "react";

function TodoItems({ doing, id, isComplete, deleteToDo, toggleComplete }) {
  return (
    <div className="flex items-center justify-between my-4 border rounded-md py-4 px-2 hover:bg-slate-50">
      <div
        onClick={() => toggleComplete(id)}
        className="flex items-center gap-2"
      >
        {isComplete ? (
          <SquareCheck strokeWidth={1} />
        ) : (
          <Square strokeWidth={1} />
        )}
        <p className={`${isComplete ? "line-through" : ""}`}>{doing}</p>
      </div>
      <button
        onClick={() => {
          deleteToDo(id);
        }}
      >
        <Trash2 className="cursor-pointer" />
      </button>
    </div>
  );
}

export default TodoItems;
