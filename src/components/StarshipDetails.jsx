import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function StarshipDetails() {
  const { id } = useParams();

  const starship = useSelector((state) =>
    state.starships.items.find(
      (starship) => starship.name === decodeURIComponent(id)
    )
  );

  if (!starship) {
    return <div>Loading starship details...</div>;
  }
  return (
    <div className="p-3 text-white text-center">
      <h1>{starship.name.toUpperCase()}</h1>
      <p>Model: {starship.model}</p>
      <p>Manufacturer: {starship.manufacturer}</p>
      <p>Cost: {starship.cost_in_credits}</p>
      <p>Length: {starship.length}</p>
      <p>Crew: {starship.crew}</p>
      <p>Passengers: {starship.passengers}</p>
    </div>
  );
}

export default StarshipDetails;
