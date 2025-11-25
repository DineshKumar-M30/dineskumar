// src/components/StatCards.jsx
import React from "react";
import "./StatCards.css";

const stats = [
  {
    label: "Attendance",
    value: "80%",
    subtitle: "This month",
    icon: "/1.png",
  },
  {
    label: "Task Completed",
    value: "258+",
    subtitle: "Total",
    icon: "/2.png",
  },
  {
    label: "Task in Progress",
    value: "64%",
    subtitle: "Current",
    icon: "/3.png",
  },
  {
    label: "Reward Points",
    value: "245",
    subtitle: "Earned",
    icon: "/4.png",
  },
];

function StatCards() {
  return (
    <div className="statcards">
      {stats.map((s) => (
        <div key={s.label} className="statcard">
          <div className="statcard-icon">
            <img src={s.icon} alt={s.label} />
          </div>

          <div>
            <div className="statcard-label">{s.label}</div>
            <div className="statcard-value">{s.value}</div>
            <div className="statcard-subtitle">{s.subtitle}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default StatCards;
