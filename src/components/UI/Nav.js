import { Link } from 'react-router-dom';
import './Nav.css';

export const Nav = () => {
    return (
        <nav>
          <button className='primary-button'><Link to="/current-weather">Current Weather</Link></button>
          <button><Link to="/forecast">7-Day Forecast</Link></button>
        </nav>
    )
}
