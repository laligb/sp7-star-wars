// eslint-disable-next-line react/prop-types
function PilotCard({ image, name }) {
  return (
    <div className="card text-white bg-dark border-0 shadow-sm">
      <img src={image} className="card-img-top" alt={name} />
      <div className="card-body text-center">
        <h5 className="card-title">{name}</h5>
      </div>
    </div>
  );
}

export default PilotCard;
