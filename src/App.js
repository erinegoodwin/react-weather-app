import { HomePage, CurrentWeatherPage, ForecastPage } from "./pages";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/current-weather">
            <CurrentWeatherPage />
          </Route>
          <Route path="/forecast">
            <ForecastPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
