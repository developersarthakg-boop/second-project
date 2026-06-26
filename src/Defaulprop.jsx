import React from "react";

function Defaulprop({
  user = { name: "Saksham Tripathi", email: "sakshamtriapthi007@gmail.com" },
}) {
  return (
    <div>
      <p> The user name is {user.name}</p>
      <p> The user email is {user.email}</p>
    </div>
  );
}

export default Defaulprop;
