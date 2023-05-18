
export default function TestTable({ children, columns = [], title }) {
  return (
    <div className='overflow-x-auto'>
      <table className='table w-full text-center'>
        <thead>
        <tr>
          <td colSpan={columns.length}><h2 className="text-lg text-white">{title}</h2></td>
        </tr>
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
