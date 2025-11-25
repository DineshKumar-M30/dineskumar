import React from "react";
import "./DaySchedule.css";

const schedule = [
  { type: "subject", label: "Tamil" },
  { type: "subject", label: "English" },
  { type: "break", label: "Break" },
  { type: "subject", label: "Math" },
  { type: "subject", label: "Science" },
  { type: "lunch", label: "Lunch" },
  { type: "subject", label: "Social" },
  { type: "subject", label: "CS" },
  { type: "break", label: "Break" },
  { type: "subject", label: "Tamil" },
  { type: "subject", label: "English" },
];

export default function DaySchedule() {
  return (
    <div className="day-card">
      {/* Header */}
      <div className="day-header">
        <button className="nav-btn">‹</button>
        <h2>Monday</h2>
        <button className="nav-btn">›</button>
      </div>

      <hr className="divider" />

      {/* Items */}
      <div className="day-list">
        {schedule.map((item, i) => (
          <div key={i}>
            {item.type === "subject" && (
              <p className="subject-text">{item.label}</p>
            )}

            {item.type === "break" && (
              <div className="break-bar">{item.label}</div>
            )}

            {item.type === "lunch" && (
              <div className="lunch-bar">{item.label}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
