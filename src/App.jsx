import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ServiceBookingApp from './service-booking/ServiceBookingApp';

function App() {
  return (
    <Router>
      <Routes>
        {/* Service Booking Platform - Main Application */}
        <Route path="/*" element={<ServiceBookingApp />} />
      </Routes>
    </Router>
  );
}

export default App;
