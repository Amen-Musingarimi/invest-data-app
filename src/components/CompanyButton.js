import React from 'react';
import { useDispatch } from 'react-redux';
import { getCompanyProfileAsync } from '../redux/companies/companiesSlice';

import './styles/CompaniesList.css';

const CompanyButton = ({ name, profit }) => {
  const dispatch = useDispatch();

  const handleCompanyProfile = () => {
    dispatch(getCompanyProfileAsync(name));
  };

  return (
    <a
      href="#"
      className="company-link list-item"
      onClick={handleCompanyProfile}
    >
      <span className="company-symbol">${profit}</span>
      <span className="company-name">{name}</span>
    </a>
  );
};

export default CompanyButton;
