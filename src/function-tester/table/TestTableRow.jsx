import { AiFillPlayCircle } from "react-icons/ai";
import { ResultIndicator } from "./ResultIndicator.jsx";

export default function TestTableRow({ name, testResult, onRun, points }) {
  return (
    <tr>
      <td>{name}</td>
      <td className="flex justify-center">
        <ResultIndicator testResult={testResult} />
      </td>
      <td>
        <button onClick={onRun}><AiFillPlayCircle className="icon text-accent" /></button>
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


