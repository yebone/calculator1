import React, { useState } from "react";
import "./App.css";
import Display from "./components/display";
import DisplayForBtn from "./components/DisplayForBtn";
import { UserContext } from "./UserContext";

function App() {
  const [display, setDisplay] = useState("");

  return (
    <div>
      <UserContext.Provider value={{ display, setDisplay }}>
        <div className=" max-w-md mx-auto  ">
          <Display />
          <DisplayForBtn />
        </div>
      </UserContext.Provider>
    </div>
  );
}

export default App;
