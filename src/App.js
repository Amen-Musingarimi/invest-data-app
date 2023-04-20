import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import './App.css';
import CompanyProfile from './components/CompanyProfile';

function App() {
  return (
    <div className="main-container">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/company/:name" element={<CompanyProfile />} />
      </Routes>
    </div>
  );
}

export default App;
