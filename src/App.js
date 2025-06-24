import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage';
import Portfolio from './portfolio';

function App() {
  return (
    <Router>
      <div className="tf2-home">
        <Routes>
          <Route path="/" element={<HomePageWithNav />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
        {/* Add footer or other global components here later */}
      </div>
    </Router>
  );
}

// Helper component to inject navigation into HomePage
function HomePageWithNav() {
  const navigate = useNavigate();
  return <HomePage onInventoryClick={() => navigate('/portfolio')} />;
}

export default App;