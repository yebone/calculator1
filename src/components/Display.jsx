import React, { useContext } from "react";
import { UserContext } from "../UserContext";

const Display = () => {
  const { display } = useContext(UserContext);
  return (
    <div id="display" className=" pt-16 pr-5 mt-4 text-right bg-slate-300">
      <h1 id="result" className=" text-lg font-semibold">
        {display}
      </h1>
    </div>
  );
};

export default Display;
