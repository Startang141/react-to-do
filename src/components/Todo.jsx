import React, { useMemo, useState } from "react";
import ReportBox from "./ReportBox";
import TodoItems from "./TodoItems";
import EditModal from "./editModal";
import ReadModal from "./readModal";

function Todo() {
  const [ToDoList, setToDoList] = useState([]);
  const [editToDo, setEditToDo] = useState(null);
  const [text, setText] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [detailModalVisible, setDetailModalVisible] = useState(false);

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
    setDetailModalVisible(false);
  };

  const handleEdit = (item) => {
    setEditToDo(item);
    setText(item.doing);
    setDueDate(item.dueDate);
    setModalVisible(true);
  };

  const handleDetail = (item) => {
    setEditToDo(item);
    setText(item.doing);
    setDueDate(item.dueDate);
    setDetailModalVisible(true);
  };

  const handleSave = () => {
    setToDoList((prev) => {
      return prev.map((ToDo) => {
        return ToDo.id === editToDo.id
          ? { ...ToDo, doing: text, dueDate: dueDate }
          : ToDo;
      });
    });

    setModalVisible(false);
    setEditToDo(null);
    setText("");
    setDueDate("");
  };

  const todayStr = useMemo(() => new Date().toISOString().slice(0, 10), []);

  const { scheduleCount, todayCount, overdueCount } = useMemo(() => {
    const today = ToDoList.filter((todo) => todo.dueDate === todayStr).length;
    const overdue = ToDoList.filter(
      (t) => t.dueDate < todayStr && !t.isComplete
    ).length;
    const schedule = ToDoList.filter((t) => t.dueDate > todayStr).length;
    return {
      scheduleCount: schedule,
      todayCount: today,
      overdueCount: overdue,
    };
  }, [ToDoList, todayStr]);

  const onSubmit = (e) => {
    e.preventDefault();
    addToDo(text, dueDate);
    setText("");
    setDueDate("");
  };

  return (
    <div className="bg-white md:w-2/5 lg:w- h-5/6 place-self-center rounded-2xl p-4">
      {/* Heading */}
      <h1 className="text-2xl font-semibold text-gray-700">To Do List 🐔</h1>
      <p className="text-sm text-gray-600">List Now, Doing One Day</p>

      {/* Mini Report */}
      <div className="grid grid-cols-3 my-4 gap-2">
        <ReportBox Name="Schedule" Sum={scheduleCount} />
        <ReportBox Name="Today" Sum={todayCount} />
        <ReportBox Name="Overdue" Sum={overdueCount} />
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
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
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
              handleEdit={() => handleEdit(item)}
              handleDetail={() => handleDetail(item)}
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
          dueDate={dueDate}
          setText={setText}
          setDueDate={setDueDate}
        />
        <ReadModal
          text={text}
          Date={dueDate}
          modalVisible={detailModalVisible}
          closeModal={closeModal}
        />
      </div>
    </div>
  );
}

export default Todo;
