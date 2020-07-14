import React, { useState } from "react";
import useInput from "../hooks/useInput";

function UserForm() {

  const [firstName, bindFirstName, resetFirstName] = useInput('')
  const [lastName, bindLastName, resetLastName] = useInput('')

  const submitHandler = (event) => {
    event.preventDefault()
    alert(`Hello ${firstName} ${lastName}`)
    resetFirstName()
    resetLastName()
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
        placeholder="first"
        {... bindFirstName}
          
        />
        <input
          type="text"
          placeholder="last"
          {... bindLastName}
        />
        <input type="submit" value="submit"/>
      </form>
    </div>
  );
}

export default UserForm;
