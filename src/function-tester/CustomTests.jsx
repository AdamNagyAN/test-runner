import React from 'react';
import TestTable from './table/TestTable.jsx';
import { v4 as uuidv4 } from 'uuid';
import {
  AiFillCloseCircle,
  AiFillEdit,
  AiFillPlayCircle,
  AiFillPlusCircle,
} from 'react-icons/ai';
import CustomTestForm from './form/CustomTestForm.jsx';
import { ResultIndicator } from './table/ResultIndicator.jsx';

export const NEW_TEST_ID = 'newTest';

const predefinedManualTests = [
  {
    input: {
      a: 2,
      b: -2,
    },
    id: uuidv4(),
    testName: 'First manual test',
    output: 0,
  },
  {
    input: {
      a: 4,
      b: -4,
    },
    id: uuidv4(),
    testName: 'Second manual test',
    output: 0,
  },
];

function CustomTests({ fn, input, output }) {
  const [manualTests, setManualTests] = React.useState([
    ...predefinedManualTests,
  ]);
  const [selectedTestId, setSelectedTestId] = React.useState(null);
  const [manualTestResults, setManualTestResults] = React.useState([]);

  const onEdit = (id) => {
    setSelectedTestId(id);
  };

  const onRemove = (id) => {
    setManualTests(manualTests.filter((man) => man.id !== id));
  };

  const onAddTest = () => {
    setSelectedTestId(NEW_TEST_ID);
  };

  const onRunTest = (id) => {
    const test = manualTests.find((test) => test.id === id);
    const functionResult = JSON.stringify(fn(test.input));
    const expectedResult = JSON.stringify(test.output);
    console.log({ functionResult, expectedResult });
    setManualTestResults([
      ...manualTestResults.filter((test) => test.id !== id),
      { id: test.id, isSuccess: functionResult === expectedResult },
    ]);
  };

  return (
    <>
      <h2 className='text-2xl my-6 mx-4'>Custom tests:</h2>
      <TestTable columns={['#', 'Name', 'Result', 'Action']}>
        {manualTests.map((test, index) => {
          console.log({
            test,
            result: manualTestResults.find((result) => result.id === test.id)
              ?.isSuccess,
          });
          return (
            <tr key={test.id}>
              <td>{index}</td>
              <td>{test.testName}</td>
              <td className='flex justify-center'>
                <ResultIndicator
                  testResult={manualTestResults.find(
                    (result) => result.id === test.id,
                  )}
                />
              </td>
              <td>
                <button onClick={() => onRunTest(test.id)}>
                  <AiFillPlayCircle className='icon text-accent' />
                </button>
                <button onClick={() => onEdit(test.id)}>
                  <AiFillEdit className='icon text-info' />
                </button>
                <button onClick={() => onRemove(test.id)}>
                  <AiFillCloseCircle className='icon text-error' />
                </button>
              </td>
            </tr>
          );
        })}
        <tr>
          <td />
          <td />
          <td />
          <td>
            <button onClick={onAddTest}>
              <AiFillPlusCircle className='icon text-success' />
            </button>
          </td>
        </tr>
      </TestTable>
      {selectedTestId && (
        <CustomTestForm
          input={input}
          output={output}
          selectedTest={manualTests.find((test) => test.id === selectedTestId)}
          setSelectedTest={setSelectedTestId}
          manualTests={manualTests}
          setManualTests={setManualTests}
        />
      )}
    </>
  );
}

export default CustomTests;
