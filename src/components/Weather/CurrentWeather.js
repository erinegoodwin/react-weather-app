import { Location } from '../Utility';
import SUNICON from '../../assets/icons/sun.png'
import './CurrentWeather.css';

export const CurrentWeather = () => {
    return (
        <div className="current-weather__container">
            <Location />
            <img className="weather-icon__large" src={SUNICON} alt="Sunny" />
            <h3>Sunny</h3>
            <h3 className="temp">68°F / 20°C</h3>
        </div>
    )
}
