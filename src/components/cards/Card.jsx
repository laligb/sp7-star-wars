// components/Card.js
import { useSelector } from "react-redux";

// eslint-disable-next-line react/prop-types
function Card({ id }) {
  const starship = useSelector((state) =>
    state.starships.items.find((starship) => starship.name === id)
  );

  if (!starship) {
    return <div>Loading starship data...</div>;
  }

  return (
    <div
      className="p-3 bg-dark my-3 opacity-50"
      style={{
        width: "700px",
      }}
    >
      <h5 className="card-title">{starship.name}</h5>
      <p className="card-text">Model: {starship.model}</p>
    </div>
  );
}

export default Card;
