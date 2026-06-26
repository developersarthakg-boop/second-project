import React, { useState } from "react";
import Bio from "./Bio";

const States = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      <p>This is a toggle state showing example</p>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show ? <p> THis is the show hide function applying </p> : <p> </p>}
      {show && <Bio />}
    </>
  );
};

export default States;
