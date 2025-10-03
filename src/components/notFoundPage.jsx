import React from "react";
import { Link } from "react-router-dom";

function notFoundPage() {
  return (
    <div className="place-self-center text-center">
      <h1 className="text-9xl font-semibold">404</h1>
      <p>Not Found</p>
      <Link to="/">
        <button className="px-4 py-2 rounded-md my-2 cursor-pointer bg-slate-900 text-white">
          Home
        </button>
      </Link>
    </div>
  );
}

export default notFoundPage;
