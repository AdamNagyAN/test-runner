import React from 'react'
import TestTable from "./TestTable.jsx";
import TestTableRow from "./TestTableRow.jsx";

export function FunctionTester({ fn, input, output, tests, onFinish }) {
  const functionCode = fn.toString();
  const [manualTests, setManualTests] = React.useState([]);
  const [currentTest, setCurrentTest] = React.useState(0);
  const [testResults, setTestResults] = React.useState([]);

  const runTest = (key, test) => {
    setTestResults([...testResults.filter(it => it.id !== key),  { id: key, isSuccess: test.testFn(fn), points: test.points }])
  };

  console.log(testResults);

  const runAllTests = () => {
    setTestResults([...tests.map((test, index) => ({ id: index, isSuccess: test.testFn(fn), points: test.points }))])
  }

  const sumPoints = testResults.filter(result => result.isSuccess).reduce((prev, curr) => prev + curr.points, 0);


  return (
    <>
      <h1>FunctionTester</h1>
      <p>{functionCode}</p>

      <h2>Tests</h2>
      <TestTable>
        {tests.map((test, index) => (
          <TestTableRow
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
          <td ><button onClick={runAllTests} className="btn">Run All Tests</button></td>
          <td>{sumPoints}</td>
        </tr>
      </TestTable>
      <button
        onClick={() =>
          onFinish({
            givenTests: [],
            testResult: { achieved: 100, all: 100 },
            customTests: [],
          })
        }
      >
        OK
      </button>
    </>
  );
}
