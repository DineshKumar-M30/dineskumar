import React from "react";
import "./NoticeBoard.css";
import { FiBell } from "react-icons/fi"; // ← imported icon

const notices = [
  {
    title: "Sports Day Announcement",
    desc: "The school's Annual Sports Day will be held on May 12, 2024. Mark your calendars!",
    // tag: "High Priority",
    color: "#fee2e2",
  },
  {
    title: "Summer Break Start Date",
    desc: "Summer break begins on May 25, 2024. Have a wonderful holiday!",
    // tag: "Info",
    color: "#e0f2fe",
  },
];

function NoticeBoard() {
  return (
    <div className="notice-board">
      <div className="notice-header">
        <h4>Notice Board</h4>
        <button>View All</button>
      </div>

      <div className="notice-list">
        {notices.map((n) => (
          <div key={n.title} className="notice-item">

            <span className="notice-tag" style={{ backgroundColor: n.color }}>
              {n.tag}
            </span>

            {/* Icon imported from library */}
            <div className="notice-title">
              <FiBell size={16} />
              {n.title}
            </div>

            <div className="notice-desc">{n.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NoticeBoard;
