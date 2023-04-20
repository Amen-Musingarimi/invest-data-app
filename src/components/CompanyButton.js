import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCompanyProfileAsync } from '../redux/companies/companiesSlice';

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
      <span className="company-symbol">
        $
        {profit}
      </span>
      <span className="company-name">{name}</span>
    </Link>
  );
};

CompanyButton.propTypes = {
  name: PropTypes.string.isRequired,
  profit: PropTypes.number.isRequired,
};

export default CompanyButton;
