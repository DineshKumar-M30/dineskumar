// src/components/TestScoreActivity.jsx
import React from "react";
import "./TestScoreActivity.css";

const points = [40, 55, 60, 45, 72, 68, 70];

function TestScoreActivity() {
  return (
    <div className="tsa-card">
      <div className="tsa-header">
        <div>
          <h4>Test Score activity</h4>
        </div>
        <span className="tsa-percent">70%</span>
      </div>
      <div className="tsa-chart">
        <svg viewBox="0 0 220 80" preserveAspectRatio="none">
          <polyline
            fill="rgba(252, 211, 77, 0.35)"
            stroke="#fbbf24"
            strokeWidth="2"
            points={points
              .map((v, i) => {
                const x = (i / (points.length - 1)) * 220;
                const y = 80 - (v / 100) * 70 - 5;
                return `${x},${y}`;
              })
              .join(" ")}
          />
        </svg>
      </div>
      <div className="tsa-footer">
        {["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"].map((m) => (
          <span key={m}>{m}</span>
        ))}
      </div>
    </div>
  );
}

export default TestScoreActivity;
