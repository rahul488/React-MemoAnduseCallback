import { useCallback, useState } from "react";
import Demo from "./Demo";
import "./styles.css";

export default function App() {
  const [count, setcount] = useState(0);
  const [demoNumber, setDemoNumber] = useState(0);
  const maintainDemoCount = useCallback(() => {
    setDemoNumber(demoNumber + 1);
  }, [demoNumber]);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <h3>{count}</h3>
      <button onClick={() => setcount(count + 1)}>Add</button>
      <Demo demoCount={demoNumber} setDemoCount={maintainDemoCount} />
    </div>
  );
}
