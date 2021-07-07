import "./SearchForm.css";
import SEARCHICON from "../../assets/icons/search-icon.png";
import { Link } from "react-router-dom";

export const SearchForm = () => {
  return (
    <>
      <h2>Search for location:</h2>
      <form>
        <img src={SEARCHICON} alt="Search Icon" />
        <input type="text" placeholder="ex. Detroit, USA or 48127" />
        <div className="buttons">
          <Link to="/current-weather">
            <button className="primary-button" type="submit">
              Search for location
            </button>
          </Link>
          <Link to="/current-weather">
            <button>Use current location</button>
          </Link>
        </div>
      </form>
    </>
  );
};
