import React from 'react';
import TestTable from './table/TestTable.jsx';
import { v4 as uuidv4 } from 'uuid';
import {
  AiFillCloseCircle,
  AiFillEdit,
  AiFillPlayCircle,
} from 'react-icons/ai';
import CustomTestForm from './form/CustomTestForm.jsx';

const predefinedManualTests = [
  {
    id: uuidv4(),
    testName: 'First manual test',
    a: 2,
    b: -2,
  },
  { id: uuidv4(), testName: 'Second manual test', a: -4, b: 4 },
];

function CustomTests({ input }) {
  const [manualTests, setManualTests] = React.useState([
    ...predefinedManualTests,
  ]);
  const [selectedTest, setSelectedTest] = React.useState(null);

  const onEdit = (test) => {
    setSelectedTest(test);
  };

  const onRemove = (test) => {
    setManualTests(
      manualTests.filter((man) => JSON.stringify(man) !== JSON.stringify(test)),
    );
  };

  return (
    <>
      <h2 className='text-2xl my-6 mx-4'>Custom tests:</h2>
      <TestTable columns={['#', 'Name', 'Result', 'Action']}>
        {manualTests.map((test, index) => (
          <tr key={test.id}>
            <td>{index}</td>
            <td>{test.testName}</td>
            <td></td>
            <td>
              <button>
                <AiFillPlayCircle className='icon text-accent' />
              </button>
              <button onClick={() => onEdit(test)}>
                <AiFillEdit className='icon text-info' />
              </button>
              <button onClick={() => onRemove(test)}>
                <AiFillCloseCircle className='icon text-error' />
              </button>
            </td>
          </tr>
        ))}
      </TestTable>
      {selectedTest && (
        <CustomTestForm
          input={input}
          selectedTest={selectedTest}
          setSelectedTest={setSelectedTest}
        />
      )}
    </>
  );
}

export default CustomTests;
