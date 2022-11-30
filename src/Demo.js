import { memo } from "react";

const Demo = ({ demoCount, setDemoCount }) => {
  console.log("demo rendered......");
  return (
    <>
      <h1>Demo Page...{demoCount}</h1>
      <button onClick={setDemoCount}>Add Demo</button>
    </>
  );
};
export default memo(Demo);
