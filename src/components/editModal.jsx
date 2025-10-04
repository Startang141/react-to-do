import { X } from "lucide-react";
import React from "react";

function editModal({
  modalVisible,
  closeModal,
  text,
  setText,
  dueDate,
  setDueDate,
  handleSave,
}) {
  const onSubmit = (e) => {
    e.preventDefault();
    handleSave();
  };

  if (!modalVisible) return null;

  return (
    <div>
      <div className="fixed inset-0 z-10 flex items-center justify-center bg-black/50">
        <div className="w-2/4 bg-white p-6 rounded-md">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-700">Edit To Do</h2>
            <button onClick={closeModal} className="cursor-pointer">
              <X />
            </button>
          </div>
          <form onSubmit={onSubmit}>
            <div className="grid grid-cols-2 gap-2">
              <input
                type="text"
                className="bg-slate-100 py-3 px-2 rounded-md"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <input
                type="date"
                className="bg-slate-100 py-3 px-2 rounded-md"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="col-span-2 bg-gray-900 text-white py-3 px-2 w-full my-2 rounded-md"
            >
              Edit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default editModal;
