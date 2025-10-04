import { X } from "lucide-react";
import React from "react";

function readModal({ text, Date, modalVisible, closeModal }) {
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
          <p>Do : {text}</p>
          <p>Date : {Date}</p>
        </div>
      </div>
    </div>
  );
}

export default readModal;
