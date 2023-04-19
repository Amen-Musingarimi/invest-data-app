import React from 'react';
import { useSelector } from 'react-redux';
import './styles/CompanyProfile.css';

const CompanyProfile = () => {
  const companyProfiles = useSelector((state) => state.company.companyProfiles);

  if (!companyProfiles || companyProfiles.length === 0) {
    return <div>No company profile data available.</div>;
  }

  return (
    <div className="companies-profile-container">
      {companyProfiles.map((company) => (
        <div className="companies-profile-details" key={company.id}>
          <h2 className="companies-profile-heading">PROFILE DETAILS</h2>
          <div className="companies-profile-detail">
            <h3>Company Name:</h3>
            <h3>{company.name}</h3>
          </div>
          <div className="companies-profile-detail">
            <h3>Financial Year:</h3>
            <h3>{company.year}</h3>
          </div>
          <div className="companies-profile-detail">
            <h3>Ranking:</h3>
            <h3>{company.rank}</h3>
          </div>
          <div className="companies-profile-detail">
            <h3>Revenue:</h3>
            <h3>
              $
              {company.revenue}
            </h3>
          </div>
          <div className="companies-profile-detail">
            <h3>Profit:</h3>
            <h3>
              $
              {company.profit}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CompanyProfile;
