import React from "react";
import Todo from "./components/todo";
import NotFoundPage from "./components/notFoundPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="bg-gray-200 grid h-screen">
      <Router>
        <Routes>
          <Route path="/" element={<Todo />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
