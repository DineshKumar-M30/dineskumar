import React from "react";
import Topbar from "./Topbar.jsx";
import StatCards from "./StatCards.jsx";
import NoticeBoard from "./NoticeBoard.jsx";
import AttendanceCard from "./AttendanceCard.jsx";
import TestScoreActivity from "./TestScoreActivity.jsx";
import GradeBySubject from "./GradeBySubject.jsx";
import Resources from "./Resources.jsx";
import DaySchedule from "./DaySchedule.jsx";
import AssignmentsTable from "./AssignmentsTable.jsx";
import MessagesPanel from "./MessagesPanel.jsx";
import DashboardIllustration from "../assets/dashboard-illustration.png";
import "../App.css";


function DashboardContent() {
  return (
    <>
      <section className="dashboard-grid">
        <div className="left-column">
          <div className="welcome-card">
            <div>
              <h2>Hey Ashwin.</h2>
              <p className="py-3">
                Welcome back! We&apos;re here to support you on your learning
                journey. Dive into your classes and keep progressing towards
                your goals.
              </p>
            </div>
            <div className="welcome-illustration">
              {/* Image replacement here */}
              <img
                src={DashboardIllustration}
                alt="Dashboard Illustration"
                className="welcome-person-img"
                style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>

          <StatCards />

          <NoticeBoard />

          <div className="charts-row">
            <TestScoreActivity />
            <GradeBySubject />
          </div>

          <AssignmentsTable />
        </div>

        <div className="right-column">
          <AttendanceCard />

          <div className="calendar-card">
            <div className="calendar-header">
              <span>September 2021</span>
              <div className="calendar-controls">
                <button>&lt;</button>
                <button>&gt;</button>
              </div>
            </div>
            <div className="calendar-grid">
              {["S", "M", "T", "W", "T", "F", "S"].map((d) => (
                <span key={d} className="calendar-day-name">
                  {d}
                </span>
              ))}
              {Array.from({ length: 30 }).map((_, i) => {
                const day = i + 1;
                const active = day === 21;
                return (
                  <button
                    key={day}
                    className={`calendar-day ${active ? "active" : ""}`}
                  >
                    {day}
                  </button>
                );
              })}
            </div>
          </div>

          <Resources />

          <DaySchedule />

          <MessagesPanel />
        </div>
      </section>
    </>
  );
}

export default DashboardContent;