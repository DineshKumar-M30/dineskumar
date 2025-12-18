import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from './components/Sidebar';
import CourseListing from './lms/pages/CourseListing';
import CourseDetail from './lms/pages/CourseDetail';
import InstructorDashboard from './lms/pages/InstructorDashboard';
import StudentDashboard from './lms/pages/StudentDashboard';

import ServiceBookingApp from './service-booking/ServiceBookingApp';

function App() {
  return (
    <Router>
      <Routes>
        {/* Service Booking Platform - Main Application */}
        <Route path="/*" element={<ServiceBookingApp />} />

        {/* Legacy LMS Routes - Moved to /lms-app */}
        <Route path="/lms-app/*" element={
          <div className="flex min-h-screen bg-[#0f172a] text-white">
            <Sidebar />
            <main className="flex-1 ml-64 p-8 transition-all duration-300">
              <Routes>
                <Route path="/" element={<CourseListing />} />
                <Route path="/lms" element={<CourseListing />} />
                <Route path="/lms/course/:id" element={<CourseDetail />} />
                <Route path="/lms/instructor" element={<InstructorDashboard />} />
                <Route path="/lms/student" element={<StudentDashboard />} />
              </Routes>
            </main>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
