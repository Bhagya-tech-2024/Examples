import React, { useState } from "react";
import CircuitForm from "./components/CircuitForm";
import ResultsTable from "./components/ResultsTable";
import CircuitDiagram from "./components/CircuitDiagram";
import "./index.css";

function App() {
  const [data, setData] = useState({
    voltage: 6,
    frequency: 50,
    r1: 39,
    r2: 27,
    current: 0,
    u1: 0,
    u2: 0,
    p1: 0,
    p2: 0,
  });

  const calculateValues = (input) => {
    const { voltage, r1, r2 } = input;
    const current = (voltage / (r1 + r2)) * 1000;
    const u1 = (current * r1) / 1000;
    const u2 = (current * r2) / 1000;
    const p1 = u1 * current;
    const p2 = u2 * current;

    setData({ ...input, current, u1, u2, p1, p2 });
  };

  return (
    <div className="app">
      <h1>Circuit Simulator</h1>
      <CircuitDiagram />
      <CircuitForm onCalculate={calculateValues} />
      <ResultsTable data={data} />
    </div>
  );
}

export default App;
