import PropTypes from "prop-types";

function StarshipDetails({ starship }) {
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

StarshipDetails.propTypes = {
  starship: PropTypes.shape({
    model: PropTypes.string.isRequired,
    manufacturer: PropTypes.string.isRequired,
    cost_in_credits: PropTypes.string.isRequired,
    length: PropTypes.string.isRequired,
    crew: PropTypes.string.isRequired,
    passengers: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default StarshipDetails;
