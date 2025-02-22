import TestTable from './table/TestTable.jsx';
import PredefinedTestTableRow from './table/PredefinedTestTableRow.jsx';

function PredefinedTests({ tests, fn, testResults, setTestResults }) {

  const runTest = (key, test) => {
    setTestResults([
      ...testResults.filter((it) => it.id !== key),
      { id: key, isSuccess: test.testFn(fn), points: test.points },
    ]);
  };


  const runAllTests = () => {
    setTestResults([
      ...tests.map((test, index) => ({
        id: index,
        isSuccess: test.testFn(fn),
        points: test.points,
      })),
    ]);
  };

  const sumPoints = testResults
    .filter((result) => result.isSuccess)
    .reduce((prev, curr) => prev + curr.points, 0);

  return (
    <>
      <TestTable columns={['Name', 'Result', 'Action', 'Points']} title="Predefined tests">
        {tests.map((test, index) => (
          <PredefinedTestTableRow
            key={test.name}
            name={test.name}
            testResult={testResults.find((it) => it.id === index)}
            onRun={() => runTest(index, test)}
            points={test.points}
          />
        ))}
        <tr>
          <td />
          <td />
          <td>
            <button onClick={runAllTests} className='btn'>
              Run All Tests
            </button>
          </td>
          <td>{sumPoints}</td>
        </tr>
      </TestTable>
    </>
  );
}

export default PredefinedTests;
