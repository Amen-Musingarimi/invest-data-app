import CompaniesList from './components/companiesList';
import NavBar from './components/NavBar';
import Search from './components/Search';
import './App.css';
import CompanyProfle from './components/CompanyProfile';

function App() {
  return (
    <div className="main-container">
      <NavBar />
      <Search />
      <CompanyProfle />
      <CompaniesList />
    </div>
  );
}

export default App;
