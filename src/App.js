import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CompaniesList from './components/companiesList';
import { useSelector } from 'react-redux';
import NavBar from './components/NavBar';
import Search from './components/Search';
import './App.css';
import CompanyProfile from './components/CompanyProfile';

function App() {
  const companyProfile = useSelector((state) => state.company.companyProfiles);

  return (
    <div className="main-container">
      <NavBar />
      <Search />
      <Routes>
        {companyProfile.length === 0 && (
          <Route path="/" element={<CompaniesList />} />
        )}
        <Route path="/company/:name" element={<CompanyProfile />} />
      </Routes>
    </div>
  );
}

export default App;
