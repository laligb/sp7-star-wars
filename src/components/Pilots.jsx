import PilotCard from "./PilotCard";
import PropTypes from "prop-types";

function Pilots({ starship }) {
  return (
    <div className="col-12 mt-4">
      <div className="row">
        {starship.pilotData.length > 0 ? (
          starship.pilotData.map((pilot) => (
            <div key={pilot.name} className="col-md-3">
              <PilotCard image={pilot.image} name={pilot.name} />
            </div>
          ))
        ) : (
          <p>No pilots available.</p>
        )}
      </div>
    </div>
  );
}

Pilots.propTypes = {
  starship: PropTypes.shape({
    model: PropTypes.string.isRequired,
    manufacturer: PropTypes.string.isRequired,
    cost_in_credits: PropTypes.string.isRequired,
    length: PropTypes.string.isRequired,
    crew: PropTypes.string.isRequired,
    passengers: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    pilotData: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
};

export default Pilots;
