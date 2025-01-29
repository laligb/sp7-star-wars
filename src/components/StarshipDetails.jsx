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
    <>
      <div
        className="col-lg-6 col-md-10 col-sm-12 py-2"
        style={{ fontSize: "1.3rem" }}
      >
        <p>
          <strong>Model: </strong>
          {starship.model}
        </p>
        <p>
          <strong>Manufacturer: </strong>
          {starship.manufacturer}
        </p>
        <p>
          <strong>Cost: </strong>
          {starship.cost_in_credits}
        </p>
        <p>
          <strong>Length: </strong>
          {starship.length}
        </p>
        <p>
          <strong>Crew:</strong> {starship.crew}
        </p>
        <p>
          <strong>Passengers: </strong>
          {starship.passengers}
        </p>
      </div>

      <div className="col-lg-6 col-md-10 col-sm-12 py-2">
        <img
          src={starship.image}
          // alt={starship.name}
          className="img-fluid"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
    </>
  );
}

export default StarshipDetails;
