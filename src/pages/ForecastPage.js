import { Card, Nav } from "../components/UI";
import { Link } from 'react-router-dom';

export const ForecastPage = () => {
    return (
        <>
            <Card className='page'>
                <Nav />
                <h1>Forecast</h1>
                <Link to="/">Home</Link>
            </Card>
        </>
    )
}