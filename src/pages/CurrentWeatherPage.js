import { Card, Nav, WidgetList } from '../components/UI';
import { Date } from '../components/Utility';
import { CurrentWeatherInner } from '../components/Weather';
import './Page.css';
import './CurrentWeatherPage.css';
import { Link } from 'react-router-dom';

export const CurrentWeatherPage = () => {
    return (
        <>
            <Card className='page'>
                <Nav />
                <CurrentWeatherInner />
            </Card>
        </>
    )
}

