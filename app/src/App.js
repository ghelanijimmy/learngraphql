import React from "react";
import "./App.css";

function App() {
  console.log(process.env);
  return (
    <div className="App">
      <br />
      <svg className={"spinner"} height={100} width={100}>
        <circle r={10} fill={"black"} cx={15} cy={30} />
        <circle r={10} fill={"black"} cx={50} cy={10} />
        <circle r={10} fill={"black"} cx={85} cy={30} />
        <circle r={10} fill={"black"} cx={85} cy={70} />
        <circle r={10} fill={"black"} cx={50} cy={90} />
        <circle r={10} fill={"black"} cx={15} cy={70} />
      </svg>
    </div>
  );
}

export default App;
