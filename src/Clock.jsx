import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const tick = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(tick); // Cleanup on unmount
  }, []);
  return (
    <div className=" grid text-center text-fuchsia-200 text-[80px] ">
      <div>{time.toLocaleDateString("en-IN")}</div>
      <div className=" text-[250px] font-bold text-fuchsia-200 ">
        {time.toLocaleTimeString("en-IN")}
      </div>
    </div>
  );
}

export default Clock;
