import React from "react";
import "./GradeBySubject.css";

const subjects = [
  { name: "English", value: 80, color: "#b97eefff" },
  { name: "Tamil", value: 72, color: "#b97eefff" },
  { name: "Math", value: 65, color: "#b97eefff" },
  { name: "Chemistry", value: 78, color: "#b97eefff" },
  { name: "Physics", value: 70, color: "#b97eefff" },
  { name: "Computer Science", value: 90, color: "#b97eefff" },
  { name: "Biology", value: 90, color: "#b97eefff" },
  { name: "English", value: 80, color: "#b97eefff" },

];

function GradeBySubject() {
  return (
    <div className="gbs-card">
      <div className="gbs-header">
        <h4>Grade by Subject</h4>
      </div>

      {/* 2 COLUMN GRID */}
      <div className="gbs-grid">
        {subjects.map((s) => (
          <div key={s.name} className="gbs-item">

            {/* Progress Bar with name inside */}
            <div className="gbs-bar-bg">
              <div
                className="gbs-bar-fill"
                style={{ width: `${s.value}%`, backgroundColor: s.color }}
              >
                <span className="gbs-label">{s.name}</span>
              </div>
            </div>

            {/* % Value */}
            <div className="gbs-value">{s.value}%</div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default GradeBySubject;
