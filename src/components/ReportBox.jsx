import React from "react";

function ReportBox({ Name, Sum }) {
  return (
    <div>
      <div className=" rounded-md p-2 bg-gray-900 text-white text-center">
        <p className="text-xl font-semibold mb-1">{Sum}</p>
        <h3 className="text-lg font-light">{Name}</h3>
      </div>
    </div>
  );
}

export default ReportBox;
