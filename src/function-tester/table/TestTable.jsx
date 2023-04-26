import React from 'react';

export default function TestTable({ children, columns = [] }) {
  return (
    <div className='overflow-x-auto'>
      <table className='table w-full text-center'>
        <thead>
          <tr>
            {columns.map((it) => (
              <th key={it}>{it}</th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}
