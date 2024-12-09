import React from "react";

function ResultsTable({ data }) {
  const { voltage, r1, r2, current, u1, u2, p1, p2 } = data;

  return (
    <table>
      <thead>
        <tr>
          <th>R1 (Ω)</th>
          <th>R2 (Ω)</th>
          <th>Current (mA)</th>
          <th>U1 (V)</th>
          <th>U2 (V)</th>
          <th>P1 (mW)</th>
          <th>P2 (mW)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{r1}</td>
          <td>{r2}</td>
          <td>{current.toFixed(2)}</td>
          <td>{u1.toFixed(2)}</td>
          <td>{u2.toFixed(2)}</td>
          <td>{p1.toFixed(2)}</td>
          <td>{p2.toFixed(2)}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default ResultsTable;
