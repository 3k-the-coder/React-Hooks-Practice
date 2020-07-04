import React, { useState } from "react";

// useState with Object
function HookCounterThree() {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="first"
          value={name.firstName}
          onChange={(e) => setName({ ... name,  firstName: e.target.value })}
        />
        <input
          type="text"
          placeholder="last"
          value={name.lastName}
          onChange={(e) => setName({ ... name, lastName: e.target.value })}
        />
        <h2> First Name - {name.firstName} </h2>
        <h2> Last Name = {name.lastName} </h2>

        <h2> {JSON.stringify(name)} </h2>
      </form>
    </div>
  );
}

export default HookCounterThree;
