import PredefinedTests from "./PredefinedTests.jsx";
import CustomTests from "./CustomTests.jsx";

export function FunctionTester({ fn, input, output, tests, onFinish }) {
  const functionCode = fn.toString();





  return (
    <>
      <h1>FunctionTester</h1>
      <div className="mockup-code max-w-[500px] mx-auto">
        <pre className="bg-primary text-primary-content"><code>Function</code></pre>
        <pre><code>{functionCode}</code></pre>
      </div>
      <PredefinedTests fn={fn} tests={tests} />
      <CustomTests input={input}/>
      <button
        className="btn"
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
