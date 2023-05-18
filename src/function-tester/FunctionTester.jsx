import PredefinedTests from './PredefinedTests.jsx';
import CustomTests from './CustomTests.jsx';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

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

export function FunctionTester({ fn, input, output, tests, onFinish }) {
  const functionCode = fn.toString();

  const [testResults, setTestResults] = React.useState([]);
  const [manualTests, setManualTests] = React.useState([
    ...predefinedManualTests,
  ]);
  const [manualTestResults, setManualTestResults] = React.useState([]);

  console.log({man: manualTestResults.every((it) => it.isSuccess === true), pred: testResults.every((it) => it.isSuccess === true)})

  const isOkDisabled = (() => {
    if (manualTestResults.length !== manualTests.length) return true;
    if (testResults.length !== tests.length) return true;
    return (
      !manualTestResults.every((it) => it.isSuccess === true) ||
      !testResults.every((it) => it.isSuccess === true)
    );
  })();

  const onOk = () => {
    const predefinedTestsWithResults = tests.map((test, index) => {
      return {
        ...test,
        ...testResults?.find((result) => result.id === index),
      };
    });

    const manTestWithResults = manualTests.map((manTest) => {
      return {
        ...manTest,
        ...manualTestResults?.find((result) => result.id === manTest.id),
      };
    });

    onFinish([...predefinedTestsWithResults, ...manTestWithResults]);
  };

  return (
    <>
      <div className='mockup-code max-w-[500px] mx-auto'>
        <pre className='bg-primary text-primary-content'>
          <code>Function</code>
        </pre>
        <pre>
          <code>{functionCode}</code>
        </pre>
      </div>
      <div className='mt-20' />
      <PredefinedTests
        fn={fn}
        tests={tests}
        testResults={testResults}
        setTestResults={setTestResults}
      />
      <div className='mt-20' />
      <CustomTests
        fn={fn}
        input={input}
        output={output}
        onFinish={onFinish}
        manualTests={manualTests}
        setManualTests={setManualTests}
        manualTestResults={manualTestResults}
        setManualTestResults={setManualTestResults}
      />
      <div className='flex w-full justify-center my-10'>
        <button
          className='btn btn-primary'
          disabled={isOkDisabled}
          onClick={onOk}
        >
          OK
        </button>
      </div>
    </>
  );
}
