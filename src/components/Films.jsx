import PilotCard from "./cards/PilotCard";
import PropTypes from "prop-types";

function Films({ starship }) {
  return (
    <div className="col-12 mt-4">
      <div className="row">
        {starship.filmData.length > 0 ? (
          starship.filmData.map((film) => (
            <div key={film.title} className="col-md-3">
              <PilotCard image={film.image} name={film.title} />
            </div>
          ))
        ) : (
          <p>No films available.</p>
        )}
      </div>
    </div>
  );
}

Films.propTypes = {
  starship: PropTypes.shape({
    model: PropTypes.string.isRequired,
    manufacturer: PropTypes.string.isRequired,
    cost_in_credits: PropTypes.string.isRequired,
    length: PropTypes.string.isRequired,
    crew: PropTypes.string.isRequired,
    passengers: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    filmData: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        release_date: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
};

export default Films;
