import { useSelector } from 'react-redux';
import Search from './Search';
import CompaniesList from './companiesList';

const HomePage = () => {
  const companyProfile = useSelector((state) => state.company.companyProfiles);
  return (
    <>
      <Search />
      {companyProfile.length === 0 && <CompaniesList />}
    </>
  );
};

export default HomePage;
