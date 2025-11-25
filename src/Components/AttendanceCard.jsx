import React from "react";
import "./AttendanceCard.css";

function AttendanceCard() {
  return (
    <div className="attendance-card">
      <div className="attendance-header">
        <h4>Attendance</h4>
        <span className="attendance-legend present">Present</span>
        <span className="attendance-legend absent">Absent</span>
      </div>
      <div className="attendance-body">
        <div className="attendance-ring">
          <div className="attendance-ring-inner">
            <span>80%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AttendanceCard;
