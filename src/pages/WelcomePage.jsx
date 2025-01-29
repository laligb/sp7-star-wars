import { Link } from "react-router-dom";

function WelcomePage() {
  return (
    <div className="welcome-page text-center p-5   text-white">
      <h1 className="mb-4">Welcome to the Galaxy of Starships</h1>
      <p className="mb-4">
        Step into the Star Wars universe and explore the iconic starships that
        have defined generations. From legendary battleships to sleek cruisers,
        every ship has its own story to tell.
      </p>
      <p className="mb-4">
        Click below to dive into the details and discover the specs, history,
        and beauty of these incredible starships. Adventure awaits!
      </p>
      <Link to="/starships" className="btn btn-success btn-lg">
        Explore Starships
      </Link>
    </div>
  );
}

export default WelcomePage;
