import "./Location.css";
import { Link } from "react-router-dom";

export const Location = () => {
  return (
    <div>
      <h2 className="location">Detroit, Michigan</h2>
      <Link className="location-change" to="/">
        Change location
      </Link>
    </div>
  );
};
