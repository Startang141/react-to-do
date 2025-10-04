import { Pencil, Square, SquareCheck, Trash2 } from "lucide-react";
import React from "react";

function TodoItems({
  doing,
  id,
  isComplete,
  deleteToDo,
  toggleComplete,
  date,
  handleEdit,
}) {
  return (
    <div className="flex items-center justify-between my-4 border rounded-md py-4 px-2 hover:bg-slate-50 overflow-hidden">
      <div
        onClick={() => toggleComplete(id)}
        className="flex items-center gap-2"
      >
        {isComplete ? (
          <SquareCheck strokeWidth={1} />
        ) : (
          <Square strokeWidth={1} />
        )}
        <div>
          <p
            className={`truncate max-w-60 font-semibold ${
              isComplete ? "line-through" : ""
            }`}
          >
            {doing}
          </p>
          <p className="text-sm text-gray-700">{date}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button onClick={handleEdit}>
          <Pencil />
        </button>
        <button
          onClick={() => {
            deleteToDo(id);
          }}
        >
          <Trash2 />
        </button>
      </div>
    </div>
  );
}

export default TodoItems;
