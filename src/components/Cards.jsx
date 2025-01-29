// components/Cards.js
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStarships } from "../redux/slices/starshipsSlice";
import Card from "./Card";
import { Link } from "react-router-dom";

function Cards() {
  const dispatch = useDispatch();
  const { items, next, loading, error } = useSelector(
    (state) => state.starships
  );

  useEffect(() => {
    dispatch(getStarships());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!items || items.length === 0) {
    return <div>No starships found.</div>;
  }

  return (
    <div className="d-flex justify-content-center ">
      <div className="text-light">
        {items.map((starship) => (
          <Link
            to={`/starship/${starship.name}`}
            key={starship.name}
            className="text-white text-decoration-none"
          >
            <Card id={starship.name} />
          </Link>
        ))}
        {next && (
          <button
            onClick={() => dispatch(getStarships(next))}
            className="btn btn-success mt-3"
          >
            View More
          </button>
        )}
      </div>
    </div>
  );
}

export default Cards;
