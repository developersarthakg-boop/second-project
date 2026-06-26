import React, { useState } from "react";

const States = () => {
  const [show, setShow] = useState();
  return (
    <>
      <p>This is a toggle state showing example</p>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show ? <p> THis is the show hide function applying </p> : <p> </p>}
    </>
  );
};

export default States;
