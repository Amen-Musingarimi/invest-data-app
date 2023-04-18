import React from 'react';
import { useDispatch } from 'react-redux';
import { getCompanyProfileAsync } from '../redux/companies/companiesSlice';
import { Link } from 'react-router-dom';

import './styles/CompaniesList.css';

const CompanyButton = ({ name, profit }) => {
  const dispatch = useDispatch();

  const handleCompanyProfile = () => {
    dispatch(getCompanyProfileAsync(name));
  };

  return (
    <Link
      to={`/company/${name}`}
      className="company-link list-item"
      onClick={handleCompanyProfile}
    >
      <span className="company-symbol">${profit}</span>
      <span className="company-name">{name}</span>
    </Link>
  );
};

export default CompanyButton;
