import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Arena from './arena';
import Start from './details';
import Login from './Login';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Arena />} />
        <Route path="/details" element={<Start />} />
      </Routes>
    </Router>
  );
}

export default App;