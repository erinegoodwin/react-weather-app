import { CurrentWeather } from ".";
import { WidgetList } from "../UI";
import './CurrentWeatherInner.css';

export const CurrentWeatherInner = () => {
    return (
        <div className="current-weather-inner">
            <CurrentWeather />
            <WidgetList />
        </div>
    )
}
