import React from 'react';
import TestTable from './table/TestTable.jsx';

function CustomTests() {
  return (
    <>
      <h2 className='text-2xl my-6 mx-4'>Custom tests:</h2>
      <TestTable columns={["#",'Name', 'Result', 'Action']}>

      </TestTable>
    </>
  );
}

export default CustomTests;
