import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EcommerceApp from './ecommerce/EcommerceApp';
import InteriorApp from './interior/InteriorApp';

function App() {
  return (
    <Router>
      <Routes>
        {/* Interior Design App - Default Route */}
        <Route path="/" element={<InteriorApp />} />

        {/* E-commerce Platform */}
        <Route path="/ecommerce/*" element={<EcommerceApp />} />
      </Routes>
    </Router>
  );
}

export default App;
