import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import CompaniesList from './components/companiesList';
import NavBar from './components/NavBar';
import Search from './components/Search';
import './App.css';
import CompanyProfile from './components/CompanyProfile';

function App() {
  return (
    <div className="main-container">
      <Provider store={store}>
        <NavBar />
        <Search />
        <Routes>
          <Route path="/" element={<CompaniesList />} />
          <Route path="/company/:name" element={<CompanyProfile />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
