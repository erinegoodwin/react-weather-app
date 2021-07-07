import "./Page.css";
import "./HomePage.css";
import { Card } from "../components/UI";
import { SearchForm } from "../components/Utility";

export const HomePage = () => {
  return (
    <>
      <Card>
        <h1>Check the Weather</h1>
        <SearchForm />
      </Card>
    </>
  );
};
