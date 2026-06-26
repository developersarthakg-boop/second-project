import React from "react";

function Propse({ user }) {
  return (
    <div>
      <p>My name is {user.name}</p>
      <p>My email is {user.email}</p>
    </div>
  );
}

export default Propse;
