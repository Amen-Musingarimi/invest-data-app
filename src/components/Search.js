import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCompanyProfileAsync } from '../redux/companies/companiesSlice';
import './styles/Search.css';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    dispatch(getCompanyProfileAsync(searchTerm));
  };

  const companyProfile = useSelector((state) => state.company.companyProfiles);
  console.log(companyProfile);

  return (
    <div className="search-container">
      <form className="search-form">
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Search By Name e.g Chevron"
          className="search-input"
        ></input>
        <button type="button" className="search-button" onClick={handleSearch}>
          Search
        </button>
      </form>
      <div className="search-results-list">
        {companyProfile.map((company) => (
          <Link
            to={`/company/${company.name}`}
            className="search-result-company-link"
            onClick={() => {
              dispatch(getCompanyProfileAsync(company.name));
            }}
          >
            <span className="company-symbol">${company.profit}</span>
            <span className="company-name">{company.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Search;
