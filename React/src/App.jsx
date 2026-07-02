import React from "react";
import "./App.css";
import Wall from "./Jul-1/Wall";
import Count from "./Jul-1/Count";
import Basic from "./Jul-2/Basic";
import OnlyOnce from "./Jul-2/OnlyOnce";
import Dependency from "./Jul-2/Dependency";

function App() {  

  return(
    <>
      <Basic/>
      <OnlyOnce/>
      <Dependency/>
    </>
  )
}

export default App;