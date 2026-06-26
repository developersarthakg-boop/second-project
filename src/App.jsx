import React, { useState } from "react";
import States from "./States";
import Propse from "./Propse";
import Proper from "./Proper";
import Mappros from "./Mappros";
import Defaulprop from "./Defaulprop";
import Childeren from "./Childeren";
import Statesprop from "./Statesprop";

function App() {
  const names = "Sarthak Tripathi";
  const email = "Sarthaktriapthideveloper@gmail.com";
  const [user, setUser] = useState();
  const agent = "Mihechle Jacksoon";
  return (
    <div>
      <States />
      {/* <Propse names={names} email={email} /> */}
      <Propse user={{ name: names, email: email }} />

      <Proper name={names} email={email} />

      <Mappros person={["saksham", "shizuka", "Ankita"]} />
      {/* <Defaulprop user={{ name: names, email: email }}
       /> */}

      <Defaulprop />

      <Childeren>
        <p>
          This is the children prop coming from the app . js file welcome you
          here this is very good
        </p>
      </Childeren>
      <button onClick={() => setUser(!user)}>Toggle User </button>
      {user && <Statesprop agent={agent} />}
    </div>
  );
}

export default App;
