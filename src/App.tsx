import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ApplicationForm from './pages/ApplicationForm';
import VideoTutorial from './pages/VideoTutorial';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/application-form" element={<ApplicationForm />} />
          <Route path="/video-tutorials" element={<VideoTutorial />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;