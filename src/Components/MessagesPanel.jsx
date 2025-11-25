// src/components/MessagesPanel.jsx
import React from "react";
import "./MessagesPanel.css";

const messages = [
  { name: "Jane Cooper", status: "Don’t forget the lab rep..." },
  { name: "Kristin Watson", status: "Do we have maths test...." },
  { name: "Jenny Wilson", status: "Wud?" },
  { name: "Brooklyn Sim", status: "Did Sachin gave any ki..." },
  { name: "Darrell Steward", status: "Can we go for a movie .." },
];

function MessagesPanel() {
  return (
    <div className="messages-card">
      <div className="messages-header">
        <h4>Messages</h4>
        <button>See all</button>
      </div>
      <div className="messages-list">
        {messages.map((m) => (
          <div key={m.name} className="message-item">
            <div className="message-avatar">{m.name[0]}</div>
            <div className="message-text">
              <span className="message-name">{m.name}</span>
              <span className="message-status">
                {m.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MessagesPanel;
