import StockImage from './assets/background.jpg';
import './styles/Search.css';

const Search = () => {
  return (
    <div className="search-container">
      <img src={StockImage} alt="Stock" className="stock-image"></img>
      <form className="search-form">
        <input
          type="text"
          placeholder="Search By Name e.g Chevron"
          className="search-input"
        ></input>
        <button type="button" className="search-button">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
