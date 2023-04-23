import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/all.js";

export default function TestTableRow({ name, testResult, onRun, points }) {
  return (
    <tr>
      <td>{name}</td>
      <td className="flex justify-center">
        <ResultIndicator testResult={testResult} />
      </td>
      <td>
        <button className="btn btn-success" onClick={onRun}>Run Test</button>
      </td>
      <td><TestPoints points={points} testResult={testResult}/></td>
    </tr>
  );
}

function TestPoints({testResult, points}) {
  if(!testResult){
    return <span>{points}</span>
  }
  return <span className={testResult.isSuccess ? "text-success" : "text-error"} >{points}</span>
}

function ResultIndicator({ testResult }) {
  if (!testResult) {
    return null;
  }
  return <>{testResult.isSuccess ? <AiFillCheckCircle className="icon text-success" /> : <AiFillCloseCircle className="icon text-error" />}</>;
}
