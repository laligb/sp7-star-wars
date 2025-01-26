// components/Cards.js
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStarships } from "../redux/slices/starshipsSlice";
import Card from "./Card";

function Cards() {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.starships);

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
      <div className="bg-dark text-light ">
        {items.map((starship) => (
          <div key={starship.name}>
            <Card id={starship.name} />{" "}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
