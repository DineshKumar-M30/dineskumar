// src/components/Resources.jsx
import React from "react";
import "./Resources.css";

const resources = [
  { title: "Books", icon: "/book.png", color: "#fee2e2" },
  { title: "Videos", icon: "/video.png", color: "#e0f2fe" },
  { title: "Papers", icon: "/paper.png", color: "#e0f2fe" },
];

function Resources() {
  return (
    <div className="resources-card">
      <div className="resources-header">
        <h4>Resources</h4>
        <button>View all</button>
      </div>

      <div className="resources-grid">
        {resources.map((r) => (
          <div key={r.title} className="resource-item">
            <div
              className="resource-icon"
              style={{ backgroundColor: r.color }}
            >
              <img src={r.icon} alt={r.title} className="resource-img" />
            </div>
            <span>{r.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Resources;
