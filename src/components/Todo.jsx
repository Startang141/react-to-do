import React, { useState } from "react";
import ReportBox from "./ReportBox";
import TodoItems from "./TodoItems";
import EditModal from "./editModal";

function Todo() {
  const [ToDoList, setToDoList] = useState([]);
  const [editToDo, setEditToDo] = useState(null);
  const [text, setText] = useState("");
  const [Date, setDate] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const addToDo = (doing, dueDate) => {
    if (!doing.trim() || !dueDate) {
      return null;
    }

    const newToDo = {
      id: crypto.randomUUID(),
      doing,
      isComplete: false,
      dueDate,
    };

    setToDoList((prevToDo) => [...prevToDo, newToDo]);
  };

  const deleteToDo = (id) => {
    setToDoList((prevToDo) => {
      return prevToDo.filter((ToDo) => ToDo.id !== id);
    });
  };

  const toggleComplete = (id) => {
    setToDoList((prevToDo) => {
      return prevToDo.map((ToDo) => {
        return ToDo.id === id
          ? { ...ToDo, isComplete: !ToDo.isComplete }
          : ToDo;
      });
    });
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleEdit = (item) => {
    setEditToDo(item);
    setText(item.doing);
    setDate(item.dueDate);
    setModalVisible(true);
  };

  const handleSave = () => {
    setToDoList((prev) => {
      return prev.map((ToDo) => {
        return ToDo.id === editToDo.id
          ? { ...ToDo, doing: text, dueDate: Date }
          : ToDo;
      });
    });

    setModalVisible(false);
    setEditToDo(null);
    setText("");
    setDate("");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addToDo(text, Date);
    setText("");
    setDate("");
  };

  return (
    <div className="bg-white md:w-2/5 lg:w- h-5/6 place-self-center rounded-2xl p-4">
      {/* Heading */}
      <h1 className="text-2xl font-semibold text-gray-700">To Do List 🐔</h1>
      <p className="text-sm text-gray-600">List Now, Doing One Day</p>

      {/* Mini Report */}
      <div className="grid grid-flow-col grid-cols-3 my-4 gap-2">
        <ReportBox Name="Schedule" Sum="12" />
        <ReportBox Name="Today" Sum="1A" />
        <ReportBox Name="Overdue" Sum="32A" />
      </div>

      <form onSubmit={onSubmit}>
        <div className="grid grid-cols-2 gap-2">
          <input
            type="text"
            className="bg-slate-100 py-3 px-2 rounded-md"
            placeholder="Doing Something"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <input
            type="date"
            className="bg-slate-100 py-3 px-2 rounded-md"
            value={Date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="col-span-2 bg-gray-900 text-white py-3 px-2 w-full my-2 rounded-md"
        >
          Add +
        </button>
      </form>

      {/* List To Do */}
      <div className="overflow-y-auto sm:h-3/6 md:h-3/5 my-4">
        {ToDoList.length > 0 ? (
          ToDoList.map((item) => (
            <TodoItems
              key={item.id}
              doing={item.doing}
              date={item.dueDate}
              id={item.id}
              isComplete={item.isComplete}
              deleteToDo={deleteToDo}
              toggleComplete={toggleComplete}
              handleEdit={() => handleEdit(item)} // Edit when clicked
            />
          ))
        ) : (
          <p>No tasks available</p> // Menampilkan pesan jika kosong
        )}
      </div>

      {/* Modal */}
      <div>
        <EditModal
          modalVisible={modalVisible}
          closeModal={closeModal}
          handleSave={handleSave}
          text={text}
          dueDate={Date}
          setText={setText}
          setDueDate={setDate}
        />
      </div>
    </div>
  );
}

export default Todo;
