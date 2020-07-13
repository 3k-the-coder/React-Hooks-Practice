import React, { useState, useEffect, useRef } from "react";

function HookTimer() {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef()

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, []);

  // without using useRef if we directly use interval, it will throw an error that interval is not defined.
  // In this scenario, we can make use of hook - useRef
  return <div>
      Timer : {timer}
      <button onClick={() => clearInterval(intervalRef.current) }> Clear Hook </button>

  </div>;
}

export default HookTimer;
