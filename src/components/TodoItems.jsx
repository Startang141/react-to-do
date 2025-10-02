import { BadgeCheck, Trash2 } from "lucide-react";
import React from "react";

function TodoItems({ doing }) {
  return (
    <div className="flex items-center justify-between my-4 border rounded-md py-4 px-2 hover:bg-slate-50">
      <div className="flex items-center gap-2">
        <BadgeCheck />
        <p>{doing}</p>
      </div>
      <Trash2 className="cursor-pointer" />
    </div>
  );
}

export default TodoItems;
