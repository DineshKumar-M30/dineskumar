import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EcommerceApp from './ecommerce/EcommerceApp';

function App() {
  return (
    <Router>
      <Routes>
        {/* E-commerce Platform - Primary Application */}
        <Route path="/*" element={<EcommerceApp />} />
      </Routes>
    </Router>
  );
}

export default App;
