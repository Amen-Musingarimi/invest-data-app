import React from 'react';
import { useSelector } from 'react-redux';

const CompanyProfile = () => {
  const companyProfiles = useSelector((state) => state.company.companyProfiles);

  if (!companyProfiles || companyProfiles.length === 0) {
    return <div>No company profile data available.</div>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Name:</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        {companyProfiles.map((company) => (
          <React.Fragment key={company.id}>
            <tr>
              <td>Company Name</td>
              <td>{company.name}</td>
            </tr>
            <tr>
              <td>Company Profit</td>
              <td>{company.profit}</td>
            </tr>
            <tr>
              <td>Company Ranking</td>
              <td>{company.rank}</td>
            </tr>
            <tr>
              <td>Company Revenue</td>
              <td>{company.revenue}</td>
            </tr>
            <tr>
              <td>Financial Year</td>
              <td>{company.year}</td>
            </tr>
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default CompanyProfile;

// import React from 'react';
// import { useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';

// const CompanyProfile = () => {
//   const { companyName } = useParams();

//   const companyProfile = useSelector((state) => state.company.companyProfiles);
//   console.log(companyProfile);

//   const company = companyProfile.find(
//     (company) => company.name === companyName
//   );

//   return (
//     <table border="1">
//       <thead>
//         <tr>
//           <th>Name:</th>
//           <th>Details</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>Company Name</td>
//           <td>{company.name}</td>
//         </tr>
//         <tr>
//           <td>Company Profit</td>
//           <td>{company.profit}</td>
//         </tr>
//         <tr>
//           <td>Company Ranking</td>
//           <td>{company.rank}</td>
//         </tr>
//         <tr>
//           <td>Company Revenue</td>
//           <td>{company.revenue}</td>
//         </tr>
//         <tr>
//           <td>Financial Year</td>
//           <td>{company.financialYear}</td>
//         </tr>
//       </tbody>
//     </table>
//   );
// };

// export default CompanyProfile;
