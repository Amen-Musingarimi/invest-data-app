import React from 'react';
import { BiRightArrowAlt } from 'react-icons/bi';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCompanyProfileAsync } from '../redux/companies/companiesSlice';
import './styles/CompaniesList.css';

const CompanyButton = ({ name, rank }) => {
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
      <span className="company-symbol">{rank}</span>
      <span className="company-name">
        {name}
        <BiRightArrowAlt />
      </span>
    </Link>
  );
};

CompanyButton.propTypes = {
  name: PropTypes.string.isRequired,
  rank: PropTypes.string.isRequired,
};

export default CompanyButton;
