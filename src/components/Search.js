import React, { useState } from 'react';
import { BiRightArrowAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCompanyProfileAsync,
  clearCompanyProfile,
} from '../redux/companies/companiesSlice';
import './styles/Search.css';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [linkClicked, setLinkClicked] = useState(false);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== '') {
      dispatch(getCompanyProfileAsync(searchTerm));
      dispatch(clearCompanyProfile());
      setLinkClicked(false);
      setError(false);
      setSearchTerm('');
    } else {
      setError(true);
    }
  };

  const companyProfile = useSelector((state) => state.company.companyProfiles);

  const handleClick = () => {
    setLinkClicked(true);
  };

  return (
    <div className="search-container">
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Search By Name e.g Chevron"
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      {error && (
        <div className="error-message">Please enter a valid search term.</div>
      )}
      <p className="heads-up-text">2009 Top 100 Rankings!</p>
      {!linkClicked && (
        <div className="search-results-list">
          {companyProfile.map((company) => (
            <Link
              to={`/company/${company.name}`}
              key={company.id}
              className="search-result-company-link"
              onClick={() => {
                dispatch(getCompanyProfileAsync(company.name));
                dispatch(clearCompanyProfile());
                handleClick();
              }}
            >
              <span className="company-symbol">
                $
                {company.profit}
              </span>
              <span className="company-name">
                {company.name}
                {' '}
                <BiRightArrowAlt />
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
