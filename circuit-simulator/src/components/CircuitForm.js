import React, { useState } from "react";

function CircuitForm({ onCalculate }) {
  const [inputs, setInputs] = useState({
    voltage: 6,
    frequency: 50,
    r1: 39,
    r2: 27,
  });

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: parseFloat(e.target.value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCalculate(inputs);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Voltage (V):
        <input
          type="number"
          name="voltage"
          value={inputs.voltage}
          onChange={handleChange}
        />
      </label>
      <label>
        Frequency (Hz):
        <input
          type="number"
          name="frequency"
          value={inputs.frequency}
          onChange={handleChange}
        />
      </label>
      <label>
        Resistance R1 (Ω):
        <input
          type="number"
          name="r1"
          value={inputs.r1}
          onChange={handleChange}
        />
      </label>
      <label>
        Resistance R2 (Ω):
        <input
          type="number"
          name="r2"
          value={inputs.r2}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Calculate</button>
    </form>
  );
}

export default CircuitForm;
