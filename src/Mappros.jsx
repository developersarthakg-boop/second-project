import React from "react";

function Mappros({ person }) {
  return (
    <div>
      {person.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}

export default Mappros;
