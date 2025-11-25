import React from "react";
import "./AssignmentsTable.css";

const assignments = [
  {
    id: "01",
    task: "Read Chapter 1-3",
    subject: "English",
    due: "12 May 2024",
    status: "In Progress",
  },
  {
    id: "02",
    task: "Complete Problem Set 05",
    subject: "Maths",
    due: "12 May 2024",
    status: "In Progress",
  },
  {
    id: "03",
    task: "Write Lab report on Acid-Base Titration",
    subject: "Physics",
    due: "12 May 2024",
    status: "In Progress",
  },
  {
    id: "04",
    task: "Prepare for Oral Presentation",
    subject: "Chemistry",
    due: "12 May 2024",
    status: "In Progress",
  },
  {
    id: "05",
    task: "Create Art Piece for the Festival",
    subject: "EVS",
    due: "12 May 2024",
    status: "In Progress",
  },
  {
    id: "06",
    task: "Write Research Paper on Climate Change",
    subject: "EVS",
    due: "12 May 2024",
    status: "In Progress",
  },
  {
    id: "07",
    task: "Complete Math Quiz on Algebra",
    subject: "Math",
    due: "12 May 2024",
    status: "Completed",
  },
  {
    id: "08",
    task: "Prepare for History Class Debate",
    subject: "History",
    due: "12 May 2024",
    status: "Not Started",
  },
];

function statusClass(status) {
  if (status === "Completed") return "status completed";
  if (status === "Not Started") return "status not-started";
  return "status in-progress";
}

function AssignmentsTable() {
  return (
    <div className="assignments-card">
      <div className="assignments-header">
        <h4>Assignments</h4>
        <input placeholder="Search by subject" />
      </div>
      <div className="assignments-table-wrapper">
        <table className="assignments-table">
          <thead>
            <tr>
              <th>No</th>
              <th>Task</th>
              <th>Subject</th>
              <th>Due Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {assignments.map((a) => (
              <tr key={a.id}>
                <td>{a.id}</td>
                <td>{a.task}</td>
                <td>{a.subject}</td>
                <td>{a.due}</td>
                <td>
                  <span className={statusClass(a.status)}>{a.status}</span>
                </td>
                <td>
                  <button className="table-icon-btn">✏️</button>
                  <button className="table-icon-btn">🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="assignments-footer">
        <span>Showing 1 of 12</span>
        <div className="pagination-dots">
          <span className="dot active" />
          <span className="dot" />
          <span className="dot" />
        </div>
      </div>
    </div>
  );
}

export default AssignmentsTable;
