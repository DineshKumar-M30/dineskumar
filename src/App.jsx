import React, { useState } from "react"; 
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Sidebar from "./Components/Sidebar.jsx";
import Topbar from "./Components/Topbar.jsx";

import StudentsList from "./Components/StudentsList.jsx"; 
import AddStudentForm from "./Components/AddStudentForm.jsx";
import FeesManagement from "./Components/FeesManagement.jsx";
import CalendarPage from "./Components/CalendarPage.jsx";
import SettingsPage from "./Components/SettingsPage.jsx";
import TeachersList from "./Components/TeachersList.jsx";
import SchoolExpenses from "./Components/SchoolExpenses.jsx";
import TimeTablePage from "./Components/TimeTablePage.jsx";
import MessagePage from "./Components/MessagePage.jsx";
import DashboardContent from "./Components/DashboardContent.jsx";


function App() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const toggleMobileSidebar = () => setIsMobileOpen(prev => !prev);

  return (
    <div className={`app ${isMobileOpen ? 'mobile-menu-open' : ''}`}>
      <Sidebar isMobileOpen={isMobileOpen} toggleMobileSidebar={toggleMobileSidebar} />

      <main className="main">
        <Routes>
          <Route path="/" element={
            <>
              <Topbar onMenuToggle={toggleMobileSidebar} /> 
              <DashboardContent />
            </>
          } /> 
          <Route path="/teachers" element={
            <>
              <Topbar onMenuToggle={toggleMobileSidebar} />
              <TeachersList />
            </>
          } />
          <Route path="/students" element={
            <>
              <Topbar onMenuToggle={toggleMobileSidebar} />
              <StudentsList />
            </>
          } />
          <Route path="/students/add" element={
            <>
              <Topbar onMenuToggle={toggleMobileSidebar} />
              <AddStudentForm />
            </>
          } />
          {/* New routes for Finance section */}
          <Route path="/fees/management" element={
            <>
              <Topbar onMenuToggle={toggleMobileSidebar} />
              <FeesManagement /> 
            </>
          } />
          <Route path="/fees/expenses" element={
            <>
              <Topbar onMenuToggle={toggleMobileSidebar} />
              <SchoolExpenses />
            </>
          } />
        <Route path="/calendar" element={
            <>
              <Topbar onMenuToggle={toggleMobileSidebar} />
              <CalendarPage />
            </>
          } />
          <Route path="/timetable" element={
            <>
              <Topbar onMenuToggle={toggleMobileSidebar} />
              <TimeTablePage />
            </>
          } />
          <Route path="/message" element={
            <>
              <Topbar onMenuToggle={toggleMobileSidebar} />
              <MessagePage />
            </>
          } />
        <Route path="/settings" element={
            <>
              <Topbar onMenuToggle={toggleMobileSidebar} />
              <SettingsPage />
            </>
          } />
        </Routes>
      </main>
      {/* Mobile Overlay is added for aesthetic and usability reasons */}
      {isMobileOpen && <div className="mobile-overlay" onClick={toggleMobileSidebar} />}
    </div>
  );
}

export default App;
