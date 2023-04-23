import React from "react";

export default function TestTable({ children }) {
  return (
    <div className="overflow-x-auto">
    <table className="table w-full text-center">
      <thead>
      <tr>
        <th>Name</th>
        <th>Result</th>
        <th>Action</th>
        <th>Points</th>
      </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
    </div>
  );
}
